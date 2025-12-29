function weightedRandom(items) {
  const totalWeight = items.reduce((sum, item) => sum + item.weight, 0);
  let random = Math.random() * totalWeight;

  for (const item of items) {
    if (random < item.weight) {
      return item.value;
    }
    random -= item.weight;
  }
}

// Example
const rewards = [
  { value: 'Common', weight: 70 },
  { value: 'Rare', weight: 25 },
  { value: 'Legendary', weight: 5 }
];

console.log(weightedRandom(rewards));
