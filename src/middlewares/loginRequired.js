import jwt from 'jsonwebtoken';
import Users from '../models/Users';


export default async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({
            errors: ['Login required'],
        });
    }
    const [, token] = authorization.split(' ');

    try {
        const dados = jwt.verify(token, process.env.TOKEN_SECRET);
        const { id, username } = dados;

        const user = await Users.findOne({
            where: {
                id,
                username,
            },
        });

        if (!user) {
            return res.status(401).json({
                errors: ['Usuário inválido.'],
            });
        }

        req.userId = id;
        req.userUsername = username;
        return next();

    } catch (error) {
        return res.status(401).json({
            errors: ['Token expirado ou inválido.'],
        });
    }
};