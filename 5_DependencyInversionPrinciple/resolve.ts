interface NotificationService {
  send (): void;
  
}
class MailService implements NotificationService {
  send () {
    console.log('Sending a mail to user')
  }
}
class SmsService implements NotificationService {

  send () {
    console.log('Sending a sms message to user')
  }
}

class AlertManager {
  notificationService: NotificationService
  constructor (notificationService: NotificationService) {
    this.notificationService = notificationService
  }

  notify () {
    this.notificationService.send()
  }
}
const alertManagerGood = new AlertManager(new MailService())
alertManagerGood.notify()