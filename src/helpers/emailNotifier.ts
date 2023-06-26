import { NotifyUser } from "./notifier.interface";
import { transporter } from "./transporter";

export class SendEmailMessage implements NotifyUser {
  async send(email: string, text: string) {
    try {
      await transporter.sendMail({
        from: "trip_manager@mail.com",
        to: email,
        subject: "Ticket Bought",
        html: `<h1>New Ticket Bought</h1>
        <p>Ticket number ${text}</p>`,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
