// ========================================
// Green Door Espresso
// espressoData.js
// 7 種哲學 + 16 隻豆（含 Espresso Blend）
// ========================================

// ========================================
// 1. 沖煮哲學定義（共 7 個）
// ========================================

const ESPRESSO_PHILOSOPHIES = {
  clarity: {
    id: "clarity",
    title: "清晰果酸 · Clarity Shot",
    ratio: "1:2.5",
    dose: 18,
    yield: 45,
    shotTime: "24–28 秒",
    pressure: "9 bar",
    body: "輕盈 · 茶感",
    acidity: "明亮果酸 · 高清晰度",
    finish: "花香 · 乾淨尾韻",
    philosophy: "清晰度優先，適合淺焙單一產地。稍長粉液比降低苦澀，保留花果香氣與酸質透明度。",
    notes: "適用於 light roast SOE，若流速偏快可略增粉量。"
  },
  turbo: {
    id: "turbo",
    title: "高速清澈 · Turbo Shot",
    ratio: "1:3",
    dose: 18,
    yield: 54,
    shotTime: "14–18 秒",
    pressure: "6–7 bar (遞減)",
    body: "輕盈茶感",
    acidity: "高透明果酸",
    finish: "悠長花香",
    philosophy: "Turbo Shot 採用低阻力高速萃取，降低苦澀、提升風味分離度。",
    notes: "快速流速是正常現象，不應視為通道效應。"
  },
  highExtraction: {
    id: "highExtraction",
    title: "高萃取甜感 · High Extraction",
    ratio: "1:3.5",
    dose: 18,
    yield: 63,
    shotTime: "30–40 秒",
    pressure: "6–8 bar",
    body: "圓潤 · 絲滑",
    acidity: "飽滿甜感酸質",
    finish: "蜜糖尾韻",
    philosophy: "極細研磨、長時間低壓萃取，最大化甜感與複雜度，適合淺焙特殊處理法。",
    notes: "需要極細研磨與穩定水溫，流速可能偏慢但正常。"
  },
  blooming: {
    id: "blooming",
    title: "悶蒸甜感 · Blooming Espresso",
    ratio: "1:2.5",
    dose: 18,
    yield: 45,
    shotTime: "28–35 秒 (含悶蒸)",
    pressure: "悶蒸 2–3 bar (10-15秒) → 9 bar",
    body: "圓潤 · 醇厚",
    acidity: "柔和甜酸",
    finish: "糖漿尾韻",
    philosophy: "先低壓悶蒸再增壓萃取，提升甜感集中度與口感圓潤度，適合日曬、蜜處理。",
    notes: "悶蒸階段壓力需低，避免過早突破粉餅。"
  },
  traditional: {
    id: "traditional",
    title: "傳統濃厚 · Traditional Body",
    ratio: "1:2",
    dose: 18,
    yield: 36,
    shotTime: "28–34 秒",
    pressure: "9 bar",
    body: "糖漿感 · 厚重",
    acidity: "低酸甜感",
    finish: "黑朱古力",
    philosophy: "強調醇厚度與 crema，適合深焙豆與奶啡基底。",
    notes: "適合 medium-dark roast 及 blend。"
  },
  milkBalance: {
    id: "milkBalance",
    title: "奶啡平衡 · Milk Balance",
    ratio: "1:2.2",
    dose: 18,
    yield: 40,
    shotTime: "26–30 秒",
    pressure: "9 bar",
    body: "柔順 · 奶油感",
    acidity: "柔和甜感",
    finish: "可可 · 乾淨",
    philosophy: "專為奶類飲品設計，降低苦澀、提升甜感，與牛奶融合度高。",
    notes: "適用於 blend 及 medium roast，decaf 可沿用相同參數。"
  },
  ristretto: {
    id: "ristretto",
    title: "奶啡短萃 · Ristretto for Milk",
    ratio: "1:1.5",
    dose: 18,
    yield: 27,
    shotTime: "20–25 秒",
    pressure: "9 bar",
    body: "濃郁 · 糖漿感",
    acidity: "柔和甜感",
    finish: "焦糖 · 朱古力",
    philosophy: "萃取最甜前段，避開後段苦澀，專為拿鐵、flat white 設計，奶啡極甜。",
    notes: "適用於中深焙拼配、decaf，建議搭配全脂奶或 2%。"
  },
    americano: {
      id: "americano",
      title: "美式延伸 · Modern Americano",
      ratio: "1:2.7",
      dose: 18,
      yield: 48,
      shotTime: "24–30 秒",
      pressure: "7–8 bar",
      body: "柔和乾淨 · Clean & Soft",
      acidity: "柔和甜酸 · Gentle Sweet Acidity",
      finish: "乾淨甜尾韻 · Clean Sweet Finish",
      philosophy: "專為 Americano 設計的較長比例萃取。透過增加液量與稍低壓力，降低苦澀與厚重感，令加水後仍保持甜感、透明度與平衡感。",
      notes: "適合 medium roast、blend、Brazil profile 與部分 decaf。建議先加熱水再加入 espresso，以保留 crema 結構。"
    }
};

