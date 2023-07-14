export interface NotifyUser {
  sendTicketEmail(email: string, uuid: string): Promise<void>;
  sendUserEmail(email: string, uuid: string): Promise<void>;
}
