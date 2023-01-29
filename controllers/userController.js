import User from "../db/models/users.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
};

export const signup = async (req, res) => {
  // const { email, password } = req.body;
  const { email, password } = {
    email: "abc@gmail.com",
    password: "123456",
  };
  const user = new User({
    email,
    password,
  });
  user
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(404).send({
        message: "Error signing up",
      });
    });
};

export const changePassword = async (req, res) => {
  const { email, password } = req.body;
  //search for user in db and update password
};

export const resetPassword = async (req, res) => {
  const { email, password } = req.body;
  //search for user in db send email to user with reset link
};

export const getAllUsers = async (_req, res) => {
  User.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(404).send({
        message: "Error getting all users",
      });
    });
};
