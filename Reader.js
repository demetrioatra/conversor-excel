const fs = require("fs")

class Reader{
    read(path) {
        fs.readFile(path, "utf-8", (err, data) => {
            if (err) console.log(err)
            else console.log(data)
        })
    }
}

module.exports = Reader