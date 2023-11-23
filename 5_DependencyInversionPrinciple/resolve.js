class NotificationService {
  constructor () {

  }
  send () {
  }
}
class MailService extends NotificationService {
  constructor () {
    super()
  }

  send () {
    console.log('Sending a mail to user')
  }
}
class SmsService extends NotificationService {
  constructor () {
    super()
  }

  send () {
    console.log('Sending a sms message to user')
  }
}

class AlertManager {
  constructor (notificationService) {
    this.notificationService = notificationService
  }

  notify () {
    this.notificationService.send()
  }
}
const alertManager = new AlertManager(new MailService())
