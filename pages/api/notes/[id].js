import dbConnect from "../../../utils/dbConnect";
import Notes from "../../../models/Notes"
dbConnect();

export default async(req,res)=>{
    const{
          query:{id},
          method
    }=req;
    switch(method)
    {
        case 'GET':
            try
            {
                const note=await Notes.findById(id);
                if(!note)
                {
                    return res.status(400).json({success:false})
                }
                res.status(201).json({success:true,data:note})
            }
            catch(err)
            {
                return res.status(400).json({success:false})
            }
            break;
            case 'PUT':
                try
                {
                    const note=await Notes.findByIdAndUpdate(id,req.body,{new:true,runValidators:true});
                    if(!note)
                    {
                        return res.status(400).json({success:false})
                    }
                    res.status(201).json({success:true,data:note})
                }
                catch(err)
                {
                    return res.status(400).json({success:false})
                }
                break;
                case 'DELETE':
                try
                {
                    const note=await Notes.deleteOne({_id:id});
                    if(!note)
                    {
                        return res.status(400).json({success:false})
                    }
                    res.status(201).json({success:true,data:note})
                }
                catch(err)
                {
                    return res.status(400).json({success:false})
                }
                 break;
                 default:
                    return res.status(400).json({success:false})
    }
}