// ========================================
// 2. 咖啡豆資料庫（共 16 隻，含 Espresso Blend）
// ========================================

const COFFEES = [
  // ----- 原本 Espresso 豆 -----
  {
    id: "espresso-blend",   // 新增明確的 Espresso Blend
    shortName: "Espresso Blend",
    origin: "Brazil · Colombia · Guatemala",
    process: "Mixed",
    roast: "Medium-Dark Roast",
    type: "espresso",
    notes: ["黑糖", "可可", "奶油感", "奶啡友善"],
    supportedPhilos: ["traditional", "milkBalance", "americano", "ristretto"]
  },
  {
    id: "green-door-blend",
    shortName: "Green Door Blend",
    origin: "Brazil · Colombia",
    process: "Mixed Process",
    roast: "Medium-Dark Roast",
    type: "espresso",
    notes: ["黑糖", "可可", "奶油感", "奶啡友善"],
    supportedPhilos: ["traditional", "milkBalance", "ristretto"]
  },
  {
    id: "colombia-decaf",
    shortName: "Colombia Decaf",
    origin: "Colombia",
    process: "Sugarcane Decaf",
    roast: "Medium Roast",
    type: "espresso",
    notes: ["焦糖", "可可", "柔和甜感", "低刺激"],
    supportedPhilos: ["milkBalance", "traditional", "americano","ristretto"]
  },

  // ----- 從手沖版挑選適合 Espresso 的豆（12 隻）-----
  {
    id: "bolivia-alasitas-geisha",
    shortName: "Bolivia Alasitas Geisha",
    origin: "Bolivia",
    process: "Pink Honey",
    roast: "Light Roast",
    type: "filter",
    notes: ["Floral aromatics", "Elegant acidity", "Tea-like finish"],
    supportedPhilos: ["clarity", "turbo", "highExtraction", "blooming"]
  },
  {
    id: "colombia-camenzo",
    shortName: "Colombia Camenzo",
    origin: "Colombia",
    process: "Aerobic Washed",
    roast: "Light Roast",
    type: "filter",
    notes: ["Balanced sweetness", "Red fruit acidity", "Clean structure"],
    supportedPhilos: ["clarity", "turbo", "highExtraction"]
  },
  {
    id: "costa-rica-el-mango",
    shortName: "Costa Rica El Mango",
    origin: "Costa Rica",
    process: "Passion Honey",
    roast: "Light Roast",
    type: "filter",
    notes: ["Tropical sweetness", "Round mouthfeel", "Honey texture"],
    supportedPhilos: ["clarity", "turbo", "blooming"]
  },
  {
    id: "don-mayo-anaerobic",
    shortName: "Costa Rica Don Mayo Anaerobic",
    origin: "Costa Rica",
    process: "Anaerobic Natural",
    roast: "Light Roast",
    type: "filter",
    notes: ["Fermented fruit", "Heavy sweetness", "Dense body"],
    supportedPhilos: ["highExtraction", "turbo", "blooming"]
  },
  {
    id: "pacamara-washed",
    shortName: "El Salvador Santa Elena Pacamara",
    origin: "El Salvador",
    process: "Washed",
    roast: "Light Roast",
    type: "filter",
    notes: ["Creamy body", "Stone fruit", "Structured sweetness"],
    supportedPhilos: ["turbo", "clarity", "traditional", "milkBalance"]
  },
  {
    id: "ethiopia-chelbesa",
    shortName: "Ethiopia Chelbesa Washed",
    origin: "Ethiopia",
    process: "Washed",
    roast: "Light Roast",
    type: "filter",
    notes: ["Jasmine florals", "Citrus acidity", "Tea-like finish"],
    supportedPhilos: ["clarity", "turbo", "highExtraction"]
  },
  {
    id: "gerbicho-anaerobic",
    shortName: "Ethiopia Gerbicho Anaerobic",
    origin: "Ethiopia",
    process: "Anaerobic Natural",
    roast: "Light Roast",
    type: "filter",
    notes: ["Fermented berry", "Dense sweetness", "Wine-like body"],
    supportedPhilos: ["highExtraction", "turbo", "blooming"]
  },
  {
    id: "edido-natural",
    shortName: "Ethiopia Edido Natural",
    origin: "Ethiopia",
    process: "Natural",
    roast: "Light Roast",
    type: "filter",
    notes: ["Blueberry sweetness", "Juicy acidity", "Silky texture"],
    supportedPhilos: ["clarity", "turbo", "blooming"]
  },
  {
    id: "elida-natural",
    shortName: "Panama Elida Natural #44",
    origin: "Panama",
    process: "Natural",
    roast: "Light Roast",
    type: "filter",
    notes: ["Berry sweetness", "Elegant body", "Structured acidity"],
    supportedPhilos: ["clarity", "turbo", "highExtraction", "blooming"]
  },
  {
    id: "hartmann-maragogipe",
    shortName: "Panama Hartmann Maragogipe",
    origin: "Panama",
    process: "Natural",
    roast: "Light Roast",
    type: "filter",
    notes: ["Large structure", "Sweet herbal finish", "Elegant texture"],
    supportedPhilos: ["clarity", "milkBalance"]
  },
  {
    id: "peru-geisha-inca",
    shortName: "Peru Geisha Inca",
    origin: "Peru",
    process: "Washed",
    roast: "Light Roast",
    type: "filter",
    notes: ["Delicate florals", "Silky sweetness", "Transparent cup"],
    supportedPhilos: ["clarity", "turbo", "highExtraction"]
  },
  {
    id: "rwanda-shyira-natural",
    shortName: "Rwanda Shyira Natural",
    origin: "Rwanda",
    process: "Natural",
    roast: "Light Roast",
    type: "filter",
    notes: ["Dark berry", "Juicy sweetness", "Round acidity"],
    supportedPhilos: ["clarity", "turbo", "blooming"]
  },
  {
    id: "brazil-a37",
    shortName: "Brazil A37 Tobacco",
    origin: "Brazil",
    process: "Dried On The Tree",
    roast: "Medium Roast",
    type: "filter",
    notes: ["Dark chocolate", "Tobacco sweetness", "Heavy crema"],
    supportedPhilos: ["traditional", "milkBalance", "americano", "ristretto"]
  }
];

// ========================================
// 3. 調整指南輔助函數
// ========================================

function getFastDose(baseDose) {
  return (baseDose + 0.5).toFixed(1);
}

function getSlowDose(baseDose) {
  return (baseDose - 0.5).toFixed(1);
}

// 匯出至全域
if (typeof window !== "undefined") {
  window.ESPRESSO_PHILOSOPHIES = ESPRESSO_PHILOSOPHIES;
  window.COFFEES = COFFEES;
  window.getFastDose = getFastDose;
  window.getSlowDose = getSlowDose;
}