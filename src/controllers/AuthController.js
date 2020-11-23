import jwt from 'jsonwebtoken';

import Users from '../models/Users';
import Tokens from '../models/Tokens';


class AuthController {
    async store(req, res) {
        try {
            const { username = '' } = req.body;

            if (!username) {
                return res.status(401).json({
                    errors: ['Username  obrigatório'],
                });
            }

            const user = await Users.findOne({ where: { username } });

            if (!user) {
                return res.status(401).json({
                    errors: ['Username não existe'],
                });

            }

            const { id } = user;
            const token = jwt.sign({ id, username }, process.env.TOKEN_SECRET, {
                expiresIn: process.env.TOKEN_EXPIRATION,
            });
            const data_requisicao = new Date();
            await Tokens.create({ data_requisicao, users_id: id });
            const User = await Users.findByPk(id);

            return res.json({ User, token });

        } catch (e) {
            console.log(e);
            return res.status(400).json({ error: ['Username não existe'] });

        }

    }

}

export default new AuthController();