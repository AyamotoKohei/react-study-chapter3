const arr = [1, 2, 3, 4, 5];

console.log(arr.reduce((n, m) => n + m));
console.log(arr.sort((n, m) => n > m ? -1 : 1));

// sort が破壊的であることの検証
const arr2 = [4, 8, 2, 6];

console.log(arr2.sort((n, m) => n < m ? -1 : 1));
console.log(arr2);

// sort が破壊を阻止する
const lst = [5, 7, 1, 3];

console.log(lst.slice().sort((n, m) => n < m ? -1 : 1));
console.log(lst);
