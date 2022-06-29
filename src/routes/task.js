const express = require('express')
const router = express.Router()
const {getTasks, createTask, editTask, deleteTask} = require('../controllers/task')

router.get('/', getTasks)
router.post('/create', createTask)
router.route('/:id').patch(editTask).delete(deleteTask)




module.exports = router