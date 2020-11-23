import Follower from '../models/Follower';
import Users from '../models/Users';
import Following from '../models/Following';



class FollowerController {
    async store(req, res) {
        try {
            const user = await Users.findByPk(req.params.id);
            const { follower } = req.body;

            if (!user) {
                return res.status(400).json({
                    errors: ['Usuário não existe'],
                });
            }

            const { id, username } = user;


            const data = await Follower.create({
                follower,
                follower_id: id
            });

            const seque = await Follower.count({ where: { 'follower': username } });

            const segue = await Following.create({ following: seque, following_id: id })

            return res.json({ data, segue });

        } catch (e) {
            return res.status(400).json({
                errors: e.errors.map((err) => err.message),
            });

        }
    }
}
export default new FollowerController();