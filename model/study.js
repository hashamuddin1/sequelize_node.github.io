//jo define k baad small users jo likha hay woh table ka name ban jayega
module.exports = (sequelize, DataTypes) => {
    const study = sequelize.define("study", {
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });
    return study;
}