export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactElement;
  type?: string;
  [name: string]: any;
}
