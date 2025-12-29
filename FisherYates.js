function shuffleArray(arr) {
  const array = arr.slice(); // 避免修改原数组
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Example
const users = ['Alice', 'Bob', 'Charlie', 'David'];
console.log(shuffleArray(users));
