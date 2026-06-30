const derivativeMaterials = [
  { id: "d1", no: 1, title: "도함수의 활용 1", video: "costudy_video_1/미분1 new.mp4", step: "problem1_interactive.html" },
  { id: "d2", no: 2, title: "도함수의 활용 2", video: "costudy_video_2/풀이_내레이션.mp4", step: "problem2_interactive.html" },
  { id: "d3", no: 3, title: "도함수의 활용 3", video: "costudy_video_3/풀이_내레이션.mp4", step: "problem3_interactive.html" },
  { id: "d4", no: 4, title: "도함수의 활용 4", video: "costudy_video_4_fixed/풀이_내레이션.mp4", step: "problem4_interactive.html" },
  { id: "d5", no: 5, title: "도함수의 활용 5", video: "costudy_video_5/풀이_내레이션.mp4", step: "problem5_interactive.html" },
  { id: "d6", no: 6, title: "도함수의 활용 6", video: "costudy_video_6/풀이_내레이션.mp4", step: "problem6_interactive.html" },
  { id: "d7", no: 7, title: "도함수의 활용 7 삼차함수 절댓값", video: "costudy_video_7_삼차함수절댓값/풀이_내레이션.mp4", step: "problem7_interactive.html" },
  { id: "d8", no: 8, title: "도함수의 활용 8", video: "costudy_video_8/풀이_내레이션.mp4", step: "problem8_interactive.html" },
  { id: "d9", no: 9, title: "도함수의 활용 9", video: "costudy_video_9/풀이_내레이션.mp4", step: "problem9_interactive.html" },
  { id: "d10", no: 10, title: "도함수의 활용 10", video: "costudy_video_10/풀이_내레이션.mp4", step: "problem10_interactive.html" },
  { id: "d11", no: 11, title: "도함수의 활용 11", video: "costudy_video_11/풀이_내레이션.mp4", step: "problem11_interactive.html" },
  { id: "d12", no: 12, title: "도함수의 활용 12", video: "costudy_video_12/풀이_내레이션.mp4", step: "problem12_interactive.html" },
  { id: "d13", no: 13, title: "도함수의 활용 13", video: "costudy_video_13/풀이_내레이션.mp4", step: "problem13_interactive.html" },
  { id: "d14", no: 14, title: "도함수의 활용 14", video: "costudy_video_14/풀이_내레이션.mp4", step: "problem14_interactive.html" },
  { id: "d15", no: 15, title: "도함수의 활용 15", video: "costudy_video_15/풀이_내레이션.mp4", step: "problem15_interactive.html" },
  { id: "d16", no: 16, title: "도함수의 활용 16", video: "costudy_video_16/풀이_내레이션.mp4", step: "problem16_interactive.html" },
  { id: "d17", no: 17, title: "도함수의 활용 17", video: "costudy_video_17/풀이_내레이션.mp4", step: "problem17_interactive.html" },
  { id: "d18", no: 18, title: "도함수의 활용 18", video: "costudy_video_18/풀이_내레이션.mp4", step: "problem18_interactive.html" }
].map((item) => ({
  ...item,
  group: "도함수의 활용",
  filter: "derivative",
  status: "ready",
  hand: `assets/hand/derivative/${String(item.no).padStart(2, "0")}.png`
}));

