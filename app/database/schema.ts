import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const emailList = sqliteTable("email_list", {
  id: int().primaryKey({ autoIncrement: true }),
  email: text().notNull().unique(),
});

export const adminPassword = sqliteTable("admin_password", {
  password: text(),
});
