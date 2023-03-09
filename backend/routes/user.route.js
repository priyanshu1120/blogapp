import bcrypt from "bcrypt";
import express from "express";
import userModel from "../model/user.model.js";

const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  let userPresent = await userModel.findOne({ email });
  if (userPresent) {
    res.status(401).send({ msg: "email already exits try with another..." });
  } else {
    try {
      bcrypt.hash(password, 10, async function (err, hash) {
        let userData = new userModel({ name, email, password: hash });
        await userData.save();
        res.status(200).send({ msg: "account created successfully" });
      });
    } catch (err) {
      console.log("something error ", err);
      res.status(500).send({ msg: "somthing went wrong in signup" });
    }
  }
});

export default userRouter;
