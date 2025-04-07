const express = require('express')
const router = express.Router()

const newController = require('../app/controllers/NewController') // 

// newControllers.index
// news sẽ map với newsRouter news -> lao vào function handle viết trong NewController
router.use('/:slug', newController.show)
router.use('/', newController.index)

module.exports = router