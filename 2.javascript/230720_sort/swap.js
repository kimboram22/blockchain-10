function swap(arr, idx1, idx2) {
  //   const temp = arr[idx1];
  //   arr[idx1] = arr[idx2];
  //   arr[idx2] = temp;
  [arr[idx2], arr[idx1]] = [arr[idx1], arr[idx2]];
}

const arr = [8, 16, 88, 18, 343, 0, 100, 28, 90000, 0.5, 7, 13];

const testList = [
  { name: "gsb", time: 89374 },
  { name: "sort", time: 22 },
  { name: "bubble", time: 20237 },
  { name: "insert", time: 5696 },
  { name: "select", time: 4592 },
];

console.log(testList.sort((a, b) => a.time - b.time));
