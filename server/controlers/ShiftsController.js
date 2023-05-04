const {Shifts} = require("../models/models");

class ShiftsController {
    async create(req, res){
        const {startDate,userid} = req.body
        const shift = await Shifts.create({startDate,userid})
        return res.json(shift)
    }
    /*Не работает. zapomni findallcountrow*/
    async getAll(req, res){
        const shift = await Shifts.findAll()
        return res.json(shift)
    }
    async delete(req, res) {
        const {id} = req.params
        const shift = await Shifts.destroy({
            where: {id}
        })
        if(shift) {
            return res.json("Shift was deleted")
        } else {
            return res.json("Shift not found")
        }
    }
}

module.exports =new ShiftsController()