const mongo = require("../database");

const walletSchema = new mongo.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    balance:{
        type: Number,
        default: 0
    },
    transactions:{
        type: Array,
        require: false,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    createdBy:{
        type: String,
        require: true
    }
})

const Wallet = mongo.model('Wallet', walletSchema)

module.exports = Wallet;