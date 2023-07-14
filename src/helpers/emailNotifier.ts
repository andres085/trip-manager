import { NotifyUser } from "./notifier.interface";
import { transporter } from "./transporter";

export class SendEmailMessage implements NotifyUser {
  async sendTicketEmail(email: string, uuid: string) {
    const html = `<h1>New Ticket Bought</h1>
    <p>The ticket with number ${uuid} has been reserved successfully!!!<p>`;

    try {
      await transporter.sendMail({
        from: "trip_manager@mail.com",
        to: email,
        subject: "Ticket Bought",
        html,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async sendUserEmail(email: string, uuid: string) {
    const html = `<h1>You have been registered</h1>
    <p>The user with number ${uuid} has been registered successfully!!!<p>`;

    try {
      await transporter.sendMail({
        from: "trip_manager@mail.com",
        to: email,
        subject: "Register Successful",
        html,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
