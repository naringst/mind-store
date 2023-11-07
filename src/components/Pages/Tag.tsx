import React from "react";
type Props = {
  name: string;
};

export default function Tag(props: Props) {
  return <div>{props.name}</div>;
}
