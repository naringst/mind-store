import React from "react";
import { PagesContainer } from "./Pages.styles";
type Props = {
  name: string;
};

export default function Tag(props: Props) {
  return <PagesContainer>{props.name} </PagesContainer>;
}
