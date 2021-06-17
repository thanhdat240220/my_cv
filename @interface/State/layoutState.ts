export type IExpand = {
  expandKey: number;
  status: boolean;
};

export interface ISidebarStateInit {
  href: string;
  expand: IExpand;
}
