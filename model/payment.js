//jo define k baad small users jo likha hay woh table ka name ban jayega
module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define("payment", {
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pay_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    }, {
        //isse created at aur update at nhi aega
        //timestamps:false
        //isse updated at nhi aega
        //updatedAt:false
        //same created at k sath bhi krsakte hay
    });
    return Payment;
}