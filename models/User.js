export class User {
    constructor(uid, displayName, email, emailVerified, phoneNumber, photoURL, password, disable, created, updated) {
        this.uid = uid;
        this.displayName = displayName || '';
        this.email = email;
        this.emailVerified = emailVerified || false;
        this.phoneNumber = phoneNumber || '';
        this.photoURL = photoURL || '';
        this.password = password;
        this.disable = disable || false;
        this.created = created || new Date();
        this.updated = updated || new Date();
    }
}

