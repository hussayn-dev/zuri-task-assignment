const Task = require('../models/task')

 exports.getTasks = async(req, res, next) => {
    try{
    const tasks = await Task.find()
    if(tasks.length == 0) return res.status(200).json({data : []})
    res.status(200).json({data : tasks})
    } catch(error) {
next({message :error.message, status : 500})
    }  
}
exports.createTask = async(req, res, next) => {
    try{
        const {title, description} = req.body
        if(!title || !description) next({message : "Input entry fields", status : 500})
    const task = new Task({title, description})
    await task.save()
    res.status(201).json({data : task, status : "Created Successfully"})
    } catch(error) {
next({message : error.message, status : 500})
    }
   
}
exports.editTask = async(req, res, next) => {
    try {
        const { id } = req.params
       const task = await Task.findOneAndUpdate(id, req.body, {
        new: true,
          runValidators: true,
        })
        if (!task)  next({message : "Task not found", status : 400})
        
      
        res.status(200).json({ data : task , status : "Updated successfully"})
    } catch (error) {
        next({message : error.message, status : 500})
    }
 
}
exports.deleteTask = async(req, res, next) => {
    try{
       const {id} = req.params
       const task = await Task.deleteById(id)
       if(!task) next({message : "Task not found", status : 400})
       res.status(200).json({data : task, status : "deleted successfully"})
    } catch(error) {
        next({message : error.message, status : 500})
    }  
}