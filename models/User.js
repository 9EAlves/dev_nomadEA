export class User {
    constructor(id, name, email, password, created, updated) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.created = created || new Date();
        this.updated = updated || new Date();

    }
}

