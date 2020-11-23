import Sequelize, { Model } from 'sequelize';

export default class Repository extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Nome precisa ter entre 5 a 255 caracteres',
                    },
                },
            },
            description: {
                type: Sequelize.STRING,
                defaultValue: '',

            },
            public: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Nome precisa ter entre 5 a 255 caracteres',
                    },
                },
            },
            slug: {
                type: Sequelize.STRING,
                defaultValue: '',
            }
        }, {
            sequelize,
            tableName: 'Repository',
        });
        return this;
    }
    static associateRepository(models) {
        this.belongsTo(models.Users, { foreignKey: 'repository_id' });
    }


}