
(window as any).global = window;
if (typeof globalThis !== 'undefined') {
  (globalThis as any).global = globalThis;
}
