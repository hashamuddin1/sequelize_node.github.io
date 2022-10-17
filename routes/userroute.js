const express = require('express');
const router = express.Router();
const { adduser, transactionapi, sendemail, softdelemp, manytomanyrel, onetoonerel, belongsToonetoonerel, onetomanyrel, findandcount, bulkdata, allusers, exclude_field, update_user, delete_user, truncatetable } = require('../controller/usercontroller')

//add users
router.post("/api/insertuser", adduser)

//update users
router.put("/api/updateuser", update_user)

//delete users
router.delete("/api/deleteuser", delete_user)

//truncate table
router.delete("/api/truncatetable", truncatetable)

//Ek hi waqt may ek se ziada data insert krna
router.post("/api/bulkdata", bulkdata)

//get all users
router.get("/api/allusers", allusers)

//koi field agar exclude krni hay tw
router.get("/api/exclude_field", exclude_field)

//find and count all
router.get("/api/findandcount", findandcount)

//one to one relationship
router.get("/api/onetoone", onetoonerel);

//belongsTo in one to one relationship
router.get("/api/belongsToonetoone", belongsToonetoonerel);

//one to many
router.get("/api/onetomany", onetomanyrel);

//Many to many relationship
router.get("/api/manytomany", manytomanyrel);

//soft delete fetch employee
router.get("/api/softdelemp", softdelemp);

//transaction
router.post("/api/transactionapi", transactionapi);

//send email
router.post("/api/sendemail", sendemail)

module.exports = router