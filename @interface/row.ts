export type Gutter = [number, number] | [number];

export interface IRow extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: Gutter
}
