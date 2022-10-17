//jo define k baad small users jo likha hay woh table ka name ban jayega
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users", {
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            //agar may chaho k jo bhi value aye uskay end ya start may by default koi value concatenate hojai
            set(value) {
                this.setDataValue('firstname', "Mohammad " + value)
            },
            //agar may chaho k jab bhi data get karun tw end ya start may ye lag kr aye
            get() {
                return this.getDataValue('firstname') + " ABCD";
            }
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }, {
        //isse created at aur update at nhi aega
        //timestamps:false
        //isse updated at nhi aega
        //updatedAt:false
        //same created at k sath bhi krsakte hay
    });
    return users;
}