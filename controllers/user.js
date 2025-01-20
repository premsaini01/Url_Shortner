const User = require("../models/user");

async function handleSignUp(req, res) {
  const { userName, email, password } = req.body;

  await User.create({
    userName: userName,
    email: email,
    password: password,
  });

  return res.render("login");
}

async function handleLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email, password: password });

  if (!user) return res.render("login", { error: "invalid email or password" });

  return res.redirect("/");
}

module.exports = { handleSignUp, handleLogin };
