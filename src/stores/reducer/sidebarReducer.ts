import { ISidebarStateInit } from "../../../@interface/State/layoutState";
import * as layoutAction from "../action/layoutAction";
import { IActionType } from "../../../@interface/share";

export const sidebarStateInit: ISidebarStateInit = {
  href: "",
  expandKey: 0,
};

export const sidebarReducer = (
  state: ISidebarStateInit,
  action: IActionType
) => {
  const { payload, type } = action;
  switch (type) {
    case layoutAction.UPDATE_SIDEBAR_STATE:
      return {
        ...state,
        href: payload,
      };
    case layoutAction.UPDATE_SIDEBAR_AND_EXPAND:
      return {
        ...state,
        href: payload.href,
        expandKey: payload.expandKey,
      };
    case layoutAction.UPDATE_EXPAND:
      return {
        ...state,
        expandKey: payload.expandKey,
      };
    default:
      return state;
  }
};
