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
  expandKey: number
): IActionType => {
  return {
    type: UPDATE_SIDEBAR_AND_EXPAND,
    payload: {
      href,
      expandKey,
    },
  };
};

export const updateExpand = (expandKey: number): IActionType => {
  return {
    type: UPDATE_EXPAND,
    payload: expandKey,
  };
};
