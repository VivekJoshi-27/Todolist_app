const { find, findOneAndDelete } = require("../Models/Category");
const categoryModel = require("../Models/Category")



exports.AddCategory = async (req, res) => {
    try{
        const exp = await new categoryModel(req.body).save();
         res.json(exp);
        }catch(err){
            res.json({err});
  
        }
  }
  
  exports.getAllCategory = async (req, res) => {
    try{
        const exp = await  categoryModel.find();
         res.json(exp);
        }catch(err){
            res.json({err});
  
        }
  }
  
  exports.getCategory = async (req, res) => {
  try{
      const exp = await  categoryModel.find({_id:req.params.userId});
       res.json(exp);
      }catch(err){
          res.json({err});
  
      }
  }
  
  exports.delCategory = (req, res) => {
  
    categoryModel.findOneAndDelete({_id:req.params.userId} , (err , data) => {
              if(err){
                res.json({err});
              }else{
                res.json(data);
              }
        })
        
  }
  
  exports.updateCategory = (req, res) => {
  
    categoryModel.findOneAndUpdate({_id:req.params.userId},req.body,{new:true} , (err , data) => {
          if(err){
            res.json({err});
          }else{
            res.json(data);
          }
    })
    
  }