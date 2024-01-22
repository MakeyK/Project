class DuplicatesController
{
    duplicate(req, res)
    {
        const data = req.body
        const arr = data.arr
        const duplicate = Array.from(new Set(arr)) 
        return res.json(duplicate)
    }
}

module.exports=new DuplicatesController()