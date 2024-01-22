class SumController
{
    summa(req, res)
    {
        const {a, b} = req.body // прочитать про скобки в: {a,b}
        if(a==+a && b==+b)
        {
            const sum = +a+(+b)
            return res.json(sum)
        }
        else return res.json("Ошибка, введите числа!")
    }
}

module.exports = new SumController