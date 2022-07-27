const { find, findOneAndDelete } = require("../Models/Todoapp");
const userModel = require("../Models/Todoapp")



// -------- todolist ------------- //

exports.AddTodolist = async (req, res) => {
    try{
        const exp = await new userModel(req.body).save();
         res.json(exp);
        }catch(err){
            res.json({err});

        }
}

exports.getAllTodolist = async (req, res) => {
    try{
        const exp = await  userModel.find();
         res.json(exp);
        }catch(err){
            res.json({err});

        }
}

exports.getTodolist = async (req, res) => {
  try{
      const exp = await  userModel.find({_id:req.params.userId});
       res.json(exp);
      }catch(err){
          res.json({err});

      }
}

exports.delTodolist = (req, res) => {

        userModel.findOneAndDelete({_id:req.params.userId} , (err , data) => {
              if(err){
                res.json({err});
              }else{
                res.json(data);
              }
        })
        
}

exports.updateTodolist = (req, res) => {

    userModel.findOneAndUpdate({_id:req.params.userId},req.body,{new:true} , (err , data) => {
          if(err){
            res.json({err});
          }else{
            res.json(data);
          }
    })
    
}

