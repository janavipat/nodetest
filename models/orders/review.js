import mongoose from'mongoose';


const conn = mongoose.createConnection("mongodb+srv://janvi:janvi2002@cluster0.kgysrnq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" + "orders");

const WorkerReview = new mongoose.Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    workId:{
      type: String,
      required: false,
    },
    clientUid:{
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required: true,
    }
  },
  {
    collection: "review",
  }
);

const Reviews =  conn.model("WorkerReview", WorkerReview);

export default Reviews;
