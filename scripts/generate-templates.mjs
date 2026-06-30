import fs from "fs";
import path from "path";
import crypto from "crypto";

const DEST = path.resolve("./data/prebuilt-templates.json");
const id = () => crypto.randomUUID();

const templates = [];
let templateCounter = 1;

// ============================================================================
// BATCH 1: Open Design, Claude Aesthetic, Depth Layering, Brutalist, etc.
// ============================================================================
const batch1Categories = ["Open Design", "Claude Aesthetic", "Depth Layering", "Brutalist", "Minimalist", "Glassmorphism", "Y2K", "Cinematic"];
const batch1Aspects = ["ig-4:5", "ig-1:1", "li-4:5", "tt-9:16"];

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

for (let i = 1; i <= 115; i++) {
  const category = batch1Categories[i % batch1Categories.length];
  const aspect = batch1Aspects[i % batch1Aspects.length];
  
  let html = "";
  if (category === "Depth Layering") html = generateDepthSlide("Trending " + i, "#111", "#333");
  else if (category === "Claude Aesthetic") html = generateClaudeSlide("Editorial Insight " + i);
  else if (category === "Open Design") html = generateOpenDesignSlide("system.architecture." + i);
  else if (category === "Glassmorphism") html = generateGlassmorphismSlide("Glass " + i);
  else if (category === "Brutalist") html = generateBrutalistSlide("BRUTAL " + i);
  else html = generateDepthSlide("Modern " + i, "#2563eb", "#9333ea");

  templates.push({
    id: "template-" + templateCounter++,
    name: category + " Template " + i,
    aspectRatio: aspect,
    slides: [{ id: id(), html: html, order: 0, notes: "Auto-generated premium template slide." }],
    referenceImages: [],
    chatSessionId: null,
    isTemplate: true,
    tags: [category.toLowerCase()],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

// ============================================================================
// BATCH 2: Notion, Mac Windows, Minimal Wireframes, Text-Heavy
// ============================================================================
const batch2Palettes = [
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

const batch2Fonts = [
  { family: "'Inter', sans-serif", type: "sans" },
  { family: "'Plus Jakarta Sans', sans-serif", type: "sans" },
  { family: "'Space Grotesk', sans-serif", type: "mono" },
  { family: "'Georgia', serif", type: "serif" },
  { family: "'Playfair Display', serif", type: "serif" }
];

const batch2Layouts = ["notion-doc", "tweet-mockup", "highlighter-text", "step-listicle", "mac-window", "minimal-wireframe"];
const batch2Aspects = ["ig-4:5", "ig-1:1", "li-4:5", "tt-9:16"];

const gridSvg = (c) => `url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0 0h40v40H0V0zm1 1h38v38H1V1z%22 fill=%22${encodeURIComponent(c)}%22 fill-opacity=%220.05%22 fill-rule=%22evenodd%22/%3E%3C/svg%3E')`;
const dotSvg = (c) => `url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%221%22 fill=%22${encodeURIComponent(c)}%22 fill-opacity=%220.15%22/%3E%3C/svg%3E')`;

function generateNotionDoc(p, f) {
  return `
<div style="width:100%;height:100%;background-color:${p.bg};display:flex;flex-direction:column;padding:80px;font-family:'Inter', sans-serif;color:${p.text};">
  <div style="font-size:18px;color:${p.text};opacity:0.5;margin-bottom:60px;font-weight:500;">Workspace / Projects / Ideas</div>
  <div style="font-size:120px;margin-bottom:30px;">📝</div>
  <h1 style="font-size:90px;font-weight:800;margin-bottom:40px;letter-spacing:-0.03em;line-height:1.1;">How to Build<br/>a Modern App</h1>
  <div style="width:100%;height:1px;background-color:${p.text};opacity:0.1;margin-bottom:40px;"></div>
  <div style="display:flex;align-items:center;margin-bottom:24px;">
    <div style="width:32px;height:32px;background-color:${p.highlight};border-radius:4px;margin-right:16px;"></div>
    <div style="font-size:32px;font-weight:500;">Use simple components.</div>
  </div>
</div>`;
}

function generateTweetMockup(p, f) {
  return `
<div style="width:100%;height:100%;background-color:${p.bg};display:flex;align-items:center;justify-content:center;font-family:'Inter', sans-serif;position:relative;">
  <div style="position:absolute;inset:0;background-image:${dotSvg(p.text)};z-index:0;"></div>
  <div style="width:80%;background-color:${p.accent};border-radius:32px;padding:60px;box-shadow:0 20px 40px rgba(0,0,0,0.05);border:1px solid ${p.text}15;z-index:10;">
    <div style="display:flex;align-items:center;margin-bottom:32px;">
      <div style="width:80px;height:80px;background-color:${p.highlight};border-radius:50%;margin-right:24px;"></div>
      <div>
        <div style="font-weight:bold;font-size:28px;color:${p.text};">Creator Name</div>
        <div style="font-size:22px;color:${p.text};opacity:0.6;">@creator_handle</div>
      </div>
    </div>
    <h2 style="font-size:42px;line-height:1.4;font-weight:500;color:${p.text};margin-bottom:40px;">The best designs are invisible.</h2>
  </div>
</div>`;
}

function generateHighlighterText(p, f) {
  return `
<div style="width:100%;height:100%;background-color:${p.bg};display:flex;align-items:center;justify-content:center;padding:80px;font-family:${f.family};">
  <div style="max-width:100%;">
    <h1 style="font-size:96px;font-weight:900;color:${p.text};line-height:1.2;letter-spacing:-0.04em;text-transform:lowercase;">
      sometimes you<br/>just need to<br/>
      <span style="background-color:${p.highlight};padding:0 20px;display:inline-block;border-radius:8px;transform:rotate(-1deg);">highlight</span><br/>
      the most important<br/>thing.
    </h1>
  </div>
</div>`;
}

function generateStepListicle(p, f) {
  return `
<div style="width:100%;height:100%;background-color:${p.bg};display:flex;flex-direction:column;justify-content:center;padding:80px;font-family:${f.family};position:relative;">
  <div style="font-size:240px;font-weight:900;color:${p.highlight};position:absolute;top:20%;right:10%;opacity:0.5;line-height:0.8;font-family:'Inter', sans-serif;">01</div>
  <div style="z-index:10;max-width:75%;">
    <div style="font-size:24px;font-weight:bold;color:${p.text};opacity:0.6;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:24px;font-family:'Inter', sans-serif;">Step One</div>
    <h1 style="font-size:84px;font-weight:800;color:${p.text};line-height:1.1;margin-bottom:40px;letter-spacing:-0.02em;">Define your core audience</h1>
  </div>
</div>`;
}

function generateMacWindow(p, f) {
  return `
<div style="width:100%;height:100%;background-color:${p.bg};display:flex;align-items:center;justify-content:center;font-family:'Space Grotesk', sans-serif;position:relative;">
  <div style="position:absolute;inset:0;background-image:${gridSvg(p.text)};z-index:0;"></div>
  <div style="width:85%;background-color:${p.accent};border-radius:24px;box-shadow:0 30px 60px rgba(0,0,0,0.1);border:1px solid ${p.text}20;z-index:10;overflow:hidden;display:flex;flex-direction:column;">
    <div style="height:60px;background-color:${p.bg};border-bottom:1px solid ${p.text}15;display:flex;align-items:center;padding:0 24px;">
      <div style="display:flex;gap:12px;">
        <div style="width:16px;height:16px;background-color:#FF5F56;border-radius:50%;"></div>
        <div style="width:16px;height:16px;background-color:#FFBD2E;border-radius:50%;"></div>
        <div style="width:16px;height:16px;background-color:#27C93F;border-radius:50%;"></div>
      </div>
      <div style="margin:auto;font-size:18px;font-weight:600;color:${p.text};opacity:0.6;">index.tsx</div>
    </div>
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
    <div style="position:absolute;top:-10px;left:60px;width:2px;height:20px;background-color:${p.text};"></div>
    <div style="position:absolute;left:-10px;top:60px;width:20px;height:2px;background-color:${p.text};"></div>
    <div style="width:60px;height:60px;background-color:${p.highlight};margin-bottom:40px;"></div>
    <h1 style="font-size:80px;font-weight:400;color:${p.text};letter-spacing:-0.03em;margin-bottom:24px;">Wireframe Architecture</h1>
  </div>
</div>`;
}

const formatName = (layoutStr) => layoutStr.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

for (let i = 1; i <= 115; i++) {
  const p = batch2Palettes[i % batch2Palettes.length];
  const f = batch2Fonts[i % batch2Fonts.length];
  const l = batch2Layouts[i % batch2Layouts.length];
  const aspect = batch2Aspects[i % batch2Aspects.length];
  
  let html = "";
  if (l === "notion-doc") html = generateNotionDoc(p, f);
  else if (l === "tweet-mockup") html = generateTweetMockup(p, f);
  else if (l === "highlighter-text") html = generateHighlighterText(p, f);
  else if (l === "step-listicle") html = generateStepListicle(p, f);
  else if (l === "mac-window") html = generateMacWindow(p, f);
  else if (l === "minimal-wireframe") html = generateMinimalWireframe(p, f);
  else html = generateNotionDoc(p, f);

  const tags = [p.tag, l];
  const templateName = `${formatName(l)} - ${p.name}`;

  templates.push({
    id: "template-" + templateCounter++,
    name: templateName,
    aspectRatio: aspect,
    slides: [{ id: id(), html: html, order: 0, notes: "Auto-generated premium text-centric template slide." }],
    referenceImages: [],
    chatSessionId: null,
    isTemplate: true,
    tags: Array.from(new Set(tags)),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

// ============================================================================
// BATCH 3: Retro 70s - Depth Layering (authentic recreation)
// Colors: Aged Cream (#f5e6d3), Burnt Orange (#c2410c), Mustard (#ca8a04),
//         Forest Green (#15803d), Deep Brown (#2d1810)
// Font: Anton (poster energy), Special Elite (typewriter body)
// Rules: text BEHIND subject, sunburst motif, thick poster border, paper texture
// ============================================================================

const sunburstSvg = `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600' viewBox='0 0 600 600'><g transform='translate(300,300)'>${Array.from({length:24},(_,i)=>{const a=i*(360/24)*Math.PI/180;const a2=(i+0.5)*(360/24)*Math.PI/180;const r=280;const x1=Math.cos(a)*r,y1=Math.sin(a)*r,x2=Math.cos(a2)*r,y2=Math.sin(a2)*r;const fill=i%2===0?'%23ca8a04':'%23c2410c';return `<polygon points='0,0 ${x1.toFixed(1)},${y1.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}' fill='${fill}' opacity='0.85'/>`;}).join('')}</g></svg>`;

const retro70sVariants = [
  // 1. Original flagship — the one user loved
  { headline: "GROW<br/>YOUR<br/>BRAND", sub: "Social Media Strategy", body: "5 proven tactics for 2024 growth", num: "01", bg: "#f5e6d3", accent: "#c2410c", mustard: "#ca8a04", green: "#15803d" },
  // 2. Bold quote
  { headline: "YOUR<br/>STORY<br/>MATTERS", sub: "Content Creation", body: "Start telling it today", num: "02", bg: "#fef3c7", accent: "#c2410c", mustard: "#ca8a04", green: "#15803d" },
  // 3. Travel poster feel
  { headline: "MAKE<br/>IT<br/>COUNT", sub: "Productivity Tips", body: "Work smarter, not harder", num: "03", bg: "#f5e6d3", accent: "#7c2d12", mustard: "#ca8a04", green: "#166534" },
  // 4. Warm mustard variant
  { headline: "LEVEL<br/>UP<br/>NOW", sub: "Career Growth", body: "The roadmap to success", num: "04", bg: "#fde68a", accent: "#92400e", mustard: "#78350f", green: "#15803d" },
  // 5. Deep brown accent
  { headline: "LEAD<br/>THE<br/>WAY", sub: "Leadership Insights", body: "Principles that last a lifetime", num: "05", bg: "#f5e6d3", accent: "#451a03", mustard: "#ca8a04", green: "#15803d" },
  // 6. Forest green primary
  { headline: "BUILD<br/>IN<br/>PUBLIC", sub: "Startup Journey", body: "Share every milestone", num: "06", bg: "#f5e6d3", accent: "#15803d", mustard: "#ca8a04", green: "#14532d" },
  // 7. Energetic orange
  { headline: "SHIP<br/>IT<br/>FAST", sub: "Product Launch", body: "From idea to live in 7 days", num: "07", bg: "#fef3c7", accent: "#ea580c", mustard: "#d97706", green: "#15803d" },
  // 8. Minimal text
  { headline: "THINK<br/>BIG", sub: "Vision & Goals", body: "Dream big. Start small. Act now.", num: "08", bg: "#f5e6d3", accent: "#c2410c", mustard: "#ca8a04", green: "#15803d" },
  // 9. Dark headline
  { headline: "STAY<br/>BOLD", sub: "Personal Branding", body: "Own your space online", num: "09", bg: "#fde68a", accent: "#7c2d12", mustard: "#92400e", green: "#14532d" },
  // 10. Avocado green
  { headline: "CREATE<br/>DAILY", sub: "Creator Economy", body: "Consistency is the secret weapon", num: "10", bg: "#f0fdf4", accent: "#c2410c", mustard: "#ca8a04", green: "#15803d" },
  // 11. Spice it up
  { headline: "EARN<br/>YOUR<br/>PLACE", sub: "Hustle Culture", body: "Every rep counts", num: "11", bg: "#f5e6d3", accent: "#b45309", mustard: "#ca8a04", green: "#15803d" },
  // 12. Poster headline
  { headline: "BREAK<br/>THE<br/>RULES", sub: "Design Thinking", body: "Convention is the enemy of innovation", num: "12", bg: "#fef3c7", accent: "#c2410c", mustard: "#ca8a04", green: "#166534" },
  // 13. Motivational
  { headline: "SHOW<br/>UP<br/>DAILY", sub: "Discipline Over Motivation", body: "The secret no one talks about", num: "13", bg: "#f5e6d3", accent: "#9a3412", mustard: "#ca8a04", green: "#15803d" },
  // 14. Sepia tone
  { headline: "MASTER<br/>YOUR<br/>CRAFT", sub: "Skill Development", body: "10,000 hours starts today", num: "14", bg: "#fde68a", accent: "#7c2d12", mustard: "#92400e", green: "#14532d" },
  // 15. Bold finale
  { headline: "GO<br/>VIRAL", sub: "Growth Hacking", body: "Engineer your own luck", num: "15", bg: "#fef3c7", accent: "#c2410c", mustard: "#ca8a04", green: "#15803d" },
];

const retroAspects = ["ig-4:5", "ig-1:1", "li-4:5", "tt-9:16", "ig-4:5"];

for (let i = 0; i < retro70sVariants.length; i++) {
  const v = retro70sVariants[i];
  const aspect = retroAspects[i % retroAspects.length];

  const html = `
<div style="width:100%;height:100%;background-color:${v.bg};display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;border:10px solid ${v.accent};box-sizing:border-box;font-family:Anton, sans-serif;">

  <!-- Vintage paper texture (coffee stain radial overlays) -->
  <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 20% 15%, rgba(146,64,14,0.06) 0%, transparent 45%), radial-gradient(ellipse at 80% 85%, rgba(146,64,14,0.09) 0%, transparent 40%), radial-gradient(ellipse at 60% 40%, rgba(194,65,12,0.04) 0%, transparent 50%);z-index:0;pointer-events:none;"></div>

  <!-- Sunburst motif (bottom-centre) -->
  <div style="position:absolute;bottom:-120px;left:50%;transform:translateX(-50%);width:500px;height:500px;background-image:url('data:image/svg+xml,${sunburstSvg}');background-size:contain;background-repeat:no-repeat;background-position:center;opacity:0.22;z-index:1;"></div>

  <!-- HEADLINE — behind the subject (z-index:10) -->
  <h1 style="position:absolute;z-index:10;font-family:Anton,sans-serif;font-size:180px;font-weight:400;line-height:0.9;letter-spacing:-0.02em;text-transform:uppercase;text-align:center;background:linear-gradient(135deg,${v.accent} 0%,${v.mustard} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;width:90%;margin:0;">${v.headline}</h1>

  <!-- HEADLINE outline layer (same text, on top of subject for depth) -->
  <h1 style="position:absolute;z-index:30;font-family:Anton,sans-serif;font-size:180px;font-weight:400;line-height:0.9;letter-spacing:-0.02em;text-transform:uppercase;text-align:center;color:transparent;-webkit-text-stroke:1.5px ${v.accent};width:90%;margin:0;opacity:0.6;">${v.headline}</h1>

  <!-- SUBJECT — foreground object (z-index:20, between the two headline layers) -->
  <div style="z-index:20;position:relative;display:flex;flex-direction:column;align-items:center;gap:0;">
    <!-- Circle shape with subject number -->
    <div style="width:220px;height:220px;background:radial-gradient(circle at 35% 35%,${v.mustard},${v.accent});border-radius:50%;box-shadow:0 20px 50px rgba(69,26,3,0.35);border:6px solid ${v.bg};display:flex;align-items:center;justify-content:center;">
      <span style="font-family:Anton,sans-serif;font-size:80px;font-weight:400;color:${v.bg};letter-spacing:-0.02em;">${v.num}</span>
    </div>
    <!-- Caption strip below circle -->
    <div style="margin-top:18px;background:${v.accent};padding:10px 28px;display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="font-family:Anton,sans-serif;font-size:22px;color:${v.bg};letter-spacing:0.08em;text-transform:uppercase;">${v.sub}</span>
      <span style="font-family:'Special Elite',serif;font-size:15px;color:${v.bg};opacity:0.85;letter-spacing:0.04em;">${v.body}</span>
    </div>
  </div>

  <!-- Corner starburst accents -->
  <div style="position:absolute;top:18px;left:18px;width:44px;height:44px;background:radial-gradient(circle,${v.mustard} 30%,transparent 70%);opacity:0.7;z-index:5;border-radius:50%;"></div>
  <div style="position:absolute;top:18px;right:18px;width:44px;height:44px;background:radial-gradient(circle,${v.mustard} 30%,transparent 70%);opacity:0.7;z-index:5;border-radius:50%;"></div>
  <div style="position:absolute;bottom:18px;left:18px;width:44px;height:44px;background:radial-gradient(circle,${v.mustard} 30%,transparent 70%);opacity:0.7;z-index:5;border-radius:50%;"></div>
  <div style="position:absolute;bottom:18px;right:18px;width:44px;height:44px;background:radial-gradient(circle,${v.mustard} 30%,transparent 70%);opacity:0.7;z-index:5;border-radius:50%;"></div>

</div>
`.trim();

  templates.push({
    id: "template-retro70s-" + (i + 1),
    name: i === 0 ? "Retro 70s - Depth Layering" : `Retro 70s - Depth Layering ${i + 1}`,
    aspectRatio: aspect,
    slides: [{ id: id(), html, order: 0, notes: "Retro 70s depth-layering template — text sits behind a foreground subject. Inspired by 1970s concert & travel posters." }],
    referenceImages: [],
    chatSessionId: null,
    isTemplate: true,
    tags: ["retro", "depth layering", "70s", "poster"],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
}

fs.writeFileSync(DEST, JSON.stringify({ templates }, null, 2));
console.log(`Successfully generated ${templates.length} templates at ${DEST}`);