const integralReadyMaterials = [
  { id: "i1", no: 1, title: "적분 1", video: "costudy_video_kc1/풀이_내레이션.mp4", step: "problem_su1_interactive.html" },
  { id: "i2", no: 2, title: "적분 2", video: "costudy_video_kc2/풀이_내레이션.mp4", step: "problem_su2_interactive.html" },
  { id: "i3", no: 3, title: "적분 3", video: "costudy_video_kc3/풀이_내레이션.mp4", step: "problem_su3_interactive.html" },
  { id: "i4", no: 4, title: "적분 4", video: "costudy_video_kc4/풀이_내레이션.mp4", step: "problem_kc4_interactive.html" },
  { id: "i5", no: 5, title: "적분 5", video: "costudy_video_kc5/풀이_내레이션.mp4", step: "problem_kc5_interactive.html" },
  { id: "i6", no: 6, title: "적분 6", video: "costudy_video_kc6/풀이_내레이션.mp4", step: "problem_kc6_interactive.html" },
  { id: "i7", no: 7, title: "적분 7", video: "costudy_video_kc7/풀이_내레이션.mp4", step: "problem_kc7_interactive.html" },
  { id: "i8", no: 8, title: "적분 8", video: "costudy_video_kc8/적분 8번.mp4", step: "problem_kc8_interactive.html" },
  { id: "i9", no: 9, title: "적분 9", video: "costudy_video_kc9/풀이_내레이션.mp4", step: "problem_kc9_interactive.html" },
  { id: "i10", no: 10, title: "적분 10", video: "costudy_video_kc10/풀이_내레이션.mp4", step: "problem_kc10_interactive.html" },
  { id: "i11", no: 11, title: "적분 11", video: "costudy_video_kc11/풀이_내레이션.mp4", step: "problem_kc11_interactive.html" },
  { id: "i12", no: 12, title: "적분 12", video: "costudy_video_kc12/풀이_내레이션.mp4", step: "problem_kc12_interactive.html" },
  { id: "i13", no: 13, title: "적분 13", video: "costudy_video_kc13/풀이_내레이션.mp4", step: "problem_kc13_interactive.html" },
  { id: "i14", no: 14, title: "적분 14", video: "costudy_video_kc14/풀이_내레이션.mp4", step: "problem_kc14_interactive.html" },
  { id: "i15", no: 15, title: "적분 15", video: "costudy_video_kc15/풀이_내레이션.mp4", step: "problem_kc15_interactive.html" },
  { id: "i16", no: 16, title: "적분 16", video: "costudy_video_kc16/풀이_내레이션.mp4", step: "problem_kc16_interactive.html" },
  { id: "i17", no: 17, title: "적분 17", video: "costudy_video_kc17/풀이_내레이션.mp4", step: "problem_kc17_interactive.html" },
  { id: "i18", no: 18, title: "적분 18", video: "costudy_video_kc18/풀이_내레이션.mp4", step: "problem_kc18_interactive.html" },
  { id: "i19", no: 19, title: "적분 19", video: "costudy_video_kc19/풀이_내레이션.mp4", step: "problem_kc19_interactive.html" },
  { id: "i20", no: 20, title: "적분 20", video: "costudy_video_kc20/풀이_내레이션.mp4", step: "problem_kc20_interactive.html" },
  { id: "i21", no: 21, title: "적분 21", video: "costudy_video_kc21/풀이_내레이션.mp4", step: "problem_kc21_interactive.html" },
  { id: "i22", no: 22, title: "적분 22", video: "costudy_video_kc22/풀이_내레이션.mp4", step: "problem_kc22_interactive.html" }
].map((item) => ({
  ...item,
  group: "적분",
  filter: "integral",
  status: "ready",
  hand: `assets/hand/integral/${String(item.no).padStart(2, "0")}.png`
}));

const integralDraftMaterials = Array.from({ length: 0 }, (_, index) => {
  const no = index + 15;
  return {
    id: `i${no}`,
    no,
    group: "적분",
    filter: "integral",
    status: "draft",
    title: `적분 ${no}`,
    video: "",
    step: "",
    hand: `assets/hand/integral/${String(no).padStart(2, "0")}.png`
  };
});

const materials = [...derivativeMaterials, ...integralReadyMaterials, ...integralDraftMaterials];

const variationMaterials = [
  {
    id: "v-derivative",
    group: "도함수의 활용",
    title: "도함수의 활용 변형문제",
    description: "44문항을 문제 먼저 보고, 클릭해서 해설을 확인합니다.",
    total: 44,
    basePath: "assets/variations/derivative"
  },
  {
    id: "v-integral",
    group: "적분",
    title: "정적분 변형문제",
    description: "44문항을 문제 먼저 보고, 클릭해서 해설을 확인합니다.",
    total: 44,
    basePath: "assets/variations/integral"
  }
];

const writingCandidates = Array.from({ length: 40 }, (_, index) => {
  const no = index + 1;
  return {
    no,
    title: `서술형 ${no}`,
    problem: `assets/writing/문제${no}.png`,
    answer: `assets/writing/정답${no}.png`
  };
});

let writingProblems = writingCandidates.slice(0, 13).map((item) => ({
  ...item,
  hasAnswer: true
}));

