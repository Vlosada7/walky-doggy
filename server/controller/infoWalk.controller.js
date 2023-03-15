const InfoWalk = require("../models/infoWalk");

const getWalk = async (req, res) => {
  console.log('getWalk')
  const id = req.params.id;
  try {
    const walk = await InfoWalk.find({_id: id});
    res.status(200);
    res.send(walk);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error to find walk');
  }
}

const getAllWalks = async (req, res) => {
  console.log('getAllWalks')
  try {
    const allWalks = await InfoWalk.find({});
    res.status(200);
    res.send(allWalks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error to find walks');
  }
}

const postWalk = async (req, res) => {
  console.log('postWalk')
  const walk = {
		name: req.body.name,
		date: req.body.date,
		venue: req.body.venue,
		records: {
			pee: null,
			poo: null,
		},
		image: null,
		coordinates: [41.395017,2.197883],
	};
  try {
    const newWalk = await InfoWalk.create(walk);
    res.status(201).json(newWalk);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error to create a new walk');
  }
}

const deleteWalk = async (req, res) => {
  console.log('deleteWalk')
  const id = req.params.id;

  try {
    const walk = await InfoWalk.findByIdAndDelete(id);
    if (!walk) {
      return res.status(404).send('Walk not found');
    }
    return res.status(200).send('Walk deleted successfully');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error deleting walk');
  }
}

const updateWalk = async (req, res) => {
  console.log('updateWalk')
  const id = req.params.id;
  const walk = {
    name: req.body.name,
		date: req.body.info,
		venue: req.body.venue,
		records: {
			pee: req.body.records.pee,
			poo: req.body.records.poo,
		},
		image: req.body.image,
		coordinates: req.body.coordinates,
  }

  try {
    const updateWalk = await InfoWalk.findByIdAndUpdate(id, walk, { new: true});
    if (!updateWalk) {
      return res.status(404).send('Walk not found');
    }
    return res.status(200).send(updateWalk);
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error updating walk');
  }

}


module.exports = { getWalk, getAllWalks, postWalk, deleteWalk, updateWalk};
