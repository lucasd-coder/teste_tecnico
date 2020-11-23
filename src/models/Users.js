import Sequelize, { Model } from 'sequelize';

export default class Users extends Model {
    static init(sequelize) {
        super.init({
            nome: {
                type: Sequelize.STRING,
                defaulValue: '',
                validate: {
                    len: {
                        args: [3, 255],
                        msg: 'Campo nome deve ter entre 3 e 255 caracteres',
                    },
                },
            },

            email: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    isEmail: {
                        msg: 'Email Inválido',
                    },
                },
            },
            localizacao: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    len: {
                        args: [5, 255],
                        msg: 'Campo localização deve ter entre 3 e 255 caracteres',
                    },
                },
            },
            avatar: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
            username: {
                type: Sequelize.STRING,
                defaultValue: '',
                unique: {
                    msg: 'Username já existe',
                },
                validate: {
                    len: {
                        args: [5, 255],
                        msg: 'username precisa ter entre 5 a 255 caracteres',
                    },
                },
            },
            bio: {
                type: Sequelize.STRING,
                defaultValue: '',
            },
        }, {
            sequelize,
        });
        return this;
    }

    static associate(models) {
        this.hasMany(models.Tokens, { foreignKey: 'users_id' });
    }

    static associateRepository(models) {
        this.hasMany(models.Repository, { foreignKey: 'repository_id' });
    }

    static associateFollower(models) {
        this.hasMany(models.Follower, { foreignKey: 'follower_id' });
    }
    static associateFollowing(models) {
        this.hasMany(models.Following, { foreignKey: 'following_id' });
    }


}