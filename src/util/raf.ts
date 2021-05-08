export const raf = window.requestAnimationFrame
  ? function (cb: FrameRequestCallback) {
      requestAnimationFrame(() => requestAnimationFrame(cb));
    }
  : setTimeout;
