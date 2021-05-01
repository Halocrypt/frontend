export const raf = window.requestAnimationFrame
  ? function (cb: FrameRequestCallback) {
      requestAnimationFrame(cb);
    }
  : setTimeout;
