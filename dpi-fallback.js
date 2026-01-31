(() => {
  const ua = navigator.userAgent || "";
  const isWindows = ua.includes("Windows");
  if (!isWindows) return;

  const dpr = window.devicePixelRatio || 1;
  if (Math.abs(dpr - 1.25) <= 0.06) {
    document.documentElement.classList.add("win-dpi-125");
  }
})();
