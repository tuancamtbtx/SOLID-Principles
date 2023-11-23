class MailServiceTrue {
  send () {
    console.log('Sending a mail to user')
    // send email
  }
}
class SmsServiceTrue {
  send () {
    console.log('Sending a sms message to user')
    // send email
  }
}

class AlertManagerTrue {
  notifyMail () {
    const mailService = new MailService()
    mailService.send()
  }
  notifySms () {
    const smsService = new SmsService()
    smsService.send()
  }
}
const alertManagerBad = new AlertManagerTrue()
alertManagerBad.notifyMail()
alertManagerBad.notifySms()