const state = {
  filter: "all",
  query: "",
  selectedId: materials[0].id,
  mode: "video",
  variationId: variationMaterials[0]?.id || "",
  variationIndex: 0,
  variationRevealed: false,
  writingIndex: 0,
  writingRevealed: false
};

const $ = (selector) => document.querySelector(selector);

const els = {
  videoCount: $("#video-count"),
  handCount: $("#hand-count"),
  stepCount: $("#step-count"),
  writingCount: $("#writing-count"),
  variationCount: $("#variation-count"),
  list: $("#material-list"),
  search: $("#material-search"),
  filters: document.querySelectorAll(".filter"),
  modeTabs: document.querySelectorAll(".mode-tab"),
  panels: document.querySelectorAll(".mode-panel"),
  workspace: $(".workspace"),
  viewer: $(".viewer"),
  selectedGroup: $("#selected-group"),
  selectedTitle: $("#selected-title"),
  video: $("#solution-video"),
  videoEmpty: $("#video-empty"),
  handFrame: $("#hand-frame"),
  handImage: $("#hand-image"),
  handEmpty: $("#hand-empty"),
  stepFrame: $("#step-frame"),
  stepEmpty: $("#step-empty"),
  variationList: $("#variation-list"),
  variationKindLabel: $("#variation-kind-label"),
  variationTitle: $("#variation-title"),
  variationImage: $("#variation-image"),
  variationEmpty: $("#variation-empty"),
  variationOpen: $("#variation-open"),
  variationPrev: $("#variation-prev"),
  variationReveal: $("#variation-reveal"),
  variationNext: $("#variation-next"),
  variationStrip: $("#variation-strip"),
  writingCounter: $("#writing-counter"),
  writingTitle: $("#writing-title"),
  writingImage: $("#writing-image"),
  writingEmpty: $("#writing-empty"),
  writingPrev: $("#writing-prev"),
  writingReveal: $("#writing-reveal"),
  writingNext: $("#writing-next"),
  writingOpen: $("#writing-open"),
  writingStrip: $("#writing-strip")
};

function assetUrl(path) {
  return path.split("/").map(encodeURIComponent).join("/");
}

function selectedMaterial() {
  return materials.find((item) => item.id === state.selectedId) || materials[0];
}

function selectedVariation() {
  return variationMaterials.find((item) => item.id === state.variationId) || variationMaterials[0];
}

function selectedWritingProblem() {
  return writingProblems[state.writingIndex] || null;
}

function prepareHeroPreview() {
  const frame = document.querySelector(".hero-step-preview");
  if (!frame) {
    return;
  }

  const applyPreviewStyle = () => {
    try {
      const doc = frame.contentDocument;
      if (!doc?.head || doc.getElementById("hero-preview-style")) {
        return;
      }
      const style = doc.createElement("style");
      style.id = "hero-preview-style";
      style.textContent = `
        html,
        body {
          overflow: hidden !important;
          scrollbar-width: none !important;
        }

        body::-webkit-scrollbar,
        *::-webkit-scrollbar {
          display: none !important;
        }
      `;
      doc.head.appendChild(style);
      frame.contentWindow?.scrollTo(0, 0);
    } catch (error) {
      // The preview is decorative; keep the page usable if the iframe is not ready.
    }
  };

  frame.addEventListener("load", applyPreviewStyle);
  applyPreviewStyle();
}

function useInlineMaterialViewer() {
  return window.matchMedia("(max-width: 680px)").matches;
}

