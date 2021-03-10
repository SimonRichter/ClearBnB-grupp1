global.mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");


app.use(express.json());

app.use(express.static(path.join(__dirname, './www')));

const atlasURL = 'mongodb+srv://clearBnB:grupp1java20@cluster-clearbnb.tl726.mongodb.net/ClearBnB?retryWrites=true&w=majority';

global.mongoose.connect(atlasURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const models = require('./models.js');

app.get("/rest/:model", async (req, res) => {
  let model = models[req.params.model]
  let doc = await model.find()
  res.json(doc)
})

app.get("/rest/:model/:id", async (req, res) => {
  let model = models[req.params.model]
  let doc = await model.findById(req.params.id).populate(['residenceId', 'userId', 'featuresId']).exec();
  res.json(doc);
})

app.post("/rest/:model", async (req, res) => {
  let model = models[req.params.model]
  let doc = new model(req.body);
  doc.save().then(res.json(doc))
})

app.delete('/rest/:model/:id', async (req, res) => {
  let model = models[req.params.model];
  let doc = await model.findByIdAndDelete(req.params.id);
  res.json(doc);
});

app.put('/rest/residences/:id', async (req, res) => {
  let model = models['residences']

  let residence = await model.findById(req.params.id)

  if (req.body.bookedDays) {
    
    if (residence.bookedDays === null) {
      residence.bookedDays = [...req.body.bookedDays];
    }
    else {
      residence.bookedDays = [...residence.bookedDays, ...req.body.bookedDays];
    }
    delete req.body.bookedDays
  }

  Object.assign(residence, req.body)
  await residence.save()

  res.json(residence)
})


app.listen(3001, () => console.log("server started on port 3001"));