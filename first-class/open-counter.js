// 参照透過的でなく挙動が予測不可能な関数
let count = 0;

const increment = () => {
  return count += 1;
};