function placeMaterialViewer(shouldScroll = false) {
  if (!els.viewer || !els.list || !els.workspace) {
    return;
  }

  if (useInlineMaterialViewer()) {
    const activeCard = Array.from(els.list.querySelectorAll(".material-card")).find((card) => card.dataset.id === state.selectedId);
    const target = activeCard || els.list.lastElementChild;
    if (target) {
      target.insertAdjacentElement("afterend", els.viewer);
    } else {
      els.list.appendChild(els.viewer);
    }
    els.viewer.classList.add("inline-viewer");
  } else {
    els.workspace.appendChild(els.viewer);
    els.viewer.classList.remove("inline-viewer");
  }

  if (shouldScroll) {
    window.requestAnimationFrame(() => {
      els.viewer.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

function updateCounts() {
  els.videoCount.textContent = `${materials.filter((item) => item.video).length}/${materials.length}`;
  els.handCount.textContent = `${materials.filter((item) => item.hand).length}/${materials.length}`;
  els.stepCount.textContent = `${materials.filter((item) => item.step).length}/${materials.length}`;
  els.writingCount.textContent = writingProblems.length;
  els.variationCount.textContent = variationMaterials.reduce((sum, item) => sum + item.total, 0);
}

function filteredMaterials() {
  const query = state.query.trim().toLowerCase();
  return materials.filter((item) => {
    const matchesFilter = state.filter === "all" || item.filter === state.filter || (state.filter === "draft" && item.status === "draft");
    const haystack = `${item.title} ${item.group} ${item.id}`.toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  });
}

function renderList() {
  if (els.viewer?.parentElement === els.list) {
    els.viewer.remove();
  }
  els.list.innerHTML = "";
  filteredMaterials().forEach((item) => {
    const button = document.createElement("button");
    button.className = `material-card${item.id === state.selectedId ? " active" : ""}`;
    button.type = "button";
    button.dataset.id = item.id;
    button.innerHTML = `
      <span class="chip">${item.group}</span>
      <strong>${item.title}</strong>
      <span class="material-meta">
        ${item.status === "draft" ? '<span class="chip missing">제작중</span>' : ""}
        <span class="chip ${item.video ? "video" : "missing"}">${item.video ? "영상" : "영상 대기"}</span>
        <span class="chip ${item.hand ? "step" : "missing"}">${item.hand ? "손풀이" : "손풀이 대기"}</span>
        <span class="chip ${item.step ? "step" : "missing"}">${item.step ? "단계풀이" : "풀이 대기"}</span>
      </span>
    `;
    button.addEventListener("click", () => {
      state.selectedId = item.id;
      renderCurrentMaterial();
      renderList();
      placeMaterialViewer(true);
    });
    els.list.appendChild(button);
  });
  placeMaterialViewer(false);
}

function renderCurrentMaterial() {
  const item = selectedMaterial();
  els.selectedGroup.textContent = item.group;
  els.selectedTitle.textContent = item.title;

  if (item.video) {
    els.video.src = assetUrl(item.video);
    els.video.load();
    els.video.style.display = "block";
    els.videoEmpty.classList.remove("visible");
  } else {
    els.video.removeAttribute("src");
    els.video.load();
    els.video.style.display = "none";
    els.videoEmpty.classList.add("visible");
  }

  if (item.step) {
    els.stepFrame.src = assetUrl(item.step);
    els.stepFrame.style.display = "block";
    els.stepEmpty.classList.remove("visible");
  } else {
    els.stepFrame.removeAttribute("src");
    els.stepFrame.style.display = "none";
    els.stepEmpty.classList.add("visible");
  }

  if (item.hand) {
    const handUrl = assetUrl(item.hand);
    const isImage = /\.(png|jpe?g|webp|gif)$/i.test(item.hand);
    if (isImage) {
      els.handImage.src = handUrl;
      els.handImage.style.display = "block";
      els.handFrame.removeAttribute("src");
      els.handFrame.style.display = "none";
    } else {
      els.handFrame.src = `${handUrl}#view=FitH`;
      els.handFrame.style.display = "block";
      els.handImage.removeAttribute("src");
      els.handImage.style.display = "none";
    }
    els.handEmpty.classList.remove("visible");
  } else {
    els.handFrame.removeAttribute("src");
    els.handFrame.style.display = "none";
    els.handImage.removeAttribute("src");
    els.handImage.style.display = "none";
    els.handEmpty.classList.add("visible");
  }
}

function setMode(mode) {
  state.mode = mode;
  els.modeTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.mode === mode));
  els.panels.forEach((panel) => panel.classList.toggle("active", panel.dataset.panel === mode));
}

function renderVariationList() {
  els.variationList.innerHTML = "";
  variationMaterials.forEach((item) => {
    const button = document.createElement("button");
    button.className = `variation-card${item.id === state.variationId ? " active" : ""}`;
    button.type = "button";
    button.dataset.id = item.id;
    button.innerHTML = `
      <span class="chip">${item.group}</span>
      <strong>${item.title}</strong>
      <span>${item.description}</span>
      <span class="material-meta">
        <span class="chip video">${item.total}문항</span>
        <span class="chip step">문제-해설</span>
      </span>
    `;
    button.addEventListener("click", () => {
      state.variationId = item.id;
      state.variationIndex = 0;
      state.variationRevealed = false;
      renderVariationList();
      renderVariationStrip();
      renderVariationViewer();
    });
    els.variationList.appendChild(button);
  });
}

function variationPath(item, kind, no) {
  const filename = kind === "solution" ? `해설${no}.png` : `문제${no}.png`;
  return `${item.basePath}/${filename}`;
}

function renderVariationStrip() {
  const item = selectedVariation();
  els.variationStrip.innerHTML = "";
  if (!item) {
    return;
  }

  Array.from({ length: item.total }, (_, index) => index).forEach((index) => {
    const no = index + 1;
    const button = document.createElement("button");
    button.className = `variation-dot${index === state.variationIndex ? " active" : ""}`;
    button.type = "button";
    button.textContent = no;
    button.setAttribute("aria-label", `${item.title} ${no}번 보기`);
    button.addEventListener("click", () => {
      state.variationIndex = index;
      state.variationRevealed = false;
      renderVariationStrip();
      renderVariationViewer();
    });
    els.variationStrip.appendChild(button);
  });
}

function renderVariationViewer() {
  const item = selectedVariation();
  if (!item) {
    els.variationKindLabel.textContent = "0 / 0";
    els.variationTitle.textContent = "변형문제";
    els.variationImage.removeAttribute("src");
    els.variationImage.style.display = "none";
    els.variationOpen.classList.add("disabled");
    els.variationPrev.disabled = true;
    els.variationReveal.disabled = true;
    els.variationNext.disabled = true;
    els.variationEmpty.textContent = "등록된 변형문제가 없습니다.";
    els.variationEmpty.classList.add("visible");
    return;
  }

  if (state.variationIndex >= item.total) {
    state.variationIndex = 0;
  }

  const no = state.variationIndex + 1;
  const isSolution = state.variationRevealed;
  const path = variationPath(item, isSolution ? "solution" : "problem", no);
  const url = assetUrl(path);
  els.variationKindLabel.textContent = `${isSolution ? "해설" : "문제"} ${no} / ${item.total}`;
  els.variationTitle.textContent = `${item.title} ${no}번 ${isSolution ? "해설" : "문제"}`;
  els.variationImage.onerror = () => {
    els.variationImage.style.display = "none";
    els.variationEmpty.textContent = `${item.group} ${no}번 ${isSolution ? "해설" : "문제"} PNG를 넣으면 표시됩니다.`;
    els.variationEmpty.classList.add("visible");
  };
  els.variationImage.src = url;
  els.variationImage.style.display = "block";
  els.variationOpen.href = url;
  els.variationOpen.classList.remove("disabled");
  els.variationPrev.disabled = item.total <= 1;
  els.variationReveal.disabled = isSolution;
  els.variationReveal.textContent = isSolution ? "해설 보는 중" : "해설 보기";
  els.variationNext.disabled = item.total <= 1;
  els.variationEmpty.classList.remove("visible");
}

function changeVariationProblem(delta) {
  const item = selectedVariation();
  if (!item) {
    return;
  }
  state.variationIndex = (state.variationIndex + delta + item.total) % item.total;
  state.variationRevealed = false;
  renderVariationStrip();
  renderVariationViewer();
}

function revealVariationSolution() {
  if (!selectedVariation() || state.variationRevealed) {
    return;
  }
  state.variationRevealed = true;
  renderVariationViewer();
}

function handleVariationImageClick() {
  if (!state.variationRevealed) {
    revealVariationSolution();
    return;
  }
  changeVariationProblem(1);
}

async function imageExists(path) {
  try {
    const response = await fetch(assetUrl(path), { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function detectWritingProblems() {
  const checks = writingCandidates.map(async (item) => {
    const hasProblem = await imageExists(item.problem);
    if (!hasProblem) {
      return null;
    }
    return {
      ...item,
      hasAnswer: await imageExists(item.answer)
    };
  });
  const detectedProblems = (await Promise.all(checks)).filter(Boolean);
  if (detectedProblems.length > writingProblems.length) {
    writingProblems = detectedProblems;
  }
  if (state.writingIndex >= writingProblems.length) {
    state.writingIndex = 0;
  }
  state.writingRevealed = false;
  updateCounts();
  renderWritingStrip();
  renderWritingViewer();
}

function renderWritingStrip() {
  els.writingStrip.innerHTML = "";
  writingProblems.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = `writing-dot${index === state.writingIndex ? " active" : ""}`;
    button.type = "button";
    button.textContent = item.no;
    button.setAttribute("aria-label", `${item.title} 보기`);
    button.addEventListener("click", () => {
      state.writingIndex = index;
      state.writingRevealed = false;
      renderWritingStrip();
      renderWritingViewer();
    });
    els.writingStrip.appendChild(button);
  });
}

function renderWritingViewer() {
  const item = selectedWritingProblem();
  if (!item) {
    els.writingCounter.textContent = "0 / 0";
    els.writingTitle.textContent = "서술형 대비";
    els.writingImage.removeAttribute("src");
    els.writingImage.style.display = "none";
    els.writingOpen.removeAttribute("href");
    els.writingOpen.classList.add("disabled");
    els.writingPrev.disabled = true;
    els.writingReveal.disabled = true;
    els.writingNext.disabled = true;
    els.writingReveal.textContent = "정답 보기";
    els.writingEmpty.textContent = "등록된 서술형 PNG가 없습니다. 파일명을 문제1.png, 정답1.png 형식으로 넣어주세요.";
    els.writingEmpty.classList.add("visible");
    return;
  }

  const isAnswer = state.writingRevealed;
  const currentPath = isAnswer ? item.answer : item.problem;
  const url = assetUrl(currentPath);
  els.writingCounter.textContent = `${isAnswer ? "정답" : "문제"} ${state.writingIndex + 1} / ${writingProblems.length}`;
  els.writingTitle.textContent = `${item.title} ${isAnswer ? "정답" : "문제"}`;
  els.writingImage.onerror = () => {
    els.writingImage.style.display = "none";
    els.writingEmpty.textContent = isAnswer ? "정답 이미지를 불러오지 못했습니다." : "문제 이미지를 불러오지 못했습니다.";
    els.writingEmpty.classList.add("visible");
  };
  els.writingImage.src = url;
  els.writingImage.style.display = "block";
  els.writingOpen.href = url;
  els.writingOpen.classList.remove("disabled");
  els.writingPrev.disabled = writingProblems.length <= 1;
  els.writingReveal.disabled = isAnswer || !item.hasAnswer;
  els.writingReveal.textContent = isAnswer ? "정답 보는 중" : "정답 보기";
  els.writingNext.disabled = writingProblems.length <= 1;
  els.writingEmpty.classList.remove("visible");
}

function changeWritingProblem(delta) {
  if (!writingProblems.length) {
    return;
  }
  state.writingIndex = (state.writingIndex + delta + writingProblems.length) % writingProblems.length;
  state.writingRevealed = false;
  renderWritingStrip();
  renderWritingViewer();
}

function revealWritingAnswer() {
  const item = selectedWritingProblem();
  if (!item || !item.hasAnswer || state.writingRevealed) {
    return;
  }
  state.writingRevealed = true;
  renderWritingViewer();
}

function handleWritingImageClick() {
  if (!state.writingRevealed) {
    revealWritingAnswer();
    return;
  }
  changeWritingProblem(1);
}

els.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderList();
});

els.filters.forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.filter;
    els.filters.forEach((item) => item.classList.toggle("active", item === button));
    renderList();
  });
});

els.modeTabs.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

els.variationPrev.addEventListener("click", () => changeVariationProblem(-1));
els.variationReveal.addEventListener("click", revealVariationSolution);
els.variationNext.addEventListener("click", () => changeVariationProblem(1));
els.variationImage.addEventListener("click", handleVariationImageClick);

els.writingPrev.addEventListener("click", () => changeWritingProblem(-1));
els.writingReveal.addEventListener("click", revealWritingAnswer);
els.writingNext.addEventListener("click", () => changeWritingProblem(1));
els.writingImage.addEventListener("click", handleWritingImageClick);
window.addEventListener("resize", () => placeMaterialViewer(false));

updateCounts();
prepareHeroPreview();
renderList();
renderCurrentMaterial();
placeMaterialViewer(false);
renderVariationList();
renderVariationStrip();
renderVariationViewer();
renderWritingViewer();
detectWritingProblems();
