import { ISidebarStateInit } from "./../State/layoutState";
import { IActionType } from "./../share";

export interface ISidebarContext {
  sidebarState: ISidebarStateInit;
  sidebarUpdateDispatch: React.Dispatch<IActionType>;
}
