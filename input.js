
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

// rl.question("what the name? ",(name)=>{
//     console.log(`hello ${name}`);
//     rl.close()
// })

// C:\Users\DELL\OneDrive\Desktop\node_app>node input.js
// what the name? prasad
// hello prasad

// rl.question("what the 10+20? ",(num)=>{
//     if(num == 30){
//         console.log(`${num} is right answer`)
//     }
//     else{
//         console.log(`${num} is wrong answer`)
//     }
//     rl.close()
// })

// C:\Users\DELL\OneDrive\Desktop\node_app>node input.js
// what the 10+20? 20
// 20 is wrong answer

// C:\Users\DELL\OneDrive\Desktop\node_app>node input.js
// what the 10+20? 30
// 30is right answer

const promptt = require('prompt-sync')()
const name = promptt("what the name?")
console.log(`hello ${name}`)