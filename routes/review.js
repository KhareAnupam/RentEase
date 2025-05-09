const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync =  require("../utils/wrapAsync.js");
const ExpressError =  require("../utils/ExpressError.js");
const Review = require("../models/review");
const Listing = require("../models/listing");   //because we also adds and delete reviews from Listings
const {validateReview } = require("../middleware.js");


//Reviews
//
//Post Review Route

router.post("/", validateReview , wrapAsync(async(req,res)=>{
    let listing =  await Listing.findById(req.params.id)
    let newReview = new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "New Review Created");
    res.redirect(`/listings/${req.params.id}`);  // or listing._id ---> same thing
}));

//Delete Review Route
router.delete("/:reviewId", wrapAsync(async (req,res)=>{
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted");
    res.redirect(`/listings/${id}`);
}));

module.exports = router;