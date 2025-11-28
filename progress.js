
const progressBar = require('progress');

const bar = new progressBar("downloading [:bar] :rate/bps :percent :etas",{
    total:10,
})

const timer = setInterval(()=>{
    bar.tick();
    if(bar.complete){
        clearInterval(timer)
    }
},1000)

const chalk = require('chalk')
console.log(chalk.green("hello"))