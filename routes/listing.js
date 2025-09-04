const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync =  require("../utils/wrapAsync.js");
const ExpressError =  require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");

const listingController = require("../controllers/listing.js");


router.route("/")     //  (1)
        .get(wrapAsync(listingController.index))  //Index route
        .post(isLoggedIn , validateListing ,wrapAsync(listingController.createListing)); // Create route


//New Route
router.get("/new", isLoggedIn ,listingController.renderNewForm);        
    
router.route("/:id")  //  (2)
        .get( wrapAsync(listingController.showListings)) //Show route
        .put(isLoggedIn,isOwner ,validateListing , wrapAsync(listingController.updateListing)) // update route
        .delete(isLoggedIn, isOwner ,wrapAsync(listingController.destroyListing));  // Delete route


//Edit route
router.get("/:id/edit",isLoggedIn,isOwner , wrapAsync(listingController.renderEditForm));

//(1) 
//Index route
// router.get("/",wrapAsync(listingController.index));
//Create route
// router.post("/",isLoggedIn , validateListing ,wrapAsync(listingController.createListing));

//(2)
//Show route
// router.get("/:id", wrapAsync(listingController.showListings));
//Update route
// router.put("/:id",isLoggedIn,isOwner ,validateListing , wrapAsync(listingController.updateListing)); 
//Delete route
// router.delete("/:id",isLoggedIn, isOwner ,wrapAsync(listingController.destroyListing));



module.exports = router;