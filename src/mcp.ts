#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

import { getBrand } from "./lib/brand";
import { getThemes } from "./lib/themes";
import { createCarousel, addSlide } from "./lib/carousels";

const server = new Server(
  {
    name: "slidr-mcp",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Define tool schemas
const CreateCarouselSchema = z.object({
  name: z.string().describe("Name of the carousel"),
  aspectRatio: z.enum([
    "ig-1:1", "ig-4:5", "ig-3:4", "ig-9:16", 
    "li-1:1", "li-4:5", "li-16:9", 
    "tt-9:16"
  ]).describe("Aspect ratio for the carousel (e.g. ig-4:5 for Instagram, li-4:5 for LinkedIn)"),
});

const AddSlideSchema = z.object({
  carouselId: z.string().describe("ID of the carousel to add a slide to"),
  html: z.string().describe("Body-level HTML for the slide"),
  notes: z.string().optional().describe("Internal notes or generation reasoning"),
});

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_brand",
        description: "Get the current user's global brand settings, including colors, fonts, and author details. Use this to style the slides correctly.",
        inputSchema: { type: "object", properties: {} },
      },
      {
        name: "list_themes",
        description: "List all available design themes (presets) in Slidr.",
        inputSchema: { type: "object", properties: {} },
      },
      {
        name: "create_carousel",
        description: "Create a new carousel project.",
        inputSchema: {
          type: "object",
          properties: {
            name: { type: "string" },
            aspectRatio: { 
              type: "string",
              enum: ["ig-1:1", "ig-4:5", "ig-3:4", "ig-9:16", "li-1:1", "li-4:5", "li-16:9", "tt-9:16"]
            },
          },
          required: ["name", "aspectRatio"],
        },
      },
      {
        name: "add_slide",
        description: "Add a slide to an existing carousel project. The HTML should use the provided brand/theme colors.",
        inputSchema: {
          type: "object",
          properties: {
            carouselId: { type: "string" },
            html: { type: "string" },
            notes: { type: "string" },
          },
          required: ["carouselId", "html"],
        },
      },
    ],
  };
});

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  try {
    switch (request.params.name) {
      case "get_brand": {
        const brand = await getBrand();
        return {
          content: [{ type: "text", text: JSON.stringify(brand, null, 2) }],
        };
      }

      case "list_themes": {
        const themes = await getThemes();
        return {
          content: [{ type: "text", text: JSON.stringify(themes, null, 2) }],
        };
      }

      case "create_carousel": {
        const { name, aspectRatio } = CreateCarouselSchema.parse(request.params.arguments);
        const carousel = await createCarousel(name, aspectRatio as any);
        return {
          content: [
            {
              type: "text",
              text: \`Carousel created successfully. ID: \${carousel.id}\nView it at: http://localhost:3000/carousel/\${carousel.id}\`,
            },
          ],
        };
      }

      case "add_slide": {
        const { carouselId, html, notes } = AddSlideSchema.parse(request.params.arguments);
        const slide = await addSlide(carouselId, html, notes);
        if (!slide) {
          throw new McpError(ErrorCode.InvalidParams, "Carousel not found or max slides reached");
        }
        return {
          content: [
            {
              type: "text",
              text: \`Slide added successfully. Slide ID: \${slide.id}\`,
            },
          ],
        };
      }

      default:
        throw new McpError(ErrorCode.MethodNotFound, \`Unknown tool: \${request.params.name}\`);
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new McpError(ErrorCode.InvalidParams, \`Invalid arguments: \${error.message}\`);
    }
    throw error;
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Slidr MCP server running on stdio");
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
