
// process.argv.map((val,index)=>{
//     console.log(`${index}: ${val}`)
// })

// C:\Users\DELL\OneDrive\Desktop\node_app>node arguments.js name=prasad age=20
// 0: C:\nvm4w\nodejs\node.exe
// 1: C:\Users\DELL\OneDrive\Desktop\node_app\arguments.js
// 2: name=prasad
// 3: age=20


// const minimist = require('minimist')
// const argvNew = minimist(process.argv.slice(2))
// console.log(argvNew.name)

// C:\Users\DELL\OneDrive\Desktop\node_app>node arguments.js --name=prasad
// prasad

const minimist = require('minimist')
const argNew = minimist(process.argv.slice(2))
console.log(argNew.age)
console.log(argNew.name)

// C:\Users\DELL\OneDrive\Desktop\node_app>node arguments.js --name=prasad --age=22
// 22
// prasad