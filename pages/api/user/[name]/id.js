import User from '@/models/User';
import { dbConnect } from '@/helper/dbConnect';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		await dbConnect();
		const name = req.query.name;

		const user = await User.findOne({ name: name });
		if (user) res.status(200).json({ id: user._id });
		else res.status(200).send(`User not found!❌`);
	} else {
		res.status(400).send('Invalid request type!❌');
	}
}
