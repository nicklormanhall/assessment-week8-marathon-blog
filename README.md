Build a comment form

Notes added to Moodle & README.md

Week 8 - Blog (or some such thing) with a Comments Form

You've built a simple blog, your task now is to embellish it. Use database relationships to add a comments table. Add categories and tags to your posts. Add a form to create new comments. Add an edit page that populates the form with the post data and allows you save changes to the database.

You can use Vercel Postgres or Supabase, so long as Postgres is the database.

User Stories
🐿️ As a user, I want to browse a list of posts, sortable by ascending or descending order
🐿️ As a user, I want to see a list of categories, and click on a category to see a list of posts in that category
🐿️ As a user, I want to be able to leave a comment sharing my thoughts on each post
Requirements

🎯 Created using create-next-app

    DONE

🎯 Design a SQL schema for a posts table, and a comments table that has a post_id column connecting it to the posts table.

    DONE - SCHEMA AND SEED DATA IN GITHUB seed.sql

🎯 Either create a form where users can add posts OR seed your database with at least 4 posts that comments can be added to (if you do the seed, one of the stretch goals will be harder).

    DONE

🎯 Add a form to the individual post page to allow creating a new comment, which is saved to the new comments table including the Post ID.

    DONE

🎯 Refresh the /posts route data when adding a new post, and redirect the user to the list of posts

    DONE

🎯 Refresh the /post/:postId route when adding a new comment, so the new comment is displayed on the page

    I didn't see until I was just writing the README and did it a different way to show the comments I'll try to go back and redo next week

Was another challenging week. Umfortunately my week and weekend has been non stop trying to get a number of home/family/new job/football tournament related work.

I had problems with date fields on SQL that I wanted to put in and ended up spending to long trying to resolve, there were also a few issues with Vercel not updating back so the SQL was showing incorrectly (showed data in my comments table even though it had been deleted and cleared)
