import { EMessageType } from "./enums";

export type Message = {
  type: EMessageType;
  content: string;
};
