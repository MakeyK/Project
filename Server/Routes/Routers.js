const Router = require('express')
const router = new Router()
const FiveController = require('../Controllers/FiveController')
const FourController = require('../Controllers/FourController')
const FreeController = require('../Controllers/FreeController')
const OneController = require('../Controllers/OneController')
const TwoController = require('../Controllers/TwoController')

router.get('/sum', OneController.summa)
router.get('/reverse', TwoController.reverse_case)
router.post('/obj', FreeController.obj_to_array)
router.post('/arr', FourController.reverse_array)
router.post('/dubl', FiveController.duplicate)

module.exports = router