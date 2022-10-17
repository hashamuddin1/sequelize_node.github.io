const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('node_sequelize', 'root', '', {
    host: 'localhost',
    //dialect means k konsa data base use krrahe hain
    dialect: 'mysql',
    //logging false se hoga ye k console may querires nhi aegi jab bhi ham API hit krege
    logging: false,
    //pool ka phela parameter means k kitne max relations banay gay aur kitne mininmum aur idle 10000 means k ek connection se dosre connection janay may kitna time lagay ga
    pool: { max: 5, min: 0, idle: 10000 }
});

//ye check krna k connection bana ya nhi
sequelize.authenticate().then(() => {
    console.log("Connected Successful")
}).catch(err => {
    console.log("Error: " + err)
});
//jab successfully connected hota hay tw Executing (default): select 1+1 AS result tw ata hi ata hay

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.payment = require('../model/payment')(sequelize, DataTypes);
//sync check krega agar is name ki koi table nhi hay tw create krdega
//sync({force:true}); ye krne se table recrete hoga aur data urhay ga
//fore:true tw saaray db ko ura dega isliye agar sirf particulr db ko drop krna hay tw
//db.sequelize.sync({ force: false,match:/daname$/ })
db.sequelize.sync({ force: false, match: /node_sequelize$/ }).then(() => {
    console.log("re-sync")
})
db.users = require('../model/users')(sequelize, DataTypes);
db.orders = require('../model/orders')(sequelize, DataTypes);
db.course = require('../model/course')(sequelize, DataTypes);
db.study = require('../model/study')(sequelize, DataTypes);
db.employee = require('../model/employee')(sequelize, DataTypes);

//One to One relationship
//by default ye payment may jo foreign key leraha hay woh userId hay
db.users.hasOne(db.payment, { foreignKey: "user_id" });
db.payment.belongsTo(db.users, { foreignKey: "user_id" });

//One to many relationship
db.users.hasMany(db.orders, { foreignKey: "user_id" });
db.orders.belongsTo(db.users, { foreignKey: "user_id" });

//Many to Many
db.users.belongsToMany(db.course, { through: "study" });
db.course.belongsToMany(db.users, { through: "study" });

module.exports = db;