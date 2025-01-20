// importing requirements
const { nanoid } = require("nanoid");
const URL = require("../models/url");

// function to generate shortIds of Url
async function CreateShortId(req, res) {
  const body = req.body;
  if (!body.url) return res.json({ error: "url is required" });
  const shortID = nanoid(8);

  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.redirect("/");
}

// function to show analytics
async function Reports(req, res) {
  const id = req.params.Url_id;

  const data = await URL.findOne({ shortId: `${id}` });

  return res.json({
    Clicks: data.visitHistory.length,
    Analytics: data.visitHistory,
  });
}

// function to update clicks and redirect to original url using short url
async function Redirect(req, res) {
  const id = req.params.Url_id;

  const data = await URL.findOneAndUpdate(
    { shortId: `${id}` },
    {
      $push: { visitHistory: { timeStamp: Date.now() } },
    }
  );

  return res.redirect(data.redirectURL);
}

// exporting functions
module.exports = {
  CreateShortId,
  Reports,
  Redirect,
};
