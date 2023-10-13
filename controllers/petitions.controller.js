const { handleError } = require("../util");
const petitionModel = require("../models/pettition.model");
const visitorModel = require("../models/visitors.model");

const createPetition = async (req, res) => {
  try {
    // console.log(req.body);
    const form = new petitionModel(req.body);
    const petition = await form.save(req.body);
    res.send({
      success: true,
      message: "Petition Created Successfully",
      petition,
    });
  } catch (err) {
    handleError(err, res);
  }
};

const getAllPetitions = async (req, res) => {
  try {
    const petitons = await petitionModel.find();

    res.send({
      petitons,
    });
  } catch (err) {
    handleError(err, res);
  }
};

const getPetitionById = async (req, res) => {
  try {
    const petitionId = req.params.petitionId;
    const petitions = await petitionModel.findById(petitionId);
    res.send({ petitions, success: true });
  } catch (err) {
    handleError(err, res);
  }
};

const upvotePetition = async (req, res) => {
  try {
    // const petitionId = req.params.petitionId;
    // const oldPetition = await petitionModel.findById(petitionId);
    // const petition = await petitionModel.findByIdAndUpdate(petitionId, {
    //   upvoteCount: oldPetition.upvoteCount + 1,
    // });
    const form = new visitorModel(req.body);
    await form.save();
    res.send({ petition, message: "Vote Registered", success: true });
  } catch (err) {
    handleError(err, res);
  }
};

module.exports = {
  createPetition,
  getAllPetitions,
  getPetitionById,
  upvotePetition,
};
