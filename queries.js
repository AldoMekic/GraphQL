const newsQuery = `
    query NewsQuery {
        news {
            id
            name
            authorName
            authorSurname
            content
            date
        }
    }
`;

const NameContentQuery = `
query NameContentQuery {
  news {
    name
    content
  }
}
`

const newsByIdQuery = `
    query NewsByIdQuery($id: ID!) {
        newsById(id: $id) {
            id
            name
            authorName
            authorSurname
            content
            date
        }
    }
`;

const newsByNameQuery = `
    query NewsByNameQuery($name: String!) {
        newsByName(name: $name) {
            id
            name
            authorName
            authorSurname
            content
            date
        }
    }
`;

const addNewsMutation = `
    mutation AddNews($news: AddNewsInput!) {
        addNews(news: $news) {
            id
            name
            authorName
            authorSurname
            content
            date
        }
    }
`;

const deleteNewsMutation = `
    mutation DeleteNews($id: ID!) {
        deleteNews(id: $id) {
            id
            name
            authorName
            authorSurname
            content
            date
        }
    }
`;

const updateNewsMutation = `
    mutation UpdateNews($id: ID!, $news: UpdateNewsInput!) {
        updateNews(id: $id, news: $news) {
            id
            name
            authorName
            authorSurname
            content
            date
        }
    }
`;

const addAuthorMutation = `
    mutation AddAuthor($id: ID!, $authorName: String!, $authorSurname: String!) {
        addAuthor(id: $id, authorName: $authorName, authorSurname: $authorSurname) {
            id
            name
            authorName
            authorSurname
            content
            date
        }
    }
`;

const deleteDateMutation = `
    mutation DeleteDate($id: ID!) {
        deleteDate(id: $id) {
            id
            name
            authorName
            authorSurname
            content
            date
        }
    }
`;

export default {
    newsQuery,
    newsByIdQuery,
    newsByNameQuery,
    addNewsMutation,
    deleteNewsMutation,
    updateNewsMutation,
    addAuthorMutation,
    deleteDateMutation,
    NameContentQuery
};