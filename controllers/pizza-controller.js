const { Pizza } = require('../models');

const pizzaController = {
    //get all the pizzas GET /api/pizzas
    getAllPizza(req, res) {
        Pizza.find({})
            .then(dbPizzaData => res.json(dbPizzaData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get one pizza by id GET /api/pizzas/:id
    getPizzaById({ params }, res) {
        Pizza.findOne({ _id: params.id })
            .then(dbPizzaData => {
                //If no pizza is found, send 404
                if (!dbPizzaData) {
                    res.status(404).json({ message: 'No Pizza found with this id!'});
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // createPizza POST /api/pizzas
    createPizza({ body }, res) {
        Pizza.creeate(body)
            .then(dbPizzaData => res.json(dbPizzaData))
            .catch(err => res.status(400).json(err));
    },

    // update pizza by id PUT /api/pizzas/:id
    updatePizza({ params, body },  res) {
        Pizza.findOneAndUpdate({ _id: params.id }, body, { new: true })
            .then(dbPizzaData => {
                if (!dbPizzaData) {
                    res.status(404).json({ message: 'No pizza found with this id!' });
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.status(400).json(err));
    },

    // delete pizza DELETE /api/pizzas/:id
    deletePizza({ params }, res) {
        Pizza.findOneAndDelete({ _id: params.id })
            .then(dbPizzaData => {
                if (!dbPizzaData) {
                    res.status(404).json({message: 'No pizza found with this id!'});
                    return;
                }
                res.json(dbPizzaData);
            })
            .catch(err => res.status(400).json(err));
    }
};

module.exports = pizzaController;