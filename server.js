import express, { json } from 'express';
import User from "./models/User.js";
// import OrderWorker from './models/orders/workers.js';
 import Reviews from './models/orders/review.js';
// import servicesModel from '.models/services.js';
import mongoose from "mongoose";
const app = new express();
app.use(express.json());


function connectToDatabase() {
    mongoose.connect("mongodb+srv://janvi:janvi2002@cluster0.kgysrnq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
      .then(() => {
        console.log("db connected");
      })
      .catch((err) => {
        console.error("Error connecting to database:", err);
       // console.log("Retrying connection in 5 seconds...");
       // setTimeout(connectToDatabase, 5000); // Retry connection after 5 seconds
      });
  }




  // Start connecting to the database
  connectToDatabase();
  


app.post("/orders/review",async (req, res) => {
    const {uid,workId,clientUid,name,review,rating,price} = req.body;
    try{

     
      
      const user = new Reviews({
       uid:uid,
       workId:workId,
       clientUid:clientUid,
       name:name,
       review:review,
       rating:rating,
       price:price
      })
      
      const created = await user.save();
      
      console.log(created);
      res.send(created);
    }catch(err){
        console.log(err);
    }




    
})



// app.get("/user",async (req, res) => {

//     const user = await User.find().select("-email");
//     console.log(user);

//     res.send(user);

// });

// async function updatePrice(req, res, next) {
//     OrderWorker.findOneAndUpdate(
//       { _id: req.body.workId },
//       {
//         $set: {
//           amount: req.body.price,
//         },
//       }
//     )
//       .then((res) => {
//         next();
//       })
//       .catch((error) => {
//         res.status(500).send(error);
//       });
//   }
  
// app.post(`/set-review-worker`, updatePrice, async (req, res) => {
//     const reviewModel = new Reviews(req.body);
//     try {
//       reviewModel.save();
//       res.send(reviewModel);
//     } catch (error) {
//       res.status(500).send(error);
//     }
//   });

//   app.get("/get-review-score-from-service", async (req, res) => {
//     servicesModel
//       .findOne({ uid: req.query.uid })
//       .then((resp) => {
//         res.send(resp);
//       })
//       .catch((err) => {
//         console.log("rs" + err);
//       });
//   });
app.listen(8000, ()=>{
    connectToDatabase();
    
    console.log("server starting");
})


