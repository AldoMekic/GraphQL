import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import news from "./db.js";
import { typeDefs } from "./schema.js";

let newsData = news;

const resolvers = {
    Query: {
        news() {
            return newsData;
        },
        newsById(_, args) {
            return newsData.find((newsItem) => newsItem.id === args.id);
        },
        newsByName(_, args) {
            return newsData.find((newsItem) => newsItem.name === args.name);
        },
    },

    Mutation: {
        deleteNews(_, args) {
            newsData = newsData.filter((newsItem) => newsItem.id !== args.id);
            return newsData;
        },
        addNews(_, args) {
            let newsItem = {
                ...args.news,
                id: Math.floor(Math.random() * 10000).toString()
            };
            newsData.push(newsItem);
            return newsItem;
        },
        updateNews(_, args) {
            const newsItem = newsData.find((item) => item.id === args.id);
            if (newsItem) {
                if (args.news.name !== undefined) newsItem.name = args.news.name;
                if (args.news.authorName !== undefined) newsItem.authorName = args.news.authorName;
                if (args.news.authorSurname !== undefined) newsItem.authorSurname = args.news.authorSurname;
                if (args.news.content !== undefined) newsItem.content = args.news.content;
                if (args.news.date !== undefined) newsItem.date = args.news.date;
            }
            return newsItem;
        },
        addAuthor(_, args) {
            const newsItem = newsData.find((item) => item.id === args.id);
            if (newsItem) {
                newsItem.authorName = args.authorName;
                newsItem.authorSurname = args.authorSurname;
            }
            return newsItem;
        },
        deleteDate(_, args) {
            const newsItem = newsData.find((item) => item.id === args.id);
            if (newsItem) {
                newsItem.date = "No date";
            }
            return newsItem;
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000, host: '0.0.0.0' },
});

console.log(`Server ready at ${url}`);