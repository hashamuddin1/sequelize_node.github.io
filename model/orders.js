//jo define k baad small users jo likha hay woh table ka name ban jayega
module.exports = (sequelize, DataTypes) => {
    const orders = sequelize.define("orders", {
        productname: {
            type: DataTypes.STRING,
            allowNull: false,
            //agar may chaho k jo bhi value aye uskay end ya start may by default koi value concatenate hojai

        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

    });
    return orders;
}