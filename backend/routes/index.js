const express = require('express')

const router = express.Router({ mergeParams: true })

router.use('/', require('./auth'))
router.use('/product', require('/product'))
// router.use('/users', require('./user'))

module.exports = router