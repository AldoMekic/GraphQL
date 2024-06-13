export const typeDefs = `#graphql
    type News {
        id: ID!
        authorName: String!
        authorSurname: String!
        name: String!
        content: String!
        date: String!
    }
    type Query {
        news: [News]
        newsById(id: ID!): News
        newsByName(name: String!): News
    }
    type Mutation {
        addNews(news: AddNewsInput!): News
        deleteNews(id: ID!): [News]
        updateNews(id: ID!, news: UpdateNewsInput!): News
        addAuthor(id: ID!, authorName: String!, authorSurname: String!): News
        deleteDate(id: ID!): News
    }
    input AddNewsInput {
        name: String!
        authorName: String!
        authorSurname: String!
        content: String!
        date: String!
    }
    input UpdateNewsInput {
        name: String
        authorName: String
        authorSurname: String
        content: String
        date: String
    }
`;