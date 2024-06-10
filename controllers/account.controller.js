const asyncHandler = require("express-async-handler")
const Account = require("../models/Account")

exports.credit = asyncHandler(async (req, res) => {
    await Account.create({ ...req.body, type: "credit" })
    res.json({ message: "account credit success" })
})
exports.debit = asyncHandler(async (req, res) => {
    await Account.create({ ...req.body, type: "debit" })
    res.json({ message: "account debit success" })

})