import dbConnect from "../../../utils/dbConnect";
import Notes from "../../../models/Notes"
dbConnect();

export default async(req,res)=>
{
    const{method}=req;
    switch(method)
    {
        case 'GET':
             try
            {
             const notes=await Notes.find({});
             res.status(201).json({success:true,data:notes})
            }
            catch(err)
            {
                res.status(201).json({succes:false})
            }
            break;
            case 'POST':
                try
            {
             const notes=await Notes.create(req.body);
             res.status(201).json({success:true,data:notes})
            }
            catch(err)
            {
                res.status(201).json({succes:false})
            }
            break;
            default:
                {
                    res.status(201).json({success:true,succes:false})
                    
                }
                break;
    }
}

