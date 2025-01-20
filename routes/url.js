// importing requirements
const express = require("express");
const { CreateShortId, Reports, Redirect } = require("../controllers/url");
const router = express.Router();

// All API Routes

// route to generate short id
router.post("/", CreateShortId);

// route to get the analytics
router.get("/r/:Url_id", Reports);

// route to redirect to original url
router.get("/:Url_id", Redirect);

// exporting router
module.exports = router;
