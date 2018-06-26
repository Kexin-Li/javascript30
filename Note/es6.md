# ES 6

- Arrow Function
- Classes
- Modules
- Promises
- Generators
- `let` and `const`

## `var` and `let`

`var` 与 `let` 的最大区别是，`var` 能够重复声明变量而不报错，但 `let` 不可以。

``` javascript
var camper = 'James';
var camper = 'David';
console.log(camper); // logs 'David'

let camper = 'James';
let camper = 'David'; // throws an error
```

其次，作用域不同。`var` 声明的变量永远是全局的，但 `let` 声明的变量在某些情况下是只属于某个作用域块的。

``` javascript
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if(i === 2){
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // returns 3

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // returns 2
console.log(i); // returns "i is not defined"
```

## `const`

用 `const` 声明的数组或对象整个是不可变的，但依然可以改变数组或对象中的某一个值，这种情况叫突变。如下。

``` javascript
const arr = [2, 5, 7];
arr[2] = 45;

console.log(arr); // [2, 45, 7]
```

为了防止对象突变，可以使用 `Object.freeze()` 方法。

``` javascript
let obj = {
  name:"FreeCodeCamp"
  review:"Awesome"
};
Object.freeze(obj);

obj.review = "bad"; //will be ignored. Mutation not allowed
```

## `map()` and `filter()` and `reduce()`

给定一个数组，返回数组中整数的平方所组成的新数组。有两种方法，一种是用 `filter()` 和 `map()`，一种是用 `reduce()`。

法一：

``` javascript
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  let squaredIntegers = arr.filter((num) => num % 1 === 0);
  squaredIntegers = squaredIntegers.map((num) => num * num);
  return squaredIntegers;
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```

法二：

``` javascript
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  let squaredIntegers = arr.reduce((res, num) => {
    if (num % 1 === 0) res.push(num * num);
    return res;
  }, []);
};
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
```

## 解构赋值(Destructuring assignment)

``` javascript
const {length : len} = str;
```

去除数组的前两位元素，返回剩下的：

``` javascript
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```

``` javascript
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [,, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];
```

将对象参数的值传递给变量：

``` javascript
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
```

``` javascript
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}
```

``` javascript
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {
  return function half({max, min}) {
    return (max + min) / 2.0;
  };
})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
```

## template literal

``` javascript
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
  const resultDisplayArray = arr.map((one) => {
    return `<li class="text-warning">${one}</li>`;
  });

  return resultDisplayArray;
}

/**
 * makeList(result.failure) should return:
 * [ <li class="text-warning">no-var</li>,
 *   <li class="text-warning">var-on-top</li>, 
 *   <li class="text-warning">linebreak</li> ]
 **/
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray);
```

## `import` VS `export`

- `import` 和 `require` 的区别是，`require` 通常引入一整个文件，哪怕我们只需要用到其中的一个函数而已，也必须引入一整个文件；而 `import` 能够按需引入。
- `export` and `import` is a non-broswer feature.
- `import * from "./math_functions"`: 使用 `*` 来引入整个文件。
- `export default` 用于整个文件只需导出一个值的情况。