const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan');

const app = express();


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(morgan('dev'));


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const db = require("./app/models");
const userController = require('./app/controllers/user.controller');
const documentController = require('./app/controllers/document.controller')
const sectionController = require('./app/controllers/section.controller');
const entryController = require('./app/controllers/entry.controller');

const run = async () => {
  const user1 = await userController.createUser({
    email: "email@email.com",
    password: "12345",
    name: "user1"
  });

  const document1 = await documentController.createDocument({
    title: "Sample Document",
    description: "This is a really great document!",
    hero_image: "https://picsum.photos/2400/1200",
    background_color: "#ccc",
    userId: 1
  });

  const section1 = await sectionController.createSection({
    name: "Horror",
    documentId: 1
  });

  const entry1 = await entryController.createEntry({
    title: "TEST Dracula",
    description: "At Purfleet, on a by-road, I came across just such a place as seemed to be required, and where was displayed a dilapidated notice that the place was for sale. It is surrounded by a high wall, of ancient structure, built of heavy stones, and has not been repaired for a large number of years. The closed gates are of heavy old oak and iron, all eaten with rust.",
    author: "TEST Bram Stoker",
    rating: 4.5,
    cover_image: "https://picsum.photos/400/600",
    sectionId: 1
  });
};

db.sequelize.sync({ force: true }).then(() => {
  console.log("Re-sync DB");
  run();
});

// initial route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to pdf maker." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});