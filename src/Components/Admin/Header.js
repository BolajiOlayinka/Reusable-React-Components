import React from "react";
import styled, { keyframes } from "styled-components";
import search from "../../assets/icons/icon_search.svg";
import Bell from "../../assets/icons/bell.svg";
import Message from "../../assets/icons/msg.svg";
import Photo from "../../assets/icons/client_img.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper>
      <Form>
        <input type="text" placeholder="Search here ..." />
        <button type="submit">
          <img src={search} alt="Search Dashboard" />
        </button>
      </Form>
      <HeaderRight>
        <Notification>
          <li>
            <StyledLink to="/">
              <img src={Bell} alt="Notification Bell" />
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/">
              <img src={Message} alt="Notification Bell" />
            </StyledLink>
          </li>
        </Notification>
        <ProfileInfo>
          <img src={Photo} alt="Admin Manager" />
        </ProfileInfo>
      </HeaderRight>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 30px;
`;

const Form = styled.form`
  width: 310px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    height: 40px;
    width: 100%;
    padding-left: 50px;
    padding-right: 15px;
    background: transparent;
    border-radius: 30px;
    border: 1px solid rgba(100, 197, 177, 0.6);
    font-weight: 400;
    font-family: "Nunito Sans", sans-serif;
    :active {
      outline: 0;
      border-color: transparent;
    }
    :focus-visible {
      outline: 0;
      border: 1px solid rgba(100, 197, 177, 0.6);
      box-shadow: rgb(80 143 244 / 10%) 0px 12px 30px;
    }
    ::placeholder {
      margin: 0px;
    }
  }
  button {
    position: absolute;
    left: 0px;
    top: 0px;
    height: 100%;
    background: transparent;
    font-size: 12px;
    border: 0px;
    padding-left: 20px;
    padding-right: 13px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Nunito Sans", sans-serif;
`;

const Notification = styled.div`
  margin-right: 30px;
  margin-left: 40px;
  display: flex;
  align-items: center;
  li {
    display: inline-block;
    position: relative;
    list-style: none;
    font-size: 14px;
  }

  img {
    width: 17px;
    height: 17px;
  }
`;
const Pulse = keyframes`
  from {
        transform: scale(0.8, 0.8);
      }
      to {
        transform: scale(1.2, 1.2);
      }
      to {
        transform: scale(1.5, 1.5);
      }
      to {
        transform: scale(1.2, 1.2);
      }
 `;

const StyledLink = styled(Link)`
  position: relative;
  margin-right: 29px;
  text-decoration: none;
  transition: all 0.5s ease 0s;
  color: rgb(0, 123, 255);
  background-color: transparent;
  &:before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    right: -7px;
    border-radius: 50%;
    top: -10px;
    background-color: rgb(100, 197, 177);
    animation: 0.8s ease 0s infinite normal none running ${Pulse};
  }
`;
const ProfileInfo = styled.div``;

