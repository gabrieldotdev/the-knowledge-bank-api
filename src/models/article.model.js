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

    // Thêm phương thức chung cho tất cả các đối tượng Article
    getCommonMethod() {
        return {
            getArticleDetail: this.getArticleDetail.bind(this),
            getArticle: this.getArticle.bind(this),
            getArticleById: this.getArticleById.bind(this),
            getArticleByCategoryId: this.getArticleByCategoryId.bind(this),
            getArticleByUserId: this.getArticleByUserId.bind(this),
        };
    }

    // log ra thông tin chung của tất cả các đối tượng Article
    logCommonInfo() {
        // Some common method
        console.log(`This is a common method for all Article objects.`);
    }

    // Phương thức lấy thông tin chi tiết của bài viết
    getArticleDetail() {
        return {
            id: this.Id,
            title: this.Title,
            description: this.Description,
            content: this.Content,
            publishedOn: this.PublishedOn,
            updatedOn: this.UpdatedOn,
            categoryId: this.CategoryId,
            userId: this.UserId,
        };
    }
    // Phương thức lấy thông tin của bài viết
    getArticle() {
        return {
            title: this.Title,
            description: this.Description,
            content: this.Content,
            categoryId: this.CategoryId,
            userId: this.UserId,
        };
    }

    // Phương thức lấy thông tin của bài viết theo Id
    getArticleById() {
        return {
            id: this.Id,
        };
    }

    // Phương thức lấy thông tin của bài viết theo Id của danh mục
    getArticleByCategoryId() {
        return {
            categoryId: this.CategoryId,
        };
    }
    // Phương thức lấy thông tin của bài viết theo Id của người dùng
    getArticleByUserId() {
        return {
            userId: this.UserId,
        };
    }
}

module.exports = Article;
