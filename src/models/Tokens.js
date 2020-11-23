import Sequelize, { Model } from 'sequelize';

export default class Tokens extends Model {
    static init(sequelize) {
        super.init({
            data_requisicao: {
                type: Sequelize.DATE,
                defaultValue: ''
            }

        }, {
            sequelize,
            tableName: 'Tokens',
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Users, { foreignKey: 'users_id' });
    }
}
