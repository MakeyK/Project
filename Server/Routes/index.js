const Router = require('express')
const router = new Router()
const routes = require('./Routers')

router.use('/rout', routes)

module.exports = router