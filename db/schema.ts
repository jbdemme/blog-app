import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    author: text("author"),
    url: text("url"),
    likes: integer("likes").default(0).notNull()
})