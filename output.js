// this is for the format specifier.

// %s => for string
// %d => for number.
// %i => for integer
// %o => for object

// console.log('I am %s my age is %d','prasad',22)

// C:\Users\DELL\OneDrive\Desktop\node_app>node arguments.js --name=prasad --age=22
// 22
// prasad

// console.log("hello")
// console.clear()
// console.log("hello wolrds")

// hello wolrds

// C:\Users\DELL\OneDrive\Desktop\node_app>

// console.clear()
// console.count("hello")
// console.count("hello")
// console.count("ram")

// hello: 1
// hello: 2
// ram: 1

// C:\Users\DELL\OneDrive\Desktop\node_app>

const fun1 =()=> console.log(`sum of 10 and 20 is ${10+20}`);
const fun2 =()=> console.log(`multiple of 10 and 20 is ${10*20}`);

const measureTime =()=>{
    console.time('fun2()')
    fun2()
    console.timeEnd('fun2()')
    console.time("fun1()")
    fun1()
    console.timeEnd("fun1()")
}
measureTime()

// C:\Users\DELL\OneDrive\Desktop\node_app>node output.js
// multiple of 10 and 20 is 200
// fun2(): 7.221ms
// sum of 10 and 20 is 30
// fun1(): 0.11ms