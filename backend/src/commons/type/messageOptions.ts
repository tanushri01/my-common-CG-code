export type MessageOptions = {
  to: string;
  from: string;
  subject: string;
  html: string;
  text?: string;
  attachments?: Array<Attachments>;
};

export type Attachments = {
  filename: string;
  content: Buffer;
};
