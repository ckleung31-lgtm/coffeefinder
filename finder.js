// finder.js
// 選豆工具：先選風味（AND），顯示匹配分數 + 描述
// 正體中文版本（無沖煮哲學區塊）

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------
  // 1. 商品連結對照表
  // --------------------------------------------------------------
  const productUrls = {
    "bolivia-alasitas-geisha": "https://greendoorcoffee.com/product/bolivia-caranavi-alasitas-geisha-pink-honey-lot-24/",
    "colombia-camenzo": "https://greendoorcoffee.com/product/colombia-timana-camenzo-community-aerobic-washed-caturra/",
    "costa-rica-el-mango": "https://greendoorcoffee.com/product/costa-rica-brunca-rivense-el-mango-passion-honey/",
    "don-mayo-anaerobic": "https://greendoorcoffee.com/product/costa-rica-tarrazu-don-mayo-bella-vista-micro-lot-anaerobic-natural/",
    "pacamara-washed": "https://greendoorcoffee.com/product/el-salvador-finca-santa-elena-pacamara-washed/",
    "ethiopia-chelbesa": "https://greendoorcoffee.com/product/ethiopia-gedeo-yirgacheffe-gedeb-chelbesa-premium-g1-washed/",
    "gerbicho-anaerobic": "https://greendoorcoffee.com/product/ethiopia-guji-gerbicho-rogicha-grade-1-anaerobic-natural-tariku-getachew-washing-station/",
    "edido-natural": "https://greendoorcoffee.com/product/ethiopia-yirgarcheffe-edido-alemayehu-gosaye-gobena-g1-natural/",
    "elida-natural": "https://greendoorcoffee.com/product/panama-boquete-elida-natural-catuai-44/",
    "hartmann-maragogipe": "https://greendoorcoffee.com/product/panama-elida-catuai-anaerobic-slow-drying-natural/",
    "peru-geisha-inca": "https://greendoorcoffee.com/product/peru-cusco-cedrobamba-finca-basul-crispin-geisha-inca-sl-09-washed/",
    "rwanda-shyira-natural": "https://greendoorcoffee.com/product/rwanda-npr-nyabihu-shyira-a1-natural/",
    "uganda-sipi-falls-natural": "https://greendoorcoffee.com/product/uganda-sipi-falls-washing-station-natural/",
    "brazil-a37": "https://greendoorcoffee.com/product/brazil-ipanema-premier-cru-black-a37-tobacco-dried-on-the-tree/",
    "colombia-decaf": "https://greendoorcoffee.com/product/colombia-decaffeinated-coffee-ea-processed/",
    "espresso-blend": "https://greendoorcoffee.com/product/espresso-blend/",
    "brazil-santos": "https://greendoorcoffee.com/product/brazil-santos/",
    "ethiopia-guji-abaya-fogge": "https://greendoorcoffee.com/product/ethiopia-guji-abaya-fogge-homa-multipurpose-natural-g1/"
  };

  // --------------------------------------------------------------
  // 2. 描述文字（選豆工具專用）
  // --------------------------------------------------------------
  const descriptions = {
    "bolivia-alasitas-geisha": "花香細緻、酸質透明，適合喜歡清爽茶感的咖啡愛好者。",
    "colombia-camenzo": "紅果酸甜、平衡乾淨，日常手沖或淺焙濃縮皆宜。",
    "costa-rica-el-mango": "熱帶水果甜感、蜜糖口感，body 圓潤，冷熱皆精彩。",
    "don-mayo-anaerobic": "發酵果香、酒釀甜感，適合喜歡特殊處理法與高複雜度的玩家。",
    "pacamara-washed": "奶油滑順、核果甜香，結構紮實，手沖與奶啡兩相宜。",
    "ethiopia-chelbesa": "茉莉花、柑橘紅茶，經典衣索比亞風味，乾淨優雅。",
    "gerbicho-anaerobic": "發酵莓果、葡萄酒感，濃郁甜感，適合重口味愛好者。",
    "edido-natural": "藍莓果醬、果汁感，日曬處理的甜美代表作。",
    "elida-natural": "莓果甜感、優雅酸質，巴拿馬日曬的經典之選。",
    "hartmann-maragogipe": "大顆馬拉戈吉佩，草本甜感、結構清晰，層次豐富。",
    "peru-geisha-inca": "花香絲滑、甜感細膩，印加瑰夏的溫潤氣質。",
    "rwanda-shyira-natural": "黑莓酸甜、圓潤多汁，非洲日曬的狂野與平衡兼具。",
    "uganda-sipi-falls-natural": "深色莓果、巧克力尾韻，東非日曬的厚實甜感。",
    "brazil-a37": "黑朱古力、菸草甜，醇厚飽滿，適合傳統濃縮與奶啡。",
    "colombia-decaf": "焦糖可可、低刺激甜感，低咖啡因但不妥協風味。",
    "espresso-blend": "黑糖可可、奶油滑順，專為濃縮與奶啡設計的招牌拼配。",
    "brazil-santos": "榛果朱古力、焦糖甜，堅果調性明確，入門首選。",
    "ethiopia-guji-abaya-fogge": "日曬 Guji，莓果炸裂、熱帶水果甜感，乾淨尾韻，SOE 或手沖皆亮眼。"
  };

  // --------------------------------------------------------------
  // 3. 合併所有咖啡豆（data.js + espressoData.js）
  // --------------------------------------------------------------
  let allBeans = [];
  if (window.coffees) allBeans.push(...window.coffees);
  if (window.COFFEES) allBeans.push(...window.COFFEES);

  const uniqueMap = new Map();
  allBeans.forEach(bean => {
    if (!uniqueMap.has(bean.id)) uniqueMap.set(bean.id, bean);
  });
  const beans = Array.from(uniqueMap.values());

  // --------------------------------------------------------------
  // 4. 風味標籤映射（基於 notes 關鍵字）
  // --------------------------------------------------------------
  const flavorMapping = {
    floral: ["Floral", "Jasmine", "花香", "白花", "茉莉花", "玫瑰"],
    fruity: ["Berry", "Citrus", "Tropical", "Blueberry", "莓果", "柑橘", "熱帶水果", "藍莓", "紅果", "Stone fruit"],
    nutty: ["Chocolate", "Hazelnut", "Cocoa", "朱古力", "榛子", "可可", "黑糖", "焦糖", "Caramel", "Brown Sugar"],
    sweet: ["Honey", "Sweet", "蜜", "甜感", "糖漿", "Syrupy"],
    funky: ["Fermented", "Wine", "Anaerobic", "發酵", "酒香", "酒感"]
  };

  function getBeanFlavorTags(bean) {
    const notes = bean.notes || [];
    const tags = new Set();
    for (const note of notes) {
      const lowerNote = note.toLowerCase();
      for (const [category, keywords] of Object.entries(flavorMapping)) {
        if (keywords.some(kw => lowerNote.includes(kw.toLowerCase()))) {
          tags.add(category);
        }
      }
    }
    if (tags.size === 0) tags.add("nutty");
    return Array.from(tags);
  }

  // --------------------------------------------------------------
  // 5. 計算匹配分數
  // --------------------------------------------------------------
  function getMatchScore(beanTags, selectedFlavors) {
    if (selectedFlavors.length === 0) return null;
    const matched = selectedFlavors.filter(f => beanTags.includes(f)).length;
    return `${matched}/${selectedFlavors.length}`;
  }

  // --------------------------------------------------------------
  // 6. 風味過濾（AND）
  // --------------------------------------------------------------
  function filterBeansByFlavors(selectedFlavors) {
    if (selectedFlavors.length === 0) return beans;
    return beans.filter(bean => {
      const beanTags = getBeanFlavorTags(bean);
      return selectedFlavors.every(flavor => beanTags.includes(flavor));
    });
  }

  // --------------------------------------------------------------
  // 7. 渲染結果
  // --------------------------------------------------------------
  function renderResults(beans, selectedFlavors) {
    const container = document.getElementById("resultsList");
    if (beans.length === 0) {
      container.innerHTML = `<div class="coffee-card" style="grid-column:1/-1; text-align:center;">沒有符合所有風味選擇的豆子，請減少風味標籤再試。</div>`;
      return;
    }
    container.innerHTML = beans.map(bean => {
      const url = productUrls[bean.id];
      const tags = getBeanFlavorTags(bean);
      const tagHtml = tags.map(t => `<span class="coffee-tag">${t}</span>`).join("");

      const matchScore = getMatchScore(tags, selectedFlavors);
      const scoreHtml = matchScore ? `<div class="match-score">風味匹配度 ${matchScore}</div>` : '';

      const description = descriptions[bean.id] || "這隻豆風味豐富，歡迎試試看。";

      const cardContent = `
        <div class="coffee-card">
          <h3>${bean.shortName || bean.name}</h3>
          <div class="coffee-meta">${bean.origin || ""} · ${bean.process || ""} · ${bean.roast || ""}</div>
          <div class="coffee-tags">${tagHtml}</div>
          ${scoreHtml}
          <div class="coffee-description">${description}</div>
        </div>
      `;
      if (url) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="coffee-card-link">${cardContent}</a>`;
      } else {
        return cardContent;
      }
    }).join("");
  }

  // --------------------------------------------------------------
  // 8. UI 交互
  // --------------------------------------------------------------
  let selectedFlavors = [];
  const flavorContainer = document.getElementById("flavorTags");
  const flavorCategories = ["floral", "fruity", "nutty", "sweet", "funky"];
  const flavorNames = { floral:"花香", fruity:"果香", nutty:"堅果/可可", sweet:"甜感", funky:"發酵/酒香" };
  flavorContainer.innerHTML = flavorCategories.map(cat =>
    `<button class="flavor-tag" data-flavor="${cat}">${flavorNames[cat]}</button>`
  ).join("");

  function bindFlavorEvents() {
    document.querySelectorAll(".flavor-tag").forEach(btn => {
      btn.removeEventListener("click", flavorClickHandler);
      btn.addEventListener("click", flavorClickHandler);
    });
  }

  function flavorClickHandler(e) {
    const btn = e.currentTarget;
    const flavor = btn.dataset.flavor;
    if (selectedFlavors.includes(flavor)) {
      selectedFlavors = selectedFlavors.filter(f => f !== flavor);
      btn.classList.remove("selected");
    } else {
      selectedFlavors.push(flavor);
      btn.classList.add("selected");
    }
    updateResults();
  }

  function updateResults() {
    const filtered = filterBeansByFlavors(selectedFlavors);
    renderResults(filtered, selectedFlavors);
  }

  bindFlavorEvents();
  updateResults();
});