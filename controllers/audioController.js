
const app = require('./../app');
const AppError  = require('../utils/AppError');
const Tour = require('./../models/audioModel');
const express = require('express');
// const fs = require('fs');
const APIFeatures = require('../utils/apiFeatures')
const catchAsync = require('./../utils/catchAsync')

// const filterObj = (obj, ...allowedFields) => {
//     const newObj = {};
//     Object.keys(obj).forEach(el => {
//      if(allowedFields.includes(el))
//      newObj[el] = obj[el];
//  });
 
//  }
exports.getAllAudios = catchAsync (async(req, res, next) => {

    //Execute query
    const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginating();
    const audios = await features.query;
   
    // const audio = await Tour.find();
    res.status(201).json({
        status:'success',
         data :{
           audios
        }
     });
}) 


exports.createAudio = catchAsync ( async (req, res, next) => {
    const newAudio = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
         tour: newAudio
      }
  });
});

exports.getAudio =  catchAsync( async (req, res, next) => {
    const audio = await Tour.findById(req.params.id);
   
    if(!audio) {
        return next(new AppError('No tour found with that ID', 404))
     }
     
   
   res.status(200).json({
    status: 'success',
    data: {
        tour: audio
    }
}); 
});


exports.updateAudio  =  catchAsync( async (req, res) => {
  
    const audio = await Tour.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    if(!audio) {
        return next(new AppError('No tour found with that ID', 404))
     }
     

    res.status(200).json({
        status: 'success',
        data: {
            tours: 'audio file is updated!'
        }
    });
  })

  
exports.deleteAudio  =  catchAsync( async (req, res) => {
    const audio = await Tour.findByIdAndDelete(req.params.id);
    if(!audio) {
        return next(new AppError('No tour found with that ID', 404))
     }
     
    res.status(204).json({
        status: 'success',
        data:null,
        message:"successfully deleted"
    });

})


// exports.getAllAudios = (req, res) => {
//     res.status(500).json({
//         status:'fail',
//         message:'this route not yet defined'
//     })
// }
// exports.getAudio = (req, res) => {
//     res.status(500).json({
//         status:'fail',
//         message:'this route not yet defained'
//     })
// }
// exports.updateAudio = (req, res) => {
//     res.status(500).json({
//         status:'fail',
//         message:'this route not yet defined'
//     })
// }