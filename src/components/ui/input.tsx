import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseProps {
  label:string,
  error:string,
  as?:"input"|"textarea",
  value:string,
  onChange:React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

export const input = () => {
  return <div>input</div>;
};
