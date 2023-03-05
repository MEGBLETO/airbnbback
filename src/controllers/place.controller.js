const User = require("../Database/user.models");
const bcrypt = require("bcrypt");
const { findOne } = require("../Database/user.models");
const jwt = require("jsonwebtoken");
const Place = require("../Database/place.models");

exports.createPlace = async (req, res) => {
  try {
    Place.create(req.body).then((place) => {
      res.send(place);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.getPlaces = async (req, res) => {
  try {
    const description = req.query.description
    const sort = "asc"
    const  searchBy = req.query.searchBy //capacity
    const  min = parseInt(req.query.min)
    const  max =  parseInt(req.query.max)

    console.log(sort, searchBy, min, max, description)
    

     let places = await Place.find().populate("owner");

    if (searchBy === "price") {
      places = places.filter(
        (place) => place.price.pricePerDAy >= min && place.price.pricePerDAy <= max
      );
    } else if (searchBy === "capacity") {
      places = places.filter(
        (place) => place.capacity >= min && place.capacity <= max
      );
    }
    else if(description != null || description != undefined){
       places =  places.filter(place =>  place.description.toLowerCase().includes(description.toLowerCase()));
    }
    res.status(200).send(places);
  } catch (error) {
    console.log(error);
  }
};

exports.getMyPlace = async (req, res) => {
  try {
    console.log(req.params.uid);
    let places = await Place.find({ owner: req.params.uid });
    res.status(200).send(places);
  } catch (error) {
    console.log(error);
  }
};

exports.getPlaceById = async (req, res) => {
  try {
    const Place_id = req.params.id;
    const place = await Place.find({ _id: Place_id });
    res.status(200).send(place);
  } catch (error) {
    console.log(error);
    throw error;
  }
};


exports.updatePlaceDetails = async (req, res) =>{
  try {

    console.log(req.body, req.params.id)
      Place.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
      (result) => {
        res.send(result);
      }
    );
  } catch (error) {
    console.log(error)
    throw error
  }
}
