import Sequelize, { Model } from 'sequelize';

export default class Follower extends Model {
    static init(sequelize) {
        super.init({
            follower: {
                type: Sequelize.STRING,
                defaultValue: '1',
                unique: {
                    msg: 'follower já existe',
                },

            }
        }, {
            sequelize,
            tableName: 'follower',
        });
        return this;
    }

    static associateFollower(models) {
        this.belongsTo(models.Users, { foreignKey: 'follower_id' });
    }
}
