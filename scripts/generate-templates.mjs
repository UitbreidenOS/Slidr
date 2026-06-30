import fs from "fs";
import path from "path";
import crypto from "crypto";

const DEST = path.resolve("./data/prebuilt-templates.json");

const categories = ["Open Design", "Claude Aesthetic", "Depth Layering", "Brutalist", "Minimalist", "Glassmorphism", "Y2K", "Cinematic"];
const aspects = ["ig-4:5", "ig-1:1", "li-4:5", "tt-9:16"];

// Helper to generate a random ID
const id = () => crypto.randomUUID();

// Template snippets for slides
const generateDepthSlide = (title, color1, color2) => `
<div style="width:100%;height:100%;background:linear-gradient(135deg, ${color1}, ${color2});display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;">
  <!-- Background Elements -->
  <div style="position:absolute;width:150%;height:150%;background:radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%);top:-25%;left:-25%;"></div>
  
  <!-- Text Layer (Behind Object) -->
  <h1 style="position:absolute;z-index:10;font-size:180px;font-family:Inter,sans-serif;font-weight:900;color:white;text-transform:uppercase;letter-spacing:-0.05em;line-height:0.8;text-align:center;mix-blend-mode:overlay;opacity:0.8;">
    ${title}
  </h1>
  <h1 style="position:absolute;z-index:30;font-size:180px;font-family:Inter,sans-serif;font-weight:900;color:transparent;text-transform:uppercase;letter-spacing:-0.05em;line-height:0.8;text-align:center;-webkit-text-stroke:2px rgba(255,255,255,0.8);">
    ${title}
  </h1>
  
  <!-- Foreground Object (Interleaved between text layers for depth) -->
  <div style="z-index:20;width:60%;height:60%;background:linear-gradient(45deg, #ff007f, #7f00ff);border-radius:30% 70% 70% 30% / 30% 30% 70% 70%;box-shadow:0 30px 60px rgba(0,0,0,0.5);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,0.2);"></div>
</div>
`;

const generateClaudeSlide = (title) => `
<div style="width:100%;height:100%;background:#FDFCF8;display:flex;flex-direction:column;padding:80px;position:relative;font-family:Georgia,serif;">
  <div style="position:absolute;top:0;left:0;right:0;height:8px;background:linear-gradient(90deg, #D97757, #E8B059);"></div>
  <div style="flex:1;">
    <h2 style="color:#D97757;font-size:24px;text-transform:uppercase;letter-spacing:0.1em;font-family:sans-serif;font-weight:600;margin-bottom:30px;">Claude Design System</h2>
    <h1 style="color:#2C2C2C;font-size:84px;font-weight:400;line-height:1.1;margin-bottom:40px;max-width:90%;">${title}</h1>
    <p style="color:#5C5C5C;font-size:32px;line-height:1.5;max-width:80%;font-family:sans-serif;">A warm, editorial approach to information design. Combining classical typography with modern structural layouts.</p>
  </div>
  <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid #EAEAEA;padding-top:30px;">
    <div style="width:40px;height:40px;background:#D97757;border-radius:4px;"></div>
    <div style="font-family:sans-serif;color:#8C8C8C;font-size:20px;">01 / Swipe</div>
  </div>
</div>
`;

const generateOpenDesignSlide = (title) => `
<div style="width:100%;height:100%;background:#ffffff;display:flex;flex-direction:column;padding:60px;position:relative;font-family:'Helvetica Neue',sans-serif;">
  <!-- Grid Background -->
  <div style="position:absolute;inset:0;background-image:linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);background-size:40px 40px;z-index:0;"></div>
  
  <div style="position:relative;z-index:10;flex:1;display:flex;flex-direction:column;justify-content:center;">
    <div style="background:#000;color:#fff;display:inline-block;padding:8px 16px;border-radius:20px;font-size:18px;font-weight:bold;margin-bottom:24px;align-self:flex-start;">Open Design</div>
    <h1 style="color:#000;font-size:96px;font-weight:900;letter-spacing:-0.03em;line-height:1;margin-bottom:32px;text-transform:lowercase;">${title}</h1>
    <div style="width:100%;height:2px;background:#000;margin-bottom:32px;"></div>
    <p style="color:#333;font-size:28px;line-height:1.4;max-width:85%;">Utilitarian aesthetics emphasizing structure, stark contrasts, and raw layout mechanics.</p>
  </div>
</div>
`;

const generateGlassmorphismSlide = (title) => `
<div style="width:100%;height:100%;background:linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;font-family:sans-serif;">
  <div style="position:absolute;top:10%;left:10%;width:300px;height:300px;background:#ff007f;border-radius:50%;filter:blur(80px);opacity:0.6;"></div>
  <div style="position:absolute;bottom:10%;right:10%;width:400px;height:400px;background:#00f2fe;border-radius:50%;filter:blur(100px);opacity:0.6;"></div>
  
  <div style="z-index:10;width:80%;background:rgba(255,255,255,0.1);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.2);border-radius:30px;padding:80px;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);">
    <h1 style="color:#fff;font-size:72px;font-weight:800;margin-bottom:20px;">${title}</h1>
    <p style="color:rgba(255,255,255,0.8);font-size:28px;line-height:1.5;">Modern frosted glass aesthetics for a premium, lightweight feel.</p>
  </div>
</div>
`;

const generateBrutalistSlide = (title) => `
<div style="width:100%;height:100%;background:#D3FF00;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;font-family:monospace;border:20px solid #000;">
  <div style="background:#000;color:#D3FF00;padding:20px 40px;border:5px solid #000;box-shadow:15px 15px 0px #fff, 15px 15px 0px 5px #000;transform:rotate(-3deg);">
    <h1 style="font-size:80px;font-weight:900;text-transform:uppercase;margin:0;">${title}</h1>
  </div>
  <div style="position:absolute;bottom:40px;right:40px;background:#fff;border:4px solid #000;padding:10px 20px;font-size:24px;font-weight:bold;box-shadow:8px 8px 0px #000;">RAW & UNFILTERED</div>
</div>
`;

const templates = [];

for (let i = 1; i <= 115; i++) {
  const category = categories[i % categories.length];
  const aspect = aspects[i % aspects.length];
  
  let html = "";
  if (category === "Depth Layering") html = generateDepthSlide("Trending " + i, "#111", "#333");
  else if (category === "Claude Aesthetic") html = generateClaudeSlide("Editorial Insight " + i);
  else if (category === "Open Design") html = generateOpenDesignSlide("system.architecture." + i);
  else if (category === "Glassmorphism") html = generateGlassmorphismSlide("Glass " + i);
  else if (category === "Brutalist") html = generateBrutalistSlide("BRUTAL " + i);
  else html = generateDepthSlide("Modern " + i, "#2563eb", "#9333ea"); // fallback

  const template = {
    id: "template-" + i,
    name: category + " Template " + i,
    aspectRatio: aspect,
    slides: [
      {
        id: id(),
        html: html,
        order: 0,
        notes: "Auto-generated premium template slide."
      }
    ],
    referenceImages: [],
    chatSessionId: null,
    isTemplate: true,
    tags: [category.toLowerCase()],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  templates.push(template);
}

fs.writeFileSync(DEST, JSON.stringify({ templates }, null, 2));
console.log("Successfully generated 115 templates at " + DEST);
