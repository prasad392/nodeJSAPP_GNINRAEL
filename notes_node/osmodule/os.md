os => operating system

provides the oparating system related methods and properties.

    // import the os module

    => const os = require('os')
    console.log("version: ",os.version())
    console.log("Type",os.type())
    console.log("platform",os.platform())
    console.log("OS CPU architecture",os.arch())
    console.log("Total memory",os.totalmem())
    console.log("Free memory",os.freemem())
    console.log("cpus",os.cpus())
