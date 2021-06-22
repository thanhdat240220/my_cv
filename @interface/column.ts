import { Gutter } from "./row";

export interface IColumn extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: Gutter;
  column: number;
}
