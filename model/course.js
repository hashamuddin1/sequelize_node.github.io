//jo define k baad small users jo likha hay woh table ka name ban jayega
module.exports = (sequelize, DataTypes) => {
    const course = sequelize.define("course", {
        coursename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        totalmarks: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });
    return course;
}