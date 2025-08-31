import { Elysia } from "elysia";
import { users } from "~/resources/users/router";

const app = new Elysia()
	.get("/", () => "Eat your vegetables 🥦")
	.use(users)
	.listen(process.env.PORT ?? 3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
