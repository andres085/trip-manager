import { NotifyUser } from "./notifier.interface";

export default class SendLogMessage implements NotifyUser {
  async sendUserEmail(email: string, text: string) {
    console.log(`Sending email to ${email}, with ${text}`);
  }

  async sendTicketEmail(email: string, text: string) {
    console.log(`Sending email to ${email}, with ${text}`);
  }
}
