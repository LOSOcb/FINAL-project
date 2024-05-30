const mongoose = require ("mongoose")
const bcrypt = require ("bcryptjs")

 const userSchema  = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
 })

userSchema.static.findUsersByCredentials = function (email, password){
    return this.findOne({ email }).then((user) => {
        if (!user) {
            return Promise.reject(new Error("Неправильная почта или пароль"))
        }
        return bcrypt.compare(password,user.password).then((matched) => {
            if (!matched) {
                return Promise.reject(new Error("Неправильная почта или пароль"))
            }
            return user
        })
    })
}

 module.exports = mongoose.model("user",  userSchema   )