class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
}

class Storage {
    // save user to database
    save(user) {
        console.log(`Saving ${user.getName()} to the database`)
    }
}
class HttpConnection {
    sendEmail(user) {
        console.log(`Sending email to ${user.getName()} at ${user.getEmail()}`)
    }
}

class Logger {
    log(message) {
        console.log(message)
    }
}