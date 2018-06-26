# Basic Algorithm Scripting

## reverse a string

Reverse a String With Built-In Functions:

``` javascript
let builtIn = function(str) {
  return str.split("").reverse().join("");
}

console.log(builtIn("Hello"));
```

Reverse a String With a Decrementing For Loop:

``` javascript
let forLoop = function(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(forLoop("Hello"));
```

## Factorialize a Number

recursion:

``` javascript
function factorialize(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorialize(num - 1);
}
```

## Title Case a Sentence

Title Case a Sentence With a For Loop:

``` javascript
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
```

Title Case a Sentence With a map() Method:

``` javascript

```