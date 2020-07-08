export const createArticle = (title, author, description, content) => ({
    type: 'ADD_ARTICLE',
    article: {
        title,
        author,
        description,
        content,
    }
});