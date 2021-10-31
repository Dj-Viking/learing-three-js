export function setCanvasDimensions(
  canvas: THREE.WebGLRenderer["domElement"], 
  width: typeof window["innerWidth"], 
  height: typeof window["innerHeight"], 
  set2dTransform = false
): void {
  const ratio = window.devicePixelRatio;
  // eslint-disable-next-line
  canvas.width = width * ratio;
  // eslint-disable-next-line
  canvas.height = height * ratio;
  // eslint-disable-next-line
  canvas.style.width = `${width}px`;
  // eslint-disable-next-line
  canvas.style.height = `${height}px`;
  if (set2dTransform) {
    canvas.getContext("2d")?.setTransform(
      ratio, 
      0, 
      0, 
      ratio, 
      0, 
      0
    );
  }
}
