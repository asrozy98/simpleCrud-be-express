const model = require("../model");
const Customer = model.customer;

exports.create = (req, res) => {
  const customer = {
    nama: req.body.nama,
    alamat: req.body.alamat,
    kota: req.body.kota,
  };

  Customer.create(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    });
};

exports.findAll = (req, res) => {
  Customer.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Customer.",
      });
    });
};

exports.findByNo = (req, res) => {
  const no = req.params.no;

  Customer.findByPk(no)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).send({
        message: err.message || "Error retrieving Customer with no " + no,
      });
    });
};

exports.update = (req, res) => {
  const no = req.params.no;

  Customer.update(req.body, { where: { no: no } })
    .then((data) => {
      if (data[0] === 1) {
        res.send("Successfully updated Customer with no " + no);
      } else {
        res.send("Cannot update Customer with no " + no);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Customer with no " + no,
      });
    });
};

exports.delete = (req, res) => {
  const no = req.params.no;

  Customer.destroy({ where: { no: no } })
    .then((data) => {
      if (data === 1) {
        res.send("Successfully deleted Customer with no " + no);
      } else {
        res.send("Cannot delete Customer with no " + no);
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error deleting Customer with no " + no,
      });
    });
};
