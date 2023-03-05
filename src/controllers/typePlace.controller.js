const TypePlace = require("../Database/typePlace.model");

exports.createTypePlace = (req, res) => {
  const newTypePlace = new TypePlace({
    name: req.body.name,
  });
  newTypePlace
    .save()
    .then((typePlace) => res.send(typePlace))
    .catch((err) => res.status(400).send(err));
};

exports.getTyplaceuid = (req, res) => {
  console.log(req.body, "here")
  TypePlace.findOne({ name: req.body.name })
    .then((placetype) => res.send(placetype))
    .catch((error) => res.status(400).send(error));
};

exports.getTypesPlace = (req, res) => {
  TypePlace.find()
    .then((typePlace) => {
      res.send(typePlace);
    })
    .catch((err) => res.status(400).send(err));
};
