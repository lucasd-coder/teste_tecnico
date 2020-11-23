import Users from '../models/Users';
import Repository from '../models/Repository';
import Following from '../models/Following';
import Follower from '../models/Follower';

class UserController {
    async store(req, res) {
        try {
            const users = await Users.create(req.body);

            return res.json(users);
        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });
        }
    }

    async index(req, res) {
        const users = await Users.findAll({
            attributes: ['id', 'nome', 'email', 'localizacao', 'avatar', 'bio'],
            include: [{
                model: Repository,
                attributes: ['nome', 'description', 'slug']
            }, {
                model: Following,
                attributes: ['following']
            }, {
                model: Follower,
                attributes: ['follower']
            }
            ]
        });
        res.json(users);
    }

    async show(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({
                    errors: ['Faltando ID'],
                });
            }
            const users = await Users.findByPk(id, {
                attributes: ['id', 'nome', 'email', 'localizacao', 'avatar', 'bio'],
                include: [{
                    model: Repository,
                    attributes: ['nome', 'description', 'slug'],
                }, {
                    model: Following,
                    attributes: ['following']
                }, {
                    model: Follower,
                    attributes: ['follower']
                }

                ]

            });

            if (!users) {
                return res.status(400).json({
                    errors: ['Usuário não exite'],
                });
            }


            const repos = await Repository.count({ where: { 'repository_id': id } });

            return res.json({ users, repos: repos });

        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });

        }
    }

    async update(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({
                    errors: ['Faltando ID'],
                });
            }

            const user = await Users.findByPk(id);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não exite'],
                });
            }

            const userAtualizado = await user.update(req.body);

            return res.json(userAtualizado);


        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });

        }
    }

}

export default new UserController();