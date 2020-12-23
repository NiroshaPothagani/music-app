const express = require('express');
const AppError  = require('./../utils/AppError');
const user = require('./../models/UserModel');
const catchAsync = require('./../utils/catchAsync')

const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
     if(allowedFields.includes(el))
     newObj[el] = obj[el];
 });
 
 }

exports.getAllUsers = catchAsync( async(req, res, next) => {
 

    const users = await user.find();
    res.status(200).json({
        status:'success',
         data :{
           users
        }
     });
});

exports.getUser = catchAsync (async(req, res) => {
   
    const user = await user.findById(req.params.id);

      
    if(!user) {
        return next(new AppError('No user found with that ID', 404))
     }
     
    res.status(200).json({
        status:'success',
         data :{
           user:user
        }
     });
});

exports.createUser = catchAsync (async(req, res, next) => {
   
    const newUser = await user.create();
    res.status(200).json({
        status:'success',
         data :{
            newUser
        }
     });
});

exports.updateMe = catchAsync( async (req, res, next) => {
    //1)Create error if user POSTs password data
    if(req.body.password || req.body.passwordConfirm) {
        return next(
            new AppError(
                'This route is not for password updates. Please use /updatePassword',
                400
            )
        );
    }
    //2)filtered out unwanted fields names that are not allowed to be updated
    const filterBody = filterObj(req.body, 'name', 'email');
   
    //3)update user document
    const updatedUser = await user.findByIdAndUpdate(req.user.id, x,
         {  new:true,
            runValidators:true
         });
        res.status(200).json({
            status: 'success',
            data: {
                user: updatedUser
            }
        })
})


exports.deleteMe = catchAsync( async (req, res, next) => {
    //1)Create error if user POSTs password data
    if(req.body.password || req.body.passwordConfirm) {
        return next(
            new AppError(
                'This route is not for password deleting. Please use /deletePassword',
                400
            )
        );
    }
    //2)filtered out unwanted fields names that are not allowed to be updated
    const filterBody = filterObj(req.body, 'name', 'email');
   
    //3)update user document
    const deleteUser = await user.findByIdAndDelete(req.user.id, x,
         {  new:true,
            runValidators:true
         });
        res.status(200).json({
            status: 'success',
            data: {
                user: deleteUser
            }
        })
})




exports.getAllUsers = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defained'
    });
};


exports.getUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defained'
    });
};

exports.updateUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defained'
    });
};

exports.createUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defained'
    });
};


exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defained'
    });
};

