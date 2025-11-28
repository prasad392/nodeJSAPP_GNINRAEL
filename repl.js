
const repl = require("repl");
const local = repl.start("$//$")

local.on('exit',()=>{
    console.log("Exiting from repl");
    process.exit(1);
})