import { eq } from "drizzle-orm";
import { NotFoundError, t } from "elysia";
import { typeid } from "typeid-js";
import { db, type UserInsert, users } from "~/db";

export async function getUser(id: string) {
	try {
		const user = await db.query.users.findFirst({
			where: eq(users.id, id),
		});

		if (!user) {
			throw new NotFoundError("User not found");
		}

		return user;
	} catch (error) {
		console.error("Error finding user:", error);
	}
}

export async function createUser(args: UserInsert) {
	return db.insert(users).values({
		id: typeid("user").toString(),
		...args,
	});
}
