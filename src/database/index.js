import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Users from '../models/Users';
import Tokens from '../models/Tokens';
import Repository from '../models/Repository';
import Follower from '../models/Follower';
import Following from '../models/Following';


const models = [Users, Tokens, Repository, Follower, Following];

const conection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(conection));
models.forEach((model) => model.associate && model.associate(conection.models));
models.forEach((model) => model.associateRepository && model.associateRepository(conection.models));
models.forEach((model) => model.associateFollower && model.associateFollower(conection.models));
models.forEach((model) => model.associateFollowing && model.associateFollowing(conection.models));



