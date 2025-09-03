const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync =  require("../utils/wrapAsync.js");
const ExpressError =  require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listing.js");

//Index route
router.get("/",wrapAsync(listingController.index));

//New Route

router.get("/new", isLoggedIn ,listingController.renderNewForm)

//Show route
router.get("/:id", wrapAsync(listingController.showListings));

//Create route

router.post("/",isLoggedIn , validateListing ,wrapAsync(listingController.createListing));

//Edit route
router.get("/:id/edit",isLoggedIn,isOwner , wrapAsync(listingController.renderEditForm));

//Update route
router.put("/:id",isLoggedIn,isOwner ,validateListing , wrapAsync(listingController.updateListing)); 

//Delete route
router.delete("/:id",isLoggedIn, isOwner ,wrapAsync(listingController.destroyListing));

module.exports = router;