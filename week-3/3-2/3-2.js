// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();

// app.use(express.json());

// const ALL_USERS = [
//   {
//     username: "rakshita@gmail.com",
//     password: "123",
//     name: "rakshita akasapu",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//     let userExists = false;
//     for(let i=0;i<ALL_USERS.length;i++){
//         if(ALL_USERS[i].username==username && ALL_USERS[i].password== password){
//             userExists=true;
//         }
//     }
//     return userExists;
// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   const decoded = jwt.verify(token, jwtPassword);
//   const username = decoded.username;
//   // return a list of users other than this username
//   res.json({
//     user:ALL_USERS
//   })
//   } 
// );

// app.listen(3000)



//---------------------------DATABASE----------------------------------------------------

const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(
  "mongodb+srv://akasapurakshita:rakshita@cluster0.pk3swvs.mongodb.net/three",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});


app.post("/signup",async function(req,res){
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;

  const existingUser = await User.findOne({email: username});
  if(existingUser){
    return res.status(400).send("Username already exists");
  }

  const user = new User({
    name: "rakshita",
    username: "raka",
    password: "123"
  })
 
  user.save();
  res.json({
    "msg": "User created successfully"
  })
})

app.listen(3000);


// function userExists(username, password) {
//     let userExists=false
//     for(let i=0;i<user.length;i++){
//       if(user[i].username==username && user[i].password==password){
//         userExists = true;
//       }
//     }
//     return userExists;
// }

// app.post("/signin", async function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, "shhhhh");
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username from the database
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.listen(3000);