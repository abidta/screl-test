import { db } from "../config/db.js"
import { qAllData, qUserData } from "../sql/queries.js"

export const userControllers=(req,res,next)=>{
    
    db.execute(qUserData,[req.userId],(err,result)=>{
        if (err) {
            throw err
        }
        res.json(result)
    })
} 
export const getAllData=(req,res)=>{
    db.execute(qAllData,(err,result)=>{
        if (err) {
            throw err
        }
        res.json(result)
    })
}