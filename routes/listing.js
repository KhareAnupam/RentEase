const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const wrapAsync =  require("../utils/wrapAsync.js");
const ExpressError =  require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js")

const validateListing = (req,res,next)=>{
    let {error} = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=> el.message).join(",");
        throw new ExpressError(400,errMsg);
    }else{
        next();
    }
}

//Index route
router.get("/",wrapAsync(async(req,res)=>{
    const allListings = await Listing.find({});
    res.render("listings/index.ejs",{allListings});
}));

//New Route

router.get("/new", (req,res) =>{
    res.render("listings/new.ejs");
})

//Show route
router.get("/:id", wrapAsync(async (req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("error", "Listing you requested for does not exist");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing});
}));

//Create route

router.post("/", validateListing ,wrapAsync(async (req,res,next) =>{
    
    let listing = req.body.listing;
    const newListing  = new Listing(listing);
    await newListing.save();
    req.flash("success", "New Listing Created");
    res.redirect("/listings");
}));

//Edit route
router.get("/:id/edit", wrapAsync(async(req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for does not exist");
        res.redirect("/listings");
    }
    req.flash("success", "Listing Edited successfully");
    res.render("listings/edit.ejs",{listing})
}));

//Update route
router.put("/:id",validateListing , wrapAsync(async (req,res)=>{
    
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    req.flash("success", "Listing Updated");
    res.redirect(`/listings/${id}`);
})); 

//Delete route
router.delete("/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted");
    res.redirect("/listings");
}));

module.exports = router;