const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const { default: slugify } = require('slugify');

exports.getOverview = catchAsync(async (req, res) => {
    //1)Get tour data from collection
    const tours = await Tour.find();

    //2)Build template
    //3)Render that template using tour data 



    res.status(200).render('signup', {
        title: 'signup',
        tours
    })
})

exports.getTour = catchAsync( async (req, res ) => {
    // const tour = await slugify(req.slugify);
    res.status(200).render('slug', {
        title:'slug'
    })
})

exports.getLoginForm = (req, res) => {

    res.status(200).render('login', {
        title:'Login',
    
    });
};