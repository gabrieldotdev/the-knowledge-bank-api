class User {
    constructor({ id, username, password, email, publishedOn, updatedOn }) {
        this.Id = id;
        this.Username = username;
        this.Password = password;
        this.Email = email;
        this.PublishedOn = publishedOn;
        this.UpdatedOn = updatedOn;
    }

    // Thêm phương thức chung cho tất cả các đối tượng User
    getCommonMethod() {
        return {
            getUserDetail: this.getUserDetail.bind(this),
            getUser: this.getUser.bind(this),
            getUserById: this.getUserById.bind(this),
        };
    }

    // log ra thông tin chung của tất cả các đối tượng User
    logCommonInfo() {
        console.log(`This is a common method for all Article objects.`);
    }

    // Phương thức lấy thông tin chi tiết của nguời dùng
    getUserDetail() {
        return {
            id: this.Id,
            username: this.Username,
            password: this.Password,
            email: this.Email,
            publishedOn: this.PublishedOn,
            updatedOn: this.UpdatedOn,
        };
    }

    // Phương thức lấy thông tin của nguời dùng
    getUser() {
        return {
            username: this.Username,
            password: this.Password,
            email: this.Email,
        };
    }

    // Phương thức lấy thông tin của nguời dùng theo Id
    getUserById() {
        return {
            id: this.Id,
        };
    }
}

module.exports = User;
