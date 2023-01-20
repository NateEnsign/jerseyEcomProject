const { Jersey, User, CartItem } = require("../util/models");

module.exports = {
  addToCart: async (req, res) => {
    try {
      await CartItem.create(req.body);
      return res.sendStatus(200);
      console.log(res.data);
    } catch (err) {
      return res.sendStatus(400);
      console.error(err);
    }
  },
  removeFromCart: async (req, res) => {
    try {
      const { cartItemId } = req.params;
      await CartItem.destroy({ where: { id: cartItemId } });
      return res.sendStatus(200);
    } catch {
      console.log(err);
      return res.sendStatus(400); 
    }
  },

  getCart: async (req, res) => {
    try {
      const { userId } = req.params;
      const cart = await CartItem.findAll({
        where: { userId: userId },
        include: [
          {
            model: User,
            attributes: ["email"],
            required: true,
          },
          {
            model: Jersey,
            required: true,
            attributes: ["photo", "name", "price"],
          },
        ],
      });

      return res.status(200).send(cart);
    } catch (err) {
      console.error(err);
      console.log("Could not retrieve cart");
      return res.sendStatus(400);
    }
  },
};
