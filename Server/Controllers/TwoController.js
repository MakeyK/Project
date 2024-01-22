class revarse_caseController
{
    reverse_case(req,res)
    {
        const data = req.body
        let reverse_text = ""
        for(let i=0; i<data.text.length; i++)
    {
        if(data.text[i]==data.text[i].toUpperCase()) reverse_text+=data.text[i].toLowerCase()
        else reverse_text+=data.text[i].toUpperCase()
    }
    return res.json(reverse_text)
}
}

module.exports = new revarse_caseController()
