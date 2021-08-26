import React from "react";
import Sidebar from "./Sidebar";
import Header from './Header';
import styled from "styled-components";
import DashBoardWrapper from "./DashBoardWrapper";
import HeaderName from './HeaderName';

export default function Products() {
  return (
    <React.Fragment>
      <PageWrapper>
        <Sidebar />
        <DashBoardWrapper
          content={
            <React.Fragment>
              <PageContainer>
              <Header/>
              <HeaderName Name={'Products'}/>
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