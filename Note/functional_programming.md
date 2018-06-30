# Functional Programming

Recall that in functional programming, changing or altering things is called `mutation`, and the outcome is called a `side effect`. A function, ideally, should be a `pure function`, meaning that it does not cause any side effects.

Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument.

## Principles

- Don't alter a variable or object - create new variables and objects and return them if need be from a function.

- Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

## Implement the map Method on a Prototype

``` javascript
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  var newArray = [];
  
  this.forEach(function(item, index, arr) {
    newArray.push(callback(item, index, arr));
  });

  return newArray;
};

var new_s = s.myMap(function(item){
  return item * 2;
});
```

## Implement the filter Method on a Prototype

``` javascript
Array.prototype.myFilter = function(callback){
  var newArray = [];
  
  this.forEach(function(item, index, arr) {
    if (callback(item, index, arr)) {
      newArray.push(item);
    }
  });
  return newArray;
};
```

## slice() VS splice()

splice() 会更改原数组结构，slice() 函数不会。

push() 会更改原数组结构，concat() 不会。

sort() 会更改原数组结构