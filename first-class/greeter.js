const greeter = (target) => {
  const sayHello = () => {
    console.log(`Hi, ${target}!`);
  };

  // () を記述するとその場で関数を続行して、その結果の undefined を返してしまう
  return sayHello;
};

const greet = greeter('Step Jun');
greet();

// 上記のコードは以下のように書き直せる
const greeter2 = (target) => {
  return () => {
    console.log(`Hi, ${target}!`);
  };
}

const greet2 = greeter2("Step Jun");
greet2();

// return文は省略できるので
const greeter3 = (target) => () => console.log(`Hi, ${target}!`);

const greet3 = greeter3("Step Jun");
greet3();
