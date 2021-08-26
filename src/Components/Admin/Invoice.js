import React from "react";
import Sidebar from "./Sidebar";
import Header from './Header';
import styled from "styled-components";
import DashBoardWrapper from "./DashBoardWrapper";
import HeaderName from './HeaderName';

export default function Invoice() {
  return (
    <React.Fragment>
      <PageWrapper>
        <Sidebar />
        <DashBoardWrapper
          content={
            <React.Fragment>
              <PageContainer>
              <Header/>
              <HeaderName Name={'Invoice'}/>
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