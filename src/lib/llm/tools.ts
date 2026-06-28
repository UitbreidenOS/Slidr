import type { LlmTool } from "./types";

/**
 * Tool definitions exposed to the LLM in both HTTP and CLI modes.
 * In HTTP mode, Slidr executes these server-side (no curl to self).
 * In CLI mode, the CLI uses curl to call the API routes directly (open-carrusel pattern).
 */
export const SLIDE_TOOLS: LlmTool[] = [
  {
    type: "function",
    function: {
      name: "create_slide",
      description: "Create a new slide in the current carousel. Call this once per slide, sequentially. The html parameter is body-level HTML only (no <html>, <head>, <body>, or <script> tags).",
      parameters: {
        type: "object",
        properties: {
          html: {
            type: "string",
            description: "Body-level HTML for the slide. Use inline styles or <style> tags. font-family declarations auto-load Google Fonts. Target the exact pixel dimensions of the carousel's aspect ratio.",
          },
          notes: {
            type: "string",
            description: "Brief description of what this slide shows (e.g., 'Hook slide with bold headline').",
          },
        },
        required: ["html"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "update_slide",
      description: "Update an existing slide's HTML content. Use when the user asks to modify a specific slide.",
      parameters: {
        type: "object",
        properties: {
          slideId: { type: "string", description: "The ID of the slide to update." },
          html: { type: "string", description: "New body-level HTML for the slide." },
        },
        required: ["slideId", "html"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "delete_slide",
      description: "Delete a slide from the carousel.",
      parameters: {
        type: "object",
        properties: {
          slideId: { type: "string", description: "The ID of the slide to delete." },
        },
        required: ["slideId"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "set_caption",
      description: "Save the Instagram/LinkedIn caption and hashtags for the carousel.",
      parameters: {
        type: "object",
        properties: {
          caption: { type: "string", description: "The post caption text." },
          hashtags: {
            type: "array",
            items: { type: "string" },
            description: "Array of hashtag strings without the # symbol.",
          },
        },
        required: ["caption"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "fetch_url",
      description: "Fetch the content of a web URL to extract information for carousel creation. Use when the user provides a link to an article, blog post, or webpage.",
      parameters: {
        type: "object",
        properties: {
          url: { type: "string", description: "The URL to fetch." },
        },
        required: ["url"],
      },
    },
  },
];
