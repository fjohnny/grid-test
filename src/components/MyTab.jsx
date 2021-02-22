import React from "react";
import { Button } from "semantic-ui-react";

const MyTab = (props) => {
  return (
    <div>
      <Button.Group>
        <Button positive={props.index === 0} onClick={() => props.setIndex(0)}>
          Grid 1
        </Button>
        <Button positive={props.index === 1} onClick={() => props.setIndex(1)}>
          Grid 2
        </Button>
      </Button.Group>
    </div>
  );
};

export default MyTab;
