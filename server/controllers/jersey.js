const { Jersey } = require("../util/models");

module.exports = {
  getAllJerseys: async (req, res) => {
    try {
      let cars = await Jersey.findAll({});
      res.status(200).send(cars);
    } catch (err) {
      res.status(400).send(err);
    }
  },
};
