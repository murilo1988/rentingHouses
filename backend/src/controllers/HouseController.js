import House from "../models/House";

class houseController {
  async store(req, res) {
    const { filename } = req.file;
    const { description, price, location, status } = req.body;
    const { user_id } = req.headers;
    console.log(req.body);
    console.log(req.file);
    const house = await House.create({
      user: user_id,
      thumbnail: filename,
      description,
      price,
      location,
      status,
    });

    return res.json(house);
  }
}

export default new houseController();
