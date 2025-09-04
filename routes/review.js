const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync =  require("../utils/wrapAsync.js");
const ExpressError =  require("../utils/ExpressError.js");
const Review = require("../models/review");
const Listing = require("../models/listing");   //because we also adds and delete reviews from Listings
const {validateReview } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");
//Reviews
//
//Post Review Route

router.post("/", validateReview , wrapAsync(reviewController.createReview));

//Delete Review Route
router.delete("/:reviewId", wrapAsync(reviewController.destroyReview));

module.exports = router;