function delay(ms: number) {
  const target = performance.now() + ms;
  while (performance.now() < target) {
    /* empty */
  }
}

export { delay };
