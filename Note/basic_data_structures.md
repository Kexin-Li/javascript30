# Basic Data Structures

## Array

- `Array.push()`: 添加元素到数组尾部
- `Array.pop()`: 移除数组尾部的元素
- `Array.unshift()`: 添加元素到数组首部
- `Array.shift()`: 移除数组首部的元素
- `Array.splice(2, 2, 5, 5)`: 第一个参数是需要移除的起始 index，第二个参数是连续移除的几个元素，第三个参数是替换移除的元素的值。
- `Array.slice(0, 4)`: 提取数组中 index 从 0 到 3 的部分，包含 index 0 不包含 index 3。
- use `...`(spread operator) to copy array.

``` javascript
let thisArray = ['a', 'b', 'c'];
let thatArray = [...thisArray];

console.log(thatArray); // ['a', 'b', 'c']
```

- use `...`(spread operator) to combine arrays.

``` javascript
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];
let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];

console.log(tharArray); // ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander']
```

## Object

- using `delete` keyword to remove object's properties.
- `for...in`: through the keys of an object.
- use bracket notation to obtain property of an object.

``` javascript
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  }
}

// get Alan's online property
let res = users['Alan']['online'];
console.log(res);
```

- `Object.keys(obj)`: 输出一个 obj 对象包含的所有键组成的数组。