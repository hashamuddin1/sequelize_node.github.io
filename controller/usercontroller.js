const { sequelize } = require('../database/db');
let db = require('../database/db');
let User = db.users;
let payment = db.payment;
let orders = db.orders;
let course = db.course;
let employee = db.employee;
var nodemailer = require('nodemailer');
let hbs = require("nodemailer-express-handlebars")

//insert user
const adduser = async(req, res) => {
    try {
        // const data_user = await User.build({ firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email })
        // await data_user.save();

        //dosra tareqqa ye hay
        const data_user = await User.create({ firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email })
            //agar value change krni pari tw
            // data_user.email=xyz;
            // data_user.save()

        let helperfunction = () => {
            let response = res.statusCode;
            let message = "User Inserted Successfully";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//update users
const update_user = async(req, res) => {
    try {
        const data_user = await User.update(req.body, {
            where: {
                id: req.query.id
            }
        })
        let helperfunction = () => {
            let response = res.statusCode;
            let message = "User Updated Successfully";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//delete user
const delete_user = async(req, res) => {
    try {
        const data_user = await User.destroy({
            where: {
                id: req.query.id
            }
        })
        let helperfunction = () => {
            let response = res.statusCode;
            let message = "User Deleted Successfully";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//truncate table
const truncatetable = async(req, res) => {
    try {
        const data_user = await User.destroy({
            truncate: true
        })
        let helperfunction = () => {
            let response = res.statusCode;
            let message = "Truncate Successfully";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//bulkdata
const bulkdata = async(req, res) => {
    try {
        const data_user = await User.bulkCreate([
            { firstname: req.body.firstname1, lastname: req.body.lastname1, email: req.body.email1 },
            { firstname: req.body.firstname2, lastname: req.body.lastname2, email: req.body.email2 }
        ])
        let helperfunction = () => {
            let response = res.statusCode;
            let message = "Multiple Users Inserted Successfully";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//all user
const allusers = async(req, res) => {
    try {
        const data_user = await User.findAll({})
        let helperfunction = () => {
            let response = res.statusCode;
            let message = "All Users";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

// exclude field
const exclude_field = async(req, res) => {
    try {
        const data_user = await User.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
                //agar luch extra include krna hotw uske liye include hota hay

            }
        })
        let helperfunction = () => {
            let response = res.statusCode;
            let message = "All Users";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//findandcount
const findandcount = async(req, res) => {
    try {
        //ye total row bhi count krke batayega
        const data_user = await User.findAndCountAll({
                where: {
                    firstname: req.query.firstname
                }
            })
            //ek findorcreate bhi hota hay
        let helperfunction = () => {
            let response = res.statusCode;
            let message = "All Users";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//one to one relationship
const onetoonerel = async(req, res) => {
    try {

        // const data_user = await User.findAll({
        //         include: payment,
        //         where: {
        //             id: 1
        //         }
        //     })
        //ab agar kuch hi fields chahye hay tw
        const data_user = await User.findAll({
            attributes: ["firstname", "lastname"],
            include: [{
                model: payment,
                attributes: ["amount", "pay_type"],
            }],
            where: {
                id: 1
            }
        })

        let helperfunction = () => {
            let response = res.statusCode;
            let message = "One to One relation";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//belongsto in one to one rel
const belongsToonetoonerel = async(req, res) => {
    try {
        const data_user = await payment.findAll({
            include: [{
                model: User,
                //aliyase bhi krsakte hay video may bataya hay
            }],

        })

        let helperfunction = () => {
            let response = res.statusCode;
            let message = "Belongs To One to One relation";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//one to many
const onetomanyrel = async(req, res) => {
    try {
        const data_user = await User.findAll({
            include: [{
                model: orders,
                //aliyase bhi krsakte hay video may bataya hay
            }],

        })

        let helperfunction = () => {
            let response = res.statusCode;
            let message = "Belongs To One to Many relation";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//many to many
const manytomanyrel = async(req, res) => {
    try {
        const data_user = await User.findAll({
            include: [{
                model: course,
            }],

        })

        let helperfunction = () => {
            let response = res.statusCode;
            let message = "Belongs To Many to Many relation";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}


//soft del fetch employee
const softdelemp = async(req, res) => {
    try {
        const data_user = await employee.findAll({})

        //aur agar fetch k waqt deleted data bhi dekhna hay tw
        // const data_user = await employee.findAll({
        //     paranoid: false
        // })



        //To Restore
        // const data_user = await employee.restore({
        //     where: {
        //         id: 2
        //     }
        // })

        let helperfunction = () => {
            let response = res.statusCode;
            let message = "All Employee";
            let status = true;
            let Data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, Data: Data })
        }
        helperfunction()
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
}

//transaction api
const transactionapi = async(req, res) => {
    const t = await sequelize.transaction()
    try {
        //transavtion means k koi bhi issue aye tw roll back krdo
        const data_user1 = await payment.create({ amount: 1500, pay_type: "easy paisa", user_id: 2 }, {
            transaction: t
        })
        const data_user = await employee.create({ firstname: 'kamran', lastname: "umer" }, {
            transaction: t
        })
        t.commit();
        let helperfunction = () => {
            let response = res.statusCode;
            let message = "Transaction Successfull";
            let status = true;
            let payment_Data = data_user1;
            let user_data = data_user;
            return res.status(201).send({ response: response, message: message, status: status, payment_Data: payment_Data, user_data: user_data })
        }
        helperfunction()
    } catch (e) {
        t.rollback()
        console.log(e)
        res.status(400).send("Transaction Unsuccessfull")
    }
}

//sendemail
const sendemail = async(req, res) => {

    try {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'hashamlaptop@gmail.com',
                pass: 'hizewfqxstdtsddk'
            }
        });

        var mailOptions = {
            from: 'hashamlaptop@gmail.com',
            to: req.body.email,
            subject: 'Sending Email using Node.js',
            text: `Hey Hasham .`,
        };

        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(13)
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        let helperfunction = () => {
            let response = res.statusCode;
            let message = "Email Send Successfully";
            let status = true;
            return res.status(201).send({ response: response, message: message, status: status })
        }
        helperfunction()
    } catch (e) {

        console.log(e)
        res.status(400).send('Something went wrong')
    }
}

module.exports = { adduser, sendemail, transactionapi, softdelemp, manytomanyrel, onetomanyrel, belongsToonetoonerel, onetoonerel, findandcount, exclude_field, allusers, bulkdata, truncatetable, update_user, delete_user }