import fs from "fs";
import path from "path";
import crypto from "crypto";

const DEST = path.resolve("./data/prebuilt-templates.json");

const palettes = [
  { name: "Notion Light", bg: "#FFFFFF", text: "#37352f", accent: "#F1F1EF", highlight: "#FBF3DB", tag: "notion" },
  { name: "Clean White", bg: "#FFFFFF", text: "#111111", accent: "#F3F4F6", highlight: "#FEF3C7", tag: "minimal" },
  { name: "Tweet Blue", bg: "#F0F4F8", text: "#0F1419", accent: "#FFFFFF", highlight: "#1DA1F2", tag: "social" },
  { name: "Pastel Peach", bg: "#FFF5F0", text: "#4A3B32", accent: "#FFFFFF", highlight: "#FFEDD5", tag: "pastel" },
  { name: "Mint Green", bg: "#F0FDF4", text: "#14532D", accent: "#FFFFFF", highlight: "#DCFCE7", tag: "pastel" },
  { name: "Modern Sand", bg: "#FDFBF7", text: "#3A342B", accent: "#F3EFE6", highlight: "#FEF08A", tag: "earthy" },
  { name: "Soft Lavender", bg: "#FAF5FF", text: "#4C1D95", accent: "#FFFFFF", highlight: "#F3E8FF", tag: "pastel" },
  { name: "Off-White Classic", bg: "#FAFAFA", text: "#171717", accent: "#F5F5F5", highlight: "#E5E5E5", tag: "minimal" },
  { name: "Warm Cream", bg: "#FFFBF0", text: "#453227", accent: "#FFFFFF", highlight: "#FDE68A", tag: "earthy" },
  { name: "Slate Dark", bg: "#18181B", text: "#F4F4F5", accent: "#27272A", highlight: "#3F3F46", tag: "dark" }
];

const fonts = [
  { family: "'Inter', sans-serif", type: "sans" },
  { family: "'Plus Jakarta Sans', sans-serif", type: "sans" },
  { family: "'Space Grotesk', sans-serif", type: "mono" },
  { family: "'Georgia', serif", type: "serif" },
  { family: "'Playfair Display', serif", type: "serif" }
];

const layouts = [
  "notion-doc", 
  "tweet-mockup", 
  "highlighter-text", 
  "step-listicle", 
  "mac-window", 
  "minimal-wireframe"
];
const aspects = ["ig-4:5", "ig-1:1", "li-4:5", "tt-9:16"];

const id = () => crypto.randomUUID();

// SVG Backgrounds
const gridSvg = (c) => `url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0 0h40v40H0V0zm1 1h38v38H1V1z%22 fill=%22${encodeURIComponent(c)}%22 fill-opacity=%220.05%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')`;
const dotSvg = (c) => `url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%221%22 fill=%22${encodeURIComponent(c)}%22 fill-opacity=%220.15%22/%3E%3C/svg%3E')`;

function generateNotionDoc(p, f) {
  return `
<div style="width:100%;height:100%;background-color:${p.bg};display:flex;flex-direction:column;padding:80px;font-family:'Inter', sans-serif;color:${p.text};">
  <div style="font-size:18px;color:${p.text};opacity:0.5;margin-bottom:60px;font-weight:500;">
    Workspace / Projects / Ideas
  </div>
  <div style="font-size:120px;margin-bottom:30px;">📝</div>
  <h1 style="font-size:90px;font-weight:800;margin-bottom:40px;letter-spacing:-0.03em;line-height:1.1;">
    How to Build<br/>a Modern App
  </h1>
  <div style="width:100%;height:1px;background-color:${p.text};opacity:0.1;margin-bottom:40px;"></div>
  
  <div style="display:flex;align-items:center;margin-bottom:24px;">
    <div style="width:32px;height:32px;background-color:${p.highlight};border-radius:4px;margin-right:16px;"></div>
    <div style="font-size:32px;font-weight:500;">Use simple components.</div>
  </div>
  <div style="display:flex;align-items:center;margin-bottom:24px;">
    <div style="width:32px;height:32px;background-color:${p.highlight};border-radius:4px;margin-right:16px;"></div>
    <div style="font-size:32px;font-weight:500;">Iterate fast.</div>
  </div>
</div>`;
}

