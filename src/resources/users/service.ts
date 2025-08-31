import { eq } from "drizzle-orm";
import { typeid } from "typeid-js";
import { db, type UserInsert, users } from "~/db";

export async function getUserOrThrow(id: string) {
	const user = await db.query.users.findFirst({
		where: eq(users.id, id),
	});

	if (!user) {
		throw new Error("User not found");
	}

	return user;
}

export async function createUser(args: UserInsert) {
	return db
		.insert(users)
		.values({
			id: typeid("user").toString(),
			...args,
		})
		.returning()
		.then(([user]) => user);
}
