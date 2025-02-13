const mongoose = require("mongoose")


const connectDB = async () => {
    await mongoose.connect("mongodb+srv://vickygirase4073:9638262281%40V@namastenodejs.w75kh.mongodb.net/cinepulse")
}

module.exports = connectDB