function generateTweetMockup(p, f) {
  return `
<div style="width:100%;height:100%;background-color:${p.bg};display:flex;align-items:center;justify-content:center;font-family:'Inter', sans-serif;position:relative;">
  <!-- background dots -->
  <div style="position:absolute;inset:0;background-image:${dotSvg(p.text)};z-index:0;"></div>
  
  <!-- Tweet Card -->
  <div style="width:80%;background-color:${p.accent};border-radius:32px;padding:60px;box-shadow:0 20px 40px rgba(0,0,0,0.05);border:1px solid ${p.text}15;z-index:10;">
    
    <div style="display:flex;align-items:center;margin-bottom:32px;">
      <div style="width:80px;height:80px;background-color:${p.highlight};border-radius:50%;margin-right:24px;"></div>
      <div>
        <div style="font-weight:bold;font-size:28px;color:${p.text};">Creator Name</div>
        <div style="font-size:22px;color:${p.text};opacity:0.6;">@creator_handle</div>
      </div>
    </div>
    
    <h2 style="font-size:42px;line-height:1.4;font-weight:500;color:${p.text};margin-bottom:40px;">
      The best designs are invisible.<br/><br/>They don't scream for attention, they simply solve the user's problem.
    </h2>
    
    <div style="font-size:20px;color:${p.text};opacity:0.5;">
      10:42 AM · Oct 24, 2023
    </div>
  </div>
</div>`;
}

function generateHighlighterText(p, f) {
  return `
<div style="width:100%;height:100%;background-color:${p.bg};display:flex;align-items:center;justify-content:center;padding:80px;font-family:${f.family};">
  <div style="max-width:100%;">
    <h1 style="font-size:96px;font-weight:900;color:${p.text};line-height:1.2;letter-spacing:-0.04em;text-transform:lowercase;">
      sometimes you<br/>
      just need to<br/>
      <span style="background-color:${p.highlight};padding:0 20px;display:inline-block;border-radius:8px;transform:rotate(-1deg);">highlight</span><br/>
      the most important<br/>
      thing.
    </h1>
  </div>
</div>`;
}

function generateStepListicle(p, f) {
  return `
<div style="width:100%;height:100%;background-color:${p.bg};display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:${f.family};position:relative;">
  <div style="font-size:240px;font-weight:900;color:${p.highlight};position:absolute;top:20%;right:10%;opacity:0.5;line-height:0.8;font-family:'Inter', sans-serif;">
    01
  </div>
  
  <div style="z-index:10;max-width:75%;">
    <div style="font-size:24px;font-weight:bold;color:${p.text};opacity:0.6;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:24px;font-family:'Inter', sans-serif;">
      Step One
    </div>
    <h1 style="font-size:84px;font-weight:800;color:${p.text};line-height:1.1;margin-bottom:40px;letter-spacing:-0.02em;">
      Define your core audience
    </h1>
    <p style="font-size:32px;line-height:1.5;color:${p.text};opacity:0.8;font-family:'Inter', sans-serif;">
      Before building anything, you must understand exactly who you are building it for.
    </p>
  </div>
</div>`;
}

function generateMacWindow(p, f) {
  return `
<div style="width:100%;height:100%;background-color:${p.bg};display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk', sans-serif;position:relative;">
  <!-- background grid -->
  <div style="position:absolute;inset:0;background-image:${gridSvg(p.text)};z-index:0;"></div>
  
  <div style="width:85%;background-color:${p.accent};border-radius:24px;box-shadow:0 30px 60px rgba(0,0,0,0.1);border:1px solid ${p.text}20;z-index:10;overflow:hidden;display:flex;flex-direction:column;">
    
    <!-- Title Bar -->
    <div style="height:60px;background-color:${p.bg};border-bottom:1px solid ${p.text}15;display:flex;align-items:center;padding:0 24px;">
      <div style="display:flex;gap:12px;">
        <div style="width:16px;height:16px;background-color:#FF5F56;border-radius:50%;"></div>
        <div style="width:16px;height:16px;background-color:#FFBD2E;border-radius:50%;"></div>
        <div style="width:16px;height:16px;background-color:#27C93F;border-radius:50%;"></div>
      </div>
      <div style="margin:auto;font-size:18px;font-weight:600;color:${p.text};opacity:0.6;">index.tsx</div>
    </div>
    
    <!-- Window Content -->
    <div style="padding:60px;flex:1;background-color:${p.accent};">
      <h1 style="font-size:72px;font-weight:bold;color:${p.text};line-height:1.2;">
        const <span style="color:${p.highlight === '#FFFFFF' ? '#1DA1F2' : p.highlight};">Success</span> = () => {<br/>
        &nbsp;&nbsp;return "Keep iterating";<br/>
        }
      </h1>
    </div>
  </div>
</div>`;
}

function generateMinimalWireframe(p, f) {
  return `
<div style="width:100%;height:100%;background-color:${p.bg};display:flex;flex-direction:column;padding:60px;font-family:'Inter', sans-serif;position:relative;">
  <div style="border:2px dashed ${p.text}30;width:100%;height:100%;padding:60px;display:flex;flex-direction:column;position:relative;">
    
    <!-- Crosshairs -->
    <div style="position:absolute;top:-10px;left:60px;width:2px;height:20px;background-color:${p.text};"></div>
    <div style="position:absolute;left:-10px;top:60px;width:20px;height:2px;background-color:${p.text};"></div>
    
    <div style="width:60px;height:60px;background-color:${p.highlight};margin-bottom:40px;"></div>
    
    <h1 style="font-size:80px;font-weight:400;color:${p.text};letter-spacing:-0.03em;margin-bottom:24px;">
      Wireframe Architecture
    </h1>
    
    <div style="width:400px;height:2px;background-color:${p.text}20;margin-bottom:40px;"></div>
    
    <div style="display:flex;gap:20px;">
      <div style="width:200px;height:80px;border:1px solid ${p.text}40;display:flex;align-items:center;justify-content:center;color:${p.text};font-weight:bold;">BUTTON</div>
      <div style="width:200px;height:80px;border:1px solid ${p.text}40;display:flex;align-items:center;justify-content:center;color:${p.text};font-weight:bold;">LINK</div>
    </div>
    
  </div>
</div>`;
}

const templates = [];

// Clean Name Formatter
const formatName = (layoutStr) => layoutStr.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

for (let i = 1; i <= 115; i++) {
  const p = palettes[i % palettes.length];
  const f = fonts[i % fonts.length];
  const l = layouts[i % layouts.length];
  const aspect = aspects[i % aspects.length];
  
  let html = "";
  if (l === "notion-doc") html = generateNotionDoc(p, f);
  else if (l === "tweet-mockup") html = generateTweetMockup(p, f);
  else if (l === "highlighter-text") html = generateHighlighterText(p, f);
  else if (l === "step-listicle") html = generateStepListicle(p, f);
  else if (l === "mac-window") html = generateMacWindow(p, f);
  else if (l === "minimal-wireframe") html = generateMinimalWireframe(p, f);
  else html = generateNotionDoc(p, f);

  // Group tags
  const tags = [p.tag, l];

  // Make the name highly descriptive
  const templateName = `${formatName(l)} - ${p.name}`;

  const template = {
    id: "template-" + i,
    name: templateName,
    aspectRatio: aspect,
    slides: [
      {
        id: id(),
        html: html,
        order: 0,
        notes: "Auto-generated premium text-centric template slide."
      }
    ],
    referenceImages: [],
    chatSessionId: null,
    isTemplate: true,
    tags: Array.from(new Set(tags)),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  templates.push(template);
}

fs.writeFileSync(DEST, JSON.stringify({ templates }, null, 2));
console.log("Successfully generated 115 modern, text-heavy templates at " + DEST);
