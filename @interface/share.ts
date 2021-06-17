export interface IActionType {
  type: string;
  payload?: any;
}

export type TSidebarList = Array<{
  icon?: React.ReactElement;
  name: string;
  href: string;
}>;
