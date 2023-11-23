class MailService {
  send () {
    console.log('Sending a mail to user')
    // send email
  }
}
class SmsService {
  send () {
    console.log('Sending a sms message to user')
    // send email
  }
}

class AlertManager {
  notifyMail () {
    const mailService = new MailService()
    mailService.send()
  }
  notifySms () {
    const smsService = new SmsService()
    smsService.send()
  }
}
const alertManager = new AlertManager()
alertManager.notifyMail()
alertManager.notifySms()