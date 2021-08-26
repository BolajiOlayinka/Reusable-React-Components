import React from "react";
import Sidebar from "./Sidebar";
import Header from './Header';
import styled from "styled-components";
import DashBoardWrapper from "./DashBoardWrapper";
import HeaderName from './HeaderName';

export default function Marketing() {
  return (
    <React.Fragment>
      <PageWrapper>
        <Sidebar />
        <DashBoardWrapper
          content={
            <React.Fragment>
              <PageContainer>
              <Header/>
              <HeaderName Name={'Marketing'}/>
              </PageContainer>
              
            </React.Fragment>
          }
        />
      </PageWrapper>
    </React.Fragment>
  );
}

const PageWrapper = styled.div`
width:100vw;
  display: flex;
`;
const PageContainer = styled.div `
width:100%;

`