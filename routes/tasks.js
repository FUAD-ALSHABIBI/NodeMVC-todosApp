const router = require('express').Router()
const TaskController = require('../controllers/tasks')

router.get('/',TaskController.index)

router.post('/create',TaskController.create)

router.get('/update/:id',TaskController.edit)

router.put('/update/:id',TaskController.update)

router.delete('/delete/:id',TaskController.delete)

module.exports = router