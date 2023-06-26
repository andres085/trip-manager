import { NotifyUser } from "./notifier.interface";

export default class SendLogMessage implements NotifyUser {
  async send(email: string, text: string) {
    console.log(`Sending email to ${email}, with ${text}`);
  }
}
