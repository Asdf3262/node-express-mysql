const db = require("../models");
const Customer = db.customers;

// Create and Save a new customer
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name || !req.body.id || !req.body.contact) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a customer
    const customer = {
        id: req.body.id,
        name: req.body.name,
        contact: req.body.contact
    };

    // Save customer in the database
    Customer.create(customer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occurred while creating the Customer."
            });
        });
};

// Retrieve a Customer by id
exports.findCustomers = (req, res) => {
    const id = req.query.id;
    if (!id) {
        Customer.findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "An error occurred while retrieving Customers."
                });
            });
    }
    else {
        Customer.findByPk(id)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving Customer with id=" + id
                });
            });
    }
};

// Retrieve Customer/Customers with name
exports.findCustomerByName = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: `${name}` } : null;

    if (!name) {
        res.json({ message: "No customer name passed in the query." });
    }
    else {
        Customer.findAll({ where: condition })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "An error occurred while retrieving Customers."
                });
            });
    }
};

// Update a Customer by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Customer.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Customer with id=${id}. Maybe Customer was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Customer with id=" + id
            });
        });
};

// Delete a Customer with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Customer.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Customer was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Customer with id=" + id
            });
        });
};