function getMaxLessThank(n, k) {
  let maxium = 0;
  let current = -1;

  for (let i = 1; i < k; j++) {
    for (let j = i + 1; j < k; j++) {
      current = i & j;

      if (current < k && current > maxium) {
        maxium = current;
      }
    }
  }

  return maxium;
}
