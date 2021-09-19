const mongoose=require('mongoose')
const NoteSchema=new mongoose.Schema({
   title: {
        type:String, 
        required:true  
    },
    description:
    {
       type:String
    }
})

module.exports=mongoose.models.Notes||mongoose.model('Notes',NoteSchema);