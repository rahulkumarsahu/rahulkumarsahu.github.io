export interface ActiveSimulatorAdapter {
  getIndex: () => number;
  getLength: () => number;
  isPlaying: () => boolean;
  first: () => void;
  previous: () => void;
  next: () => void;
  last: () => void;
  play: () => void;
  pause: () => void;
  reset: () => void;
  scrub: (index: number) => void;
}

export function connectActiveSimulatorControls(root: HTMLElement, adapter: ActiveSimulatorAdapter) {
  const action = (name: string) => root.querySelector<HTMLButtonElement>(`[data-sim-action="${name}"]`);
  const timeline = root.querySelector<HTMLInputElement>('[data-sim-timeline]');
  const speed = root.querySelector<HTMLSelectElement>('[data-sim-speed]');
  const position = root.querySelector<HTMLOutputElement>('[data-sim-position]');

  action('first')?.addEventListener('click', adapter.first);
  action('previous')?.addEventListener('click', adapter.previous);
  action('next')?.addEventListener('click', adapter.next);
  action('last')?.addEventListener('click', adapter.last);
  action('play')?.addEventListener('click', adapter.play);
  action('pause')?.addEventListener('click', adapter.pause);
  action('reset')?.addEventListener('click', adapter.reset);
  timeline?.addEventListener('input', () => adapter.scrub(Number(timeline.value)));

  root.addEventListener('keydown', (event) => {
    const target = event.target as HTMLElement;
    if (target.matches('input, select, textarea, button')) return;
    const key = event.key.toLowerCase();
    const shortcuts: Record<string, () => void> = {
      arrowleft: adapter.previous,
      arrowright: adapter.next,
      home: adapter.first,
      end: adapter.last,
      ' ': adapter.isPlaying() ? adapter.pause : adapter.play,
      r: adapter.reset,
    };
    const run = shortcuts[key];
    if (!run || event.metaKey || event.ctrlKey || event.altKey) return;
    event.preventDefault();
    run();
  });

  return {
    refresh() {
      const length = Math.max(1, adapter.getLength());
      const index = Math.min(Math.max(0, adapter.getIndex()), length - 1);
      if (timeline) {
        timeline.max = String(length - 1);
        timeline.value = String(index);
        timeline.setAttribute('aria-valuetext', `Step ${index} of ${length - 1}`);
      }
      if (position) position.textContent = `Step ${index} of ${length - 1}`;
      if (action('first')) action('first')!.disabled = index === 0;
      if (action('previous')) action('previous')!.disabled = index === 0;
      if (action('next')) action('next')!.disabled = index >= length - 1;
      if (action('last')) action('last')!.disabled = index >= length - 1;
      if (action('play')) action('play')!.disabled = adapter.isPlaying() || index >= length - 1;
      if (action('pause')) action('pause')!.disabled = !adapter.isPlaying();
    },
    delay(baseMilliseconds = 900) {
      const multiplier = Number(speed?.value || 1);
      const requested = baseMilliseconds / (Number.isFinite(multiplier) && multiplier > 0 ? multiplier : 1);
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? Math.max(1200, requested) : requested;
    },
  };
}
