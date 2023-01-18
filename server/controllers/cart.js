const { Jersey, User, CartItem } = require("../util/models");

module.exports = {
    addToCart: async (req, res) => {
        try {
         await CartItem.create(req.body)
            
            // const { userId } = User.id
            // const jerseyId = Jersey.id
            // await CartItem.create({
            //     userId,
            //     productId
            // })
            res.Status(200)
            console.log(res.data)

        }
        catch (err){
            res.sendStatus(400)
            console.error(err)
        }
    }
}
