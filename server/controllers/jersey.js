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
  getJersey: async (req, res) => {
    try {
      let jersey = await Jersey.findOne({
        where: {id: req.params.id},
        
      })
      res.status(200).send(jersey)
    }
    catch (err) {
      res.status(400).send(err)
    }
  }
};
