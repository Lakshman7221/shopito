const { default: mongoose } = require("mongoose")

const dbConnect = ()=>{
    try {
        const conn = mongoose.connect(process.env.MONGO_URL)
        console.log("DB is connected successfully...")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbConnect
