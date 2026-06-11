import { Many, relations } from "drizzle-orm";
import { boolean, integer, pgTable, serial, text } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    author: text("author"),
    url: text("url"),
    likes: integer("likes").default(0).notNull(),
    userId: integer("user_id").references(() => users.id)
})

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: text("username").notNull().unique(),
    name: text("name").notNull(),
    passwordHash: text("password_hash").notNull().default(""),
    token: text("token")
})

export const readingList = pgTable("reading_list", {
    id: serial("id").primaryKey(),
    userId: integer("user_id").references(() => users.id),
    blogId: integer("blog_id").references(() => blogs.id),
    read: boolean().notNull().default(false)
})

export const usersRelations = relations(users, ({ many }) => ({
    blogs: many(blogs),
    readingList: many(readingList)
}))

export const blogsRelations = relations(blogs, ({ one, many }) => ({
    users: one(users, {
        fields: [blogs.userId],
        references: [users.id]
    }),
    readingList: many(readingList)
}))

export const readingListRelations = relations(readingList, ({ one }) => ({
    blog: one(blogs, {
        fields: [readingList.blogId],
        references: [blogs.id]
    }),
    user: one(users, ({
        fields: [readingList.userId],
        references: [users.id]
    }))
}))