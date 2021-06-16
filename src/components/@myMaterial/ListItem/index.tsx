import { ListItem } from "@material-ui/core";
import React from "react";
import FastForwardOutlinedIcon from "@material-ui/icons/FastForwardOutlined";

function MListItem(
  props: React.ComponentProps<typeof ListItem>
): React.ReactElement {
  return (
    <>
      <ListItem {...props}>
        {props.children}
        <div className="slide">
          <span className="icon-hover">
            <FastForwardOutlinedIcon />
          </span>
        </div>
      </ListItem>
    </>
  );
}

export default MListItem;
