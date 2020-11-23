import Repository from '../models/Repository';
import Users from '../models/Users';
import { isBoolean } from 'validator';

class RepositoryController {
    async store(req, res) {
        try {
            const { nomeRepo = '', description = '', publics } = req.body;
            const user = await Users.findByPk(req.params.id);

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe'],
                });
            }
            if (!nomeRepo && !description && !publics) {
                return res.status(401).json({
                    errors: ['Valores vazios'],
                });

            }
            if (!isBoolean(publics)) {
                return res.status(400).json({
                    errors: ['Valor publics só pode ser (falso/true)'],
                });

            }

            const { id, nome } = user;

            const slug = nome + ' ' + nomeRepo;

            const repository = await Repository.create({
                nome: nomeRepo,
                description,
                public: publics,
                slug,
                repository_id: id
            });


            return res.json(repository);

        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: ['Unexpected error when creating new Repository'] });
        }
    }

    async show(req, res) {
        try {
            const user = await Users.findByPk(req.params.id);
            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe'],
                });
            }

            const { id } = user;

            const repository = await Repository.findAll({ where: { 'repository_id': id } });
            const start = await Repository.count({ where: { 'repository_id': id } });

            return res.json({ repository, start });

        } catch (e) {
            console.log(e);
            return res.json(null);
        }
    }



}

export default new RepositoryController();