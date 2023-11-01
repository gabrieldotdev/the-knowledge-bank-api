class User {
    constructor({ id, username, password, email, publishedOn, updatedOn }) {
        this.Id = id;
        this.Username = username;
        this.Password = password;
        this.Email = email;
        this.PublishedOn = publishedOn;
        this.UpdatedOn = updatedOn;
    }
}

module.exports = User;
