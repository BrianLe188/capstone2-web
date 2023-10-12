import { EFILE, EMessageType } from "./enums";

export type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};

export type Message = {
  type: EMessageType;
  content: string;
};

export type FileType = {
  id: number;
  name: string;
  path: string;
  extension: EFILE;
};

export type Basic = {
  id: number;
  name: string;
};

export type Gender = Prettify<
  {
    candidates?: [];
  } & Basic
>;
