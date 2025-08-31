import { Elysia } from "elysia";
import { createUser, getUser, UserInput } from "./service";

export const users = new Elysia({ prefix: "/users" })
	.get("/:userId", ({ params: { userId } }) => getUser(userId))
	.post("/", ({ body }) => createUser(body), {
		body: UserInput,
	});
