import { db } from "../config/db.js"
import { qUserData } from "../sql/queries.js"

export const userControllers=(req,res,next)=>{
    
    db.execute(qUserData,[req.userId],(err,result)=>{
        if (err) {
            throw err
        }
        res.json(result)
    })
} 