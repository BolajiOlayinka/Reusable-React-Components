import React from "react";
import styled from "styled-components";

export default function DashBoardWrapper(props) {
  return <Wrapper>{props.content}</Wrapper>;
}

const Wrapper = styled.div`
  width: calc(100vw - 280px);
  margin-left:270px;

  @media (max-width: 991px){
      width:100%;
      padding-left:0px;
  }
`;

