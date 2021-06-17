import { IExpand } from "@interface/State/layoutState";
import { IActionType } from "../../../@interface/share";

export const UPDATE_SIDEBAR_STATE = "UPDATE_SIDEBAR_STATE";
export const UPDATE_SIDEBAR_AND_EXPAND = "UPDATE_SIDEBAR_AND_EXPAND";
export const UPDATE_EXPAND = "UPDATE_EXPAND";

export const updateSidebarState = (href: string): IActionType => {
  return {
    type: UPDATE_SIDEBAR_STATE,
    payload: href,
  };
};

export const updateSidebarAndExpand = (
  href: string,
  expand: IExpand
): IActionType => {
  return {
    type: UPDATE_SIDEBAR_AND_EXPAND,
    payload: {
      href,
      expand,
    },
  };
};

export const updateExpand = (expand: IExpand): IActionType => {
  return {
    type: UPDATE_EXPAND,
    payload: expand,
  };
};
