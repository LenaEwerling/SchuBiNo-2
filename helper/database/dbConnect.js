import mongoose from 'mongoose';

export async function dbConnect() {
	if (mongoose.connection.readyState >= 1) return;

	console.log('trying to connect db!💾');
	return mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			// useUnifiedTopology: true,
		})
		.then(() => {
			console.log('Connected to db!💾');
		});
}

export function jsonify(obj) {
	return JSON.parse(JSON.stringify(obj));
}

export default async function dbMiddleware(req, res, next) {
	try {
		if (!global.mongoose) {
			global.mongoose = dbConnect();
		}
	} catch (e) {
		console.error(e);
	}

	return next();
}
