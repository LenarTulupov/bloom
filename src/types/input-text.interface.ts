import { ChangeEventHandler } from "react";

export interface IInputText {
  // Making not required now before user auth
  id?: string;
  value?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  // -----------
  type?: 'email' | 'password' | 'text';
  placeholder?: string;
  className?: string;
}