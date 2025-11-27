
path => provides utilities for working with file and dir paths.

const path = require('path')
console.log(path.dirname(__filename))   // C:\Users\DELL\OneDrive\Desktop\node_app
console.log(path.basename(__filename))  // server.js
console.log(path.extname(__filename))   // .js

const str1 = '/main/img'
const str2 = '/main/img2'
console.log(path.join(str1,str2)) // \main\img\main\img2

console.log(path.isAbsolute('/Users/DELL/OneDrive/Desktop/node_app')) // true
console.log(path.isAbsolute('Users/DELL/OneDrive/Desktop/node_app'))  // false

