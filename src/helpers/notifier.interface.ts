export interface NotifyUser {
  send(email: string, text: string): Promise<void>;
}
