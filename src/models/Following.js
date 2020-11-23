import Sequelize, { Model } from 'sequelize';

export default class Following extends Model {
    static init(sequelize) {
        super.init({
            following: {
                type: Sequelize.STRING,
                defaultValue: '1',
                unique: {
                    msg: 'following já existe',
                },

            }
        }, {
            sequelize,
            tableName: 'following',
        });
        return this;
    }

    static associateFollowing(models) {
        this.belongsTo(models.Users, { foreignKey: 'following_id' });
    }
}
