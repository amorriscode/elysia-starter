import { Elysia, NotFoundError, t } from "elysia";
import { userInsertSchema } from "~/db";
import { createUser, getUserOrThrow } from "./service";

export const users = new Elysia({ prefix: "/users" })
	.get("/:userId", ({ params: { userId }, status }) => {
		try {
			return getUserOrThrow(userId);
		} catch (error) {
			if (error instanceof Error && error.message === "User not found") {
				throw new NotFoundError("User not found");
			}

			return status(500, "Internal Server Error");
		}
	})
	.post("/", ({ body }) => createUser(body), {
		body: t.Omit(userInsertSchema, ["id"]),
	});
