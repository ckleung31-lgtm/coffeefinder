// finder.js
// 選豆工具，整合 data.js 和 espressoData.js 的咖啡豆，並提供商品購買連結

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------------------------------
  // 1. 商品連結對照表（根據產品 ID）
  // --------------------------------------------------------------
  const productUrls = {
    // 手沖豆 (Filter)
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

    // Espresso 豆
    "brazil-a37": "https://greendoorcoffee.com/product/brazil-ipanema-premier-cru-black-a37-tobacco-dried-on-the-tree/",
    "colombia-decaf": "https://greendoorcoffee.com/product/colombia-decaffeinated-coffee-ea-processed/",
    "espresso-blend": "https://greendoorcoffee.com/product/espresso-blend/",
    "brazil-santos": "https://greendoorcoffee.com/product/brazil-santos/",
    "green-door-blend": "https://greendoorcoffee.com/product/green-door-blend/"
  };

  // --------------------------------------------------------------
  // 2. 合併所有咖啡豆（從全域變數）
  // --------------------------------------------------------------
  let allBeans = [];
  if (window.coffees) allBeans.push(...window.coffees);
  if (window.COFFEES) allBeans.push(...window.COFFEES);

  // 去重（根據 id）
  const uniqueMap = new Map();
  allBeans.forEach(bean => {
    if (!uniqueMap.has(bean.id)) uniqueMap.set(bean.id, bean);
  });
  const beans = Array.from(uniqueMap.values());

  // --------------------------------------------------------------
  // 3. 風味標籤映射（基於 notes 關鍵字）
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
    // 如果沒有任何匹配，給一個默認標籤（堅果）
    if (tags.size === 0) tags.add("nutty");
    return Array.from(tags);
  }

  // --------------------------------------------------------------
  // 4. 過濾邏輯（修正：風味為 AND，冷萃不再硬性過濾）
  // --------------------------------------------------------------
  function filterBeans(brewMethod, selectedFlavors) {
    return beans.filter(bean => {
      // 沖煮方式過濾（只做溫和的引導，不排除太多）
      if (brewMethod === "filter") {
        // 手沖：排除極深焙且不適合手沖的豆？實際上幾乎都可以，但可以標記
        // 暫時不做硬性排除
      } else if (brewMethod === "espresso") {
        // 濃縮：排除極淺焙且不適合濃縮的豆？但用戶可自己嘗試，暫時保留所有
      } else if (brewMethod === "milk") {
        // 奶啡：建議醇厚、低酸豆，但不強制排除
      } else if (brewMethod === "cold") {
        // 冷萃：適合日曬、厭氧、發酵感、中深焙，但不做硬性排除，讓用戶探索
        // 原來的邏輯已刪除，所有豆都會出現在冷萃結果中
      }

      // 風味過濾：選中的風味必須全部匹配（AND）
      if (selectedFlavors.length > 0) {
        const beanTags = getBeanFlavorTags(bean);
        // 檢查是否所有選中的風味都在 beanTags 中
        const allMatch = selectedFlavors.every(flavor => beanTags.includes(flavor));
        if (!allMatch) return false;
      }
      return true;
    });
  }

  // --------------------------------------------------------------
  // 5. 渲染結果（加入商品連結）
  // --------------------------------------------------------------
  function renderResults(beans) {
    const container = document.getElementById("resultsList");
    if (beans.length === 0) {
      container.innerHTML = `<div class="coffee-card" style="grid-column:1/-1; text-align:center;">沒有同時符合所有風味選擇的豆子，請減少風味標籤再試。</div>`;
      return;
    }
    container.innerHTML = beans.map(bean => {
      const url = productUrls[bean.id];
      const tags = getBeanFlavorTags(bean);
      const tagHtml = tags.map(t => `<span class="coffee-tag">${t}</span>`).join("");
      if (url) {
        return `
          <a href="${url}" target="_blank" rel="noopener noreferrer" class="coffee-card-link">
            <div class="coffee-card">
              <h3>${bean.shortName || bean.name}</h3>
              <div class="coffee-meta">${bean.origin || ""} · ${bean.process || ""} · ${bean.roast || ""}</div>
              <div class="coffee-tags">${tagHtml}</div>
            </div>
          </a>
        `;
      } else {
        return `
          <div class="coffee-card">
            <h3>${bean.shortName || bean.name}</h3>
            <div class="coffee-meta">${bean.origin || ""} · ${bean.process || ""} · ${bean.roast || ""}</div>
            <div class="coffee-tags">${tagHtml}</div>
          </div>
        `;
      }
    }).join("");
  }

  // --------------------------------------------------------------
  // 6. UI 交互（風味多選，沖煮方式單選）
  // --------------------------------------------------------------
  let currentBrewMethod = "filter";
  let selectedFlavors = [];

  const methodBtns = document.querySelectorAll(".method-btn");
  const flavorContainer = document.getElementById("flavorTags");

  const flavorCategories = ["floral", "fruity", "nutty", "sweet", "funky"];
  const flavorNames = { floral:"花香", fruity:"果香", nutty:"堅果/可可", sweet:"甜感", funky:"發酵/酒香" };
  flavorContainer.innerHTML = flavorCategories.map(cat =>
    `<button class="flavor-tag" data-flavor="${cat}">${flavorNames[cat]}</button>`
  ).join("");

  methodBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      methodBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentBrewMethod = btn.dataset.method;
      updateResults();
    });
  });

  // 重新綁定風味標籤事件（動態生成）
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
    const filtered = filterBeans(currentBrewMethod, selectedFlavors);
    renderResults(filtered);
  }

  // 初始化
  document.querySelector(".method-btn[data-method='filter']").classList.add("active");
  bindFlavorEvents();
  updateResults();
});