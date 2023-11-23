class UserBad {
  private name: string
  private email: string
  constructor (name, email) {
    this.name = name
    this.email = email
  }

  getName () {
    return this.name
  }

  getEmail () {
    return this.email
  }

  save () {
    console.log(`Saving ${this.getName()} to the database`)
    // save user to database
  }

  sendEmail () {
    console.log(`Sending email to ${this.getName()} at ${this.getEmail()}`)
    // send email to user
  }

  log (message) {
    console.log(message)
    // log message
  }
}
