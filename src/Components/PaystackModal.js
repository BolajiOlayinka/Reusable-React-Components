import React, {useState, useEffect, useRef} from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import close from "../../assets/icons/close.svg";
import back from "../../assets/icons/back.svg";


function Modal(props) {
  const [style, setStyle] = useState("");
  const myRef = useRef()
  useEffect(() => {
    if(myRef?.current?.clientHeight){
      const height = myRef?.current?.clientHeight + 300;
      setStyle(height)
  }
  }, [])
    
    
  return ReactDom.createPortal(
    <>
      {props.modal ? (
        <ModalContainer>
          <ModalBodyClose height={`${style}px`} onClick={props.toggle}></ModalBodyClose>
          <ModalDiv ref={myRef}>
            <ModalClose onClick={props.toggle}>
              <img src={close} alt="close tag" />
            </ModalClose>
            <ModalHeading>
              <img onClick={props.toggle} src={back} alt="back" />
              {props.modalheading}
            </ModalHeading>
            {props.modalbody}
            {props.modalButtons}
           
            
          </ModalDiv>
        </ModalContainer>
      ) : null}
    </>,
    document.getElementById("portal")
  );
}

const ModalBodyClose = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height: ${props=> props.height};
  z-index: 1;
  background: rgba(79, 86, 101, 0.2);
  backdrop-filter: blur(12px);
  @media (max-width: 768px) {
    display: none;
  }
`;
const ModalContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  @media (max-width: 768px) {
    width: 100%;
    // overflow-y:hidden ;
  }
`;
const ModalDiv = styled.form`
  z-index: 2;
  max-width: 450px;
  width: 100%;
  background-color: #fff;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  padding: 24px;
  border-radius: 16px;
  @media (max-width: 991px) {
    max-width: 660px;
  }
  @media (max-width: 768px) {
    max-width: none;

    top: 0px;
    left: 0px;
    transform: translateX(0px);
    border-radius: 0px;
    min-height: 100vh;
  }
`;
const ModalClose = styled.button`
  display: grid;
  place-content: center;
  width: 44px;
  height: 44px;
  backgroundcolor: #fff;
  border-radius: 50%;
  border: none;
  position: fixed;
  right: -50px;
  top: -50px;
`;




const ModalHeading = styled.div`
  color: #0b132a;
  margin: 0px;
  font-size: 32px;
  padding: 0px 0px 16px;
  border-bottom: 1px solid rgba(53, 76, 109, 0.2);
  img {
    display: none;
  }

  @media (max-width: 768px) {
    font-size: 22px;
    display: flex;
    // justify-content:space-between;
    img {
      margin-right: 25px;
      display: flex;
    }
  }
`;

export default Modal;
