//Path: server/src/models/article.model.js
class Article {
    constructor({ id, title, description, content, publishedOn, updatedOn, categoryId, userId }) {
        this.Id = id;
        this.Title = title;
        this.Description = description;
        this.Content = content;
        this.PublishedOn = publishedOn;
        this.UpdatedOn = updatedOn;
        this.CategoryId = categoryId;
        this.UserId = userId;
    }
}

module.exports = Article;
