// ========================================
// Green Door Coffee
// data.js - 完整咖啡資料庫
// ========================================

const coffees = [

  // ======================================
  // FILTER / POUR OVER
  // ======================================

  {
    id: "bolivia-alasitas-geisha",
    type: "filter",
    shortName: "Bolivia Alasitas Geisha",
    fullName: "Bolivia Caranavi Alasitas – Geisha Pink Honey Lot 24",
    origin: "Bolivia",
    process: "Pink Honey",
    roast: "Light Roast",
    notes: ["Floral aromatics", "Elegant acidity", "Tea-like finish"],
    brewBias: {
      temp: 92,
      ratio: "1:16",
      grind: "Between table salt and white sugar",
      flow: "Gentle",
      pours: [
        { title: "Bloom Saturation", amount: "50ml", timing: "0:00 – 0:40", note: "Minimal agitation for floral clarity." },
        { title: "Main Extraction", amount: "100ml", timing: "0:40 – 1:20", note: "Stable centre pour." },
        { title: "Sweetness Development", amount: "100ml", timing: "1:20 – 2:00", note: "Maintain gentle turbulence." },
        { title: "Finishing Pour", amount: "100ml", timing: "2:00 – 2:40", note: "Lower agitation for clean finish." }
      ]
    }
  },

  {
    id: "colombia-camenzo",
    type: "filter",
    shortName: "Colombia Camenzo Aerobic Washed",
    fullName: "Colombia Timaná Camenzo Community – Aerobic Washed Caturra",
    origin: "Colombia",
    process: "Aerobic Washed",
    roast: "Light Roast",
    notes: ["Balanced sweetness", "Red fruit acidity", "Clean structure"],
    brewBias: {
      temp: 93,
      ratio: "1:16",
      grind: "White sugar-like",
      flow: "Medium gentle",
      pours: [
        { title: "Bloom", amount: "50ml", timing: "0:00 – 0:35", note: "Even saturation." },
        { title: "Main Pour", amount: "120ml", timing: "0:35 – 1:15", note: "Maintain stable flow." },
        { title: "Sweet Finish", amount: "120ml", timing: "1:15 – 2:00", note: "Reduce turbulence near finish." }
      ]
    }
  },

  {
    id: "costa-rica-el-mango",
    type: "filter",
    shortName: "Costa Rica El Mango Honey",
    fullName: "Costa Rica Brunca Rivense El Mango – Passion Honey",
    origin: "Costa Rica",
    process: "Passion Honey",
    roast: "Light Roast",
    notes: ["Tropical sweetness", "Round mouthfeel", "Honey texture"],
    brewBias: {
      temp: 91,
      ratio: "1:15.5",
      grind: "White sugar-like",
      flow: "Medium",
      pours: [
        { title: "Controlled Bloom", amount: "50ml", timing: "0:00 – 0:35", note: "Reduce aggressive turbulence." },
        { title: "Sweetness Extraction", amount: "120ml", timing: "0:35 – 1:15", note: "Maintain stable bed." },
        { title: "Body Development", amount: "100ml", timing: "1:15 – 1:55", note: "Gentle finish." }
      ]
    }
  },

  {
    id: "don-mayo-anaerobic",
    type: "filter",
    shortName: "Costa Rica Don Mayo Anaerobic Natural",
    fullName: "Costa Rica Tarrazu Don Mayo Bella Vista Micro Lot Anaerobic Natural",
    origin: "Costa Rica",
    process: "Anaerobic Natural",
    roast: "Light Roast",
    notes: ["Fermented fruit", "Heavy sweetness", "Dense body"],
    brewBias: {
      temp: 90,
      ratio: "1:15",
      grind: "Between white sugar and coarse sugar",
      flow: "Low agitation",
      pours: [
        { title: "Bloom", amount: "50ml", timing: "0:00 – 0:30", note: "Reduce turbulence." },
        { title: "Main Extraction", amount: "120ml", timing: "0:30 – 1:10", note: "Stable water level." },
        { title: "Texture Development", amount: "100ml", timing: "1:10 – 1:50", note: "Slow controlled finish." }
      ]
    }
  },

  {
    id: "pacamara-washed",
    type: "filter",
    shortName: "El Salvador Santa Elena Pacamara Washed",
    fullName: "El Salvador Finca Santa Elena Pacamara Washed",
    origin: "El Salvador",
    process: "Washed",
    roast: "Light Roast",
    notes: ["Creamy body", "Stone fruit", "Structured sweetness"],
    brewBias: {
      temp: 92,
      ratio: "1:15.5",
      grind: "White sugar-like",
      flow: "Medium gentle",
      pours: [
        { title: "Bloom", amount: "60ml", timing: "0:00 – 0:40", note: "Encourage even extraction." },
        { title: "Main Pour", amount: "120ml", timing: "0:40 – 1:20", note: "Balanced agitation." },
        { title: "Sweet Finish", amount: "100ml", timing: "1:20 – 2:00", note: "Preserve creamy finish." }
      ]
    }
  },

  {
    id: "ethiopia-chelbesa",
    type: "filter",
    shortName: "Ethiopia Chelbesa Washed",
    fullName: "Ethiopia Gedeo Yirgacheffe Gedeb Chelbesa Premium G1 Washed",
    origin: "Ethiopia",
    process: "Washed",
    roast: "Light Roast",
    notes: ["Jasmine florals", "Citrus acidity", "Tea-like finish"],
    brewBias: {
      temp: 93,
      ratio: "1:16.5",
      grind: "White sugar-like",
      flow: "Gentle",
      pours: [
        { title: "Extended Bloom", amount: "60ml", timing: "0:00 – 0:45", note: "Promote clarity development." },
        { title: "Main Extraction", amount: "120ml", timing: "0:45 – 1:25", note: "Stable centre pour." },
        { title: "Clarity Finish", amount: "120ml", timing: "1:25 – 2:05", note: "Low turbulence finish." }
      ]
    }
  },

  {
    id: "gerbicho-anaerobic",
    type: "filter",
    shortName: "Ethiopia Gerbicho Anaerobic Natural",
    fullName: "Ethiopia Guji Gerbicho Rogicha Grade 1 Anaerobic Natural",
    origin: "Ethiopia",
    process: "Anaerobic Natural",
    roast: "Light Roast",
    notes: ["Fermented berry", "Dense sweetness", "Wine-like body"],
    brewBias: {
      temp: 90,
      ratio: "1:15",
      grind: "White sugar-like",
      flow: "Low agitation",
      pours: [
        { title: "Controlled Bloom", amount: "50ml", timing: "0:00 – 0:35", note: "Avoid excessive turbulence." },
        { title: "Sweetness Extraction", amount: "100ml", timing: "0:35 – 1:10", note: "Stable extraction." },
        { title: "Body Development", amount: "100ml", timing: "1:10 – 1:50", note: "Slow syrupy finish." }
      ]
    }
  },

  {
    id: "edido-natural",
    type: "filter",
    shortName: "Ethiopia Edido Natural",
    fullName: "Ethiopia Yirgacheffe Edido Alemayehu Gosaye Gobena G1 Natural",
    origin: "Ethiopia",
    process: "Natural",
    roast: "Light Roast",
    notes: ["Blueberry sweetness", "Juicy acidity", "Silky texture"],
    brewBias: {
      temp: 91,
      ratio: "1:15.5",
      grind: "Between white sugar and coarse sugar",
      flow: "Medium gentle",
      pours: [
        { title: "Bloom", amount: "50ml", timing: "0:00 – 0:35", note: "Even saturation." },
        { title: "Fruit Development", amount: "120ml", timing: "0:35 – 1:15", note: "Gentle circular pour." },
        { title: "Sweet Finish", amount: "100ml", timing: "1:15 – 1:55", note: "Lower pour height." }
      ]
    }
  },

  {
    id: "elida-natural",
    type: "filter",
    shortName: "Panama Elida Natural #44",
    fullName: "Panama Boquete Elida Natural Catuai #44",
    origin: "Panama",
    process: "Natural",
    roast: "Light Roast",
    notes: ["Berry sweetness", "Elegant body", "Structured acidity"],
    brewBias: {
      temp: 91,
      ratio: "1:15.5",
      grind: "Between white sugar and coarse sugar",
      flow: "Gentle",
      pours: [
        { title: "Bloom", amount: "50ml", timing: "0:00 – 0:35", note: "Even saturation." },
        { title: "Fruit Layering", amount: "120ml", timing: "0:35 – 1:15", note: "Smooth spiral pour." },
        { title: "Sweet Finish", amount: "100ml", timing: "1:15 – 1:55", note: "Reduce turbulence." }
      ]
    }
  },

  {
    id: "hartmann-maragogipe",
    type: "filter",
    shortName: "Panama Hartmann Maragogipe Natural",
    fullName: "Panama Hartmann Estate Maragogipe Natural",
    origin: "Panama",
    process: "Natural",
    roast: "Light Roast",
    notes: ["Large structure", "Sweet herbal finish", "Elegant texture"],
    brewBias: {
      temp: 91,
      ratio: "1:15.5",
      grind: "Between white sugar and coarse sugar",
      flow: "Medium gentle",
      pours: [
        { title: "Bloom", amount: "60ml", timing: "0:00 – 0:40", note: "Promote even saturation." },
        { title: "Main Pour", amount: "120ml", timing: "0:40 – 1:20", note: "Stable extraction flow." },
        { title: "Finish", amount: "100ml", timing: "1:20 – 2:00", note: "Gentle final extraction." }
      ]
    }
  },

  {
    id: "peru-geisha-inca",
    type: "filter",
    shortName: "Peru Geisha Inca Washed",
    fullName: "Peru Cusco Cedrobamba Finca Basul Crispin – Geisha Inca Washed",
    origin: "Peru",
    process: "Washed",
    roast: "Light Roast",
    notes: ["Delicate florals", "Silky sweetness", "Transparent cup"],
    brewBias: {
      temp: 93,
      ratio: "1:16.5",
      grind: "White sugar-like",
      flow: "Gentle",
      pours: [
        { title: "Extended Bloom", amount: "60ml", timing: "0:00 – 0:45", note: "Promote aromatic release." },
        { title: "Main Extraction", amount: "120ml", timing: "0:45 – 1:25", note: "Stable centre flow." },
        { title: "Clarity Finish", amount: "120ml", timing: "1:25 – 2:05", note: "Reduce turbulence." }
      ]
    }
  },

  {
    id: "rwanda-shyira-natural",
    type: "filter",
    shortName: "Rwanda Shyira Natural",
    fullName: "Rwanda NPR Nyabihu Shyira A1 Natural",
    origin: "Rwanda",
    process: "Natural",
    roast: "Light Roast",
    notes: ["Dark berry", "Juicy sweetness", "Round acidity"],
    brewBias: {
      temp: 91,
      ratio: "1:15.5",
      grind: "Between white sugar and coarse sugar",
      flow: "Medium gentle",
      pours: [
        { title: "Bloom", amount: "50ml", timing: "0:00 – 0:35", note: "Stable saturation." },
        { title: "Main Extraction", amount: "120ml", timing: "0:35 – 1:15", note: "Smooth flow control." },
        { title: "Sweet Finish", amount: "100ml", timing: "1:15 – 1:55", note: "Maintain sweetness." }
      ]
    }
  },

  {
    id: "ethiopia-guji-abaya-fogge",
    type: "filter",
    shortName: "Ethiopia Guji Abaya Fogge",
    fullName: "Ethiopia Guji Abaya Fogge Homa – Multipurpose Natural G1",
    origin: "Guji, Ethiopia",
    process: "Natural",
    roast: "Light Roast",
    notes: ["莓果", "熱帶水果", "花香", "高甜感", "乾淨尾韻"],
    brewBias: {
      temp: 92,
      ratio: "1:16.5",
      grind: "White sugar-like",
      flow: "Gentle",
      pours: [
        { title: "Bloom", amount: "50ml", timing: "0:00 – 0:35", note: "Even saturation." },
        { title: "Main Pour", amount: "120ml", timing: "0:35 – 1:15", note: "Maintain stable flow." },
        { title: "Sweet Finish", amount: "100ml", timing: "1:15 – 1:55", note: "Reduce turbulence near finish." }
      ]
    }
  },
/*

  // ======================================
  // ESPRESSO
  // ======================================

  {
    id: "brazil-a37",
    type: "espresso",
    shortName: "Brazil A37 Tobacco",
    fullName: "Brazil Ipanema Premier Cru Black A37 TOBACCO",
    origin: "Brazil",
    process: "Dried On The Tree",
    roast: "Medium Roast",
    notes: ["Dark chocolate", "Tobacco sweetness", "Heavy crema"],
    brewBias: {
      ratio: "1:2",
      grind: "Table salt-like",
      temp: 93,  // 改為 number
      shotTime: "28 – 32 seconds"
    }
  },

  {
    id: "colombia-decaf",
    type: "espresso",
    shortName: "Colombia Decaf",
    fullName: "Colombia Decaffeinated Coffee EA Processed",
    origin: "Colombia",
    process: "EA Decaf",
    roast: "Medium Roast",
    notes: ["Soft sweetness", "Low bitterness", "Balanced finish"],
    brewBias: {
      ratio: "1:2.1",
      grind: "Fine table salt-like",
      temp: 92,  // 改為 number
      shotTime: "27 – 31 seconds"
    }
  },

  {
    id: "espresso-blend",
    type: "espresso",
    shortName: "Espresso Blend",
    fullName: "Guatemala + Costa Rica + Brazil Blend",
    origin: "Blend",
    process: "Mixed Washed / Natural",
    roast: "Medium Roast",
    notes: ["Chocolate sweetness", "Balanced acidity", "Milk-friendly"],
    brewBias: {  // ⚠️ 注意：原本係 brewBias，呢度錯咗
      ratio: "1:2.2",
      grind: "Fine table salt-like",
      temp: 92,
      shotTime: "27 – 30 seconds"
    }
  }
*/

];

// 輔助函數
function getCoffeeById(id) {
  return coffees.find(c => c.id === id);
}

function getCoffeesByType(type) {
  return coffees.filter(c => c.type === type);
}

// Export
// 刪除或註解掉呢段：
// if (typeof module !== "undefined" && module.exports) {
//   module.exports = { coffees, getCoffeeById, getCoffeesByType };
// }

// 確保加上呢段（等瀏覽器可以直接讀到）：
if (typeof window !== "undefined") {
  window.coffees = coffees;
  window.getCoffeeById = getCoffeeById;
  window.getCoffeesByType = getCoffeesByType;
}