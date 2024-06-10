const router = require("express").Router()
const accountContoller = require("./../controllers/account.controller")
router
    .post("/credit", accountContoller.credit)
    .post("/debit", accountContoller.debit)

module.exports = router