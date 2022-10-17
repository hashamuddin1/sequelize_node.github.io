//isme ham soft delete seekhe gay
//soft delete may hota ye hay k record table may hi rehta hay
//magar retreive krte waqt nhi ata

//jo define k baad small users jo likha hay woh table ka name ban jayega
module.exports = (sequelize, DataTypes) => {
    const employee = sequelize.define("employee", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            //agar may chaho k jo bhi value aye uskay end ya start may by default koi value concatenate hojai

        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },

    }, {
        //is paranoid se hi soft delete hota hay
        paranoid: true
    });
    return employee;
}