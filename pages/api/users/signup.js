import mongoose from "mongoose";
import { signup } from "@/controllers/userController";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

mongoose.connect("mongodb://localhost:27017/users").then((con) => {
  console.log("Database connection started");
});

export default function handler(req, res) {
  const { method } = req;
  if (method == "POST") {
         signup(req,res);
  } else {
    res.status(400).json({
      status: "fail",
      message: "This HTTP method is not yet supported",
    });
  }
}

exports.mongoose = mongoose;
