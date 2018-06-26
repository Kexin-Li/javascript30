# Regular Expression

- `/hello/`: 精确查找 Hello
- `/yes|no|maybe/`: 精确查找 yes 或者 no 或者 maybe
- `/hello/i`: 忽略大小写查找 Hello
- `/hello/g`: 多次匹配
- `/hello/gi`: 多次匹配并忽略大小写

``` javascript
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi;
let result = twinkleStar.match(starRegex);
```

- `/he./`: 使用通配符查 `.` 找以 he 开头的串
- `/b[aiu]/g`: 使用 character classes `[]` 来查找 bag 或者 big 或者 bug
- `/b[a-z0-9]/g`: 使用 hyphen character `-` 来查找字母 a-z 或者数字 0-9 范围内的所有可能
- `/^aeiou0-9/gi`: 使用 caret character `^` 来查找`不是`原因或者数字的所有可能
- `/a+/g`: 使用 `+` 来查找连续出现 `a` 的所有可能（至少出现一次）
- `/a*/`: 使用 `*` 来查找出现零次或者多次 `a` 的所有可能

``` javascript
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);
```

- `/t[a-z]*i/`: 泛匹配。匹配以 `t` 开头，`i` 结尾，中间有 a-z 的任意字母的所有可能
- `/caboose$/`: 查找以 `caboose` 结尾的串
- `/\w/`: 匹配所有的字母和数字
- `/\W/`: 匹配所有的非字母和数字
- `/\d/`: 匹配所有的数字
- `/\D/`: 匹配所有的非数字
- `/\s/`: 匹配空格
- `/\S/`: 匹配非空格
- `/a{3,5}/`: 匹配 `a` 出现 3 -5 次
- `/a{3,}/`: 匹配 `a` 至少出现 3 次
- `/a{3}/`: 匹配 `a` 出现 3 次
- `/colou?r`: 使用 `?` 匹配 `u` 出现或者不出现的情况

## `test()`

正则表达式调用 test 方法，参数是字符串。如果如果正则表达式成立则返回 true，否则返回 false。

``` javascript
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // 判断 myString 中是否包含 Hello
```

## `match()`

字符串调用 match 方法，参数是正则表达式，返回正则表达式匹配的值。

``` javascript
"Hello, World!".match(/Hello/); // Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // Returns ["expressions"]
```

## Restrict Possible Usernames

1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

2) Username letters can be lowercase and uppercase.

3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.

``` javascript
let username = "JackOfAllTrades";
let userCheck = /[a-zA-Z][a-zA-Z]+[0-9]*/;
let result = userCheck.test(username);
```

## Password Checker

A more practical use of `lookaheads`(`?=`) is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:

``` javascript
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```