export interface IActionType {
  type: string;
  payload?: any;
}

export type IRoute = {
  icon?: React.ReactElement;
  href: string;
  name?: string;
};

export interface IRoutes {
  [name: string]: IRoute;
}
