import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-typebox";

export const users = pgTable("users", {
	id: varchar("id", { length: 255 }).primaryKey(),
	email: varchar("email", { length: 255 }).unique().notNull(),
	name: varchar("name", { length: 255 }),
});

export type User = typeof users.$inferSelect;
export type UserInsert = Omit<typeof users.$inferInsert, "id">;
export const userSelectSchema = createSelectSchema(users);
export const userInsertSchema = createInsertSchema(users);
