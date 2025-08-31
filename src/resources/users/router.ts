import { Elysia, t } from "elysia";
import { userInsertSchema } from "~/db";
import { createUser, getUser } from "./service";

export const users = new Elysia({ prefix: "/users" })
	.get("/:userId", ({ params: { userId } }) => getUser(userId))
	.post("/", ({ body }) => createUser(body), {
		body: t.Omit(userInsertSchema, ["id"]),
	});
