import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
// import { useHistory } from "react-router-dom";
import DashboardHeader from "../Snippets/DashboardHeader";
import DashBoardWrapper from "../Snippets/DashBoardWrapper";
import DashboardSidebar from "../Snippets/DashboardSidebar";
import SubHeader from "../Snippets/SubHeader";
import animateScrollTo from "animated-scroll-to";
import { UserContext } from "../../Context/userContext";
import { Redirect } from "react-router-dom";
import Paystack from "./PaystackModal";
import BridgerIcon from "../../assets/logo-colored.svg";
import mastercard from "../../assets/paymenticons/mastercard.svg";
import visa from "../../assets/paymenticons/visa.svg";
import alipay from "../../assets/paymenticons/alipay.svg";
import amex from "../../assets/paymenticons/amex.svg";
import diners from "../../assets/paymenticons/diners.svg";
import discover from "../../assets/paymenticons/discover.svg";
import elo from "../../assets/paymenticons/elo.svg";
import hiper from "../../assets/paymenticons/hiper.svg";
import hipercard from "../../assets/paymenticons/hipercard.svg";
import jcb from "../../assets/paymenticons/jcb.svg";
import maestro from "../../assets/paymenticons/maestro.svg";
import paypal from "../../assets/paymenticons/paypal.svg";
import unionpay from "../../assets/paymenticons/unionpay.svg";
import creditCardType from "credit-card-type";
// import { faUserAltSlash } from "@fortawesome/free-solid-svg-icons";
// import * as constants from "../../constants/index.js";

function Wallet() {
  const { userData } = useContext(UserContext);
  console.log(userData)
  const [topupmodal, setTopUpModal] = useState(false);
  const [cardModal, setCardModal] = useState(false);
  const [amount, setAmount]= useState('');
  const [cardNumber, setCardNumber]= useState('');
  const [cardExpiry, setCardExpiry]= useState('');
  const [CardCVV, setCardCVV]= useState('');
  const [cardInvalid, setCardInvalid]=useState(false);
  const [paymenticon,setPaymentIcon]=useState('');
  const [lengthError,setLengthError] = useState(false);
  const [cardLengthErr,setCardLengthErr] = useState(true);
  const toggleTop = () => setTopUpModal(!topupmodal);
  const toggleCardModal = () => setCardModal(!cardModal);

  
  // if( Number(amount) < 1000){
  //   setLengthError('Amount less than N 1000')
  // }
  const handleAmountChange = (e)=>{
    const {value} = e.target
    setAmount(value)
    if(value < 1000){
      setLengthError(true)
    }else{
      setLengthError(false)
    }
  }
  const handleCardNumberChange = (e)=>{
    const {value} = e.target
    setCardNumber(value)
    if(value.length<1){
      setCardLengthErr(true)
    }else{
      setCardLengthErr(false)
    }
    const visaCards = creditCardType(`${value}`);
    if(visaCards[0]===undefined){
      setCardInvalid(true);
    }else{
      setCardInvalid(false)
    }
    if(value.length && visaCards[0]!==undefined){
      console.log(visaCards[0].type)
    if (visaCards[0].type==='visa'){
      setPaymentIcon(visa)
    }else if(visaCards[0].type==='mastercard'){
      setPaymentIcon(mastercard)
    }else if(visaCards[0].type==='alipay'){
      setPaymentIcon(alipay)
    }else if(visaCards[0].type==='american-express'){
      setPaymentIcon(amex)
    }else if(visaCards[0].type==='diners'){
      setPaymentIcon(diners)
    }else if(visaCards[0].type==='discover'){
      setPaymentIcon(discover)
    }else if (visaCards[0].type==='elo'){
      setPaymentIcon(elo)
    }else if(visaCards[0].type==='hiper'){
      setPaymentIcon(hiper)
    }else if(visaCards[0].type==='hipercard'){
      setPaymentIcon(hipercard)
    }else if(visaCards[0].type==='jcb'){
      setPaymentIcon(jcb)
    }else if(visaCards[0].type==='maestro'){
      setPaymentIcon(maestro)
    }else if (visaCards[0].type==='paypal'){
      setPaymentIcon(paypal)
    }else if (visaCards[0].type==='unionpay'){
      setPaymentIcon(unionpay)
    }else{
      setPaymentIcon('')
    }
    }
  }
  const handleCardExpiry = (e)=>{
    const {value} = e.target
    const newValue=value.replace(
      /[^0-9]/g, '' // To allow only numbers
  ).replace(
      /^([2-9])$/g, '0$1' // To handle 3 > 03
  ).replace(
      /^(1{1})([3-9]{1})$/g, '0$1/$2' // 13 > 01/3
  ).replace(
      /^0{1,}/g, '0' // To handle 00 > 0
  ).replace(
      /^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2' // To handle 113 > 11/3
  );
    setCardExpiry(newValue)
  }
  const handleCVV = (e)=>{
    const {value} = e.target
    setCardCVV(value)
    
  }
  
  // console.log(userData)
  useEffect(() => {
    animateScrollTo();
    
    // constants.httprequeset.get("/wallets/")
    // .then((res)=>{
    //   console.log(res)

    // }).catch((err)=>{
    //   console.log(err.response)
    //   // if(err.response.status===401){
    //   //   this.setState({redirecthome:true})
    //   // }
    // });
  }, []);
  if (userData.fiatWallet === undefined) {
    return <Redirect to="/dashboard" />;
  } else {
    return (
      <React.Fragment>
        <DashboardHeader />
        <DashBoardWrapper
          content={<DashboardSidebar />}
          page={
            <React.Fragment>
              <PageContainer>
                <SubHeader
                  title={"Wallet"}
                  subTitle={
                    "Fund your wallet for faster investing and earn returns"
                  }
                />
                <PageWrapper>
                  <StartTitle>Wallet</StartTitle>
                  <StartWrapper>
                    <Cards>
                      <Card
                        style={{ border: "3px solid rgba(0, 0, 0, 0.13)" }}
                        className="topUp"
                        onClick={toggleTop}
                      >
                        <div>
                          <CardTitle>Top up Wallet</CardTitle>
                        </div>
                        {topupmodal ? (
                          <TopupModal>
                            <ModalContent onClick={toggleCardModal}>
                              <h4>via Card</h4>
                              <p>1.5% Capped at N2000</p>
                            </ModalContent>
                            <ModalContent>
                              <h4>via Bitcoin</h4>
                              <p>Transfer to our Bitcoin wallet</p>
                            </ModalContent>
                          </TopupModal>
                        ) : null}
                      </Card>
                      <Card style={{ border: "3px solid var(--fontBlue)" }}>
                        <div>
                          <CardSub>
                            {userData && userData !== undefined
                              ? userData.fiatWallet["0"].availableBalance
                              : null}
                          </CardSub>
                          <CardTitle>Available Balance</CardTitle>
                        </div>
                      </Card>
                      <Card style={{ border: "3px solid #337a27" }}>
                        <div>
                          <CardSub>{userData?.wallet?.bonusBalance}</CardSub>
                          <CardTitle>Bonus balance</CardTitle>
                        </div>
                      </Card>
                      <Card style={{ border: "3px solid #7a2727" }}>
                        <div>
                          <CardTitle>Total Earned</CardTitle>
                        </div>
                      </Card>
                    </Cards>
                    <WithdrawButton>Withdraw</WithdrawButton>
                  </StartWrapper>
                  <hr />
                  <Financing>
                    <LeftFinancing>
                      <h2>Your Recent Transactions</h2>
                      <p>Here's a list of your most recent transactions.</p>
                    </LeftFinancing>
                  </Financing>
                  <hr />
                </PageWrapper>
              </PageContainer>
            </React.Fragment>
          }
        ></DashBoardWrapper>
        {cardModal ? (
          <Paystack
            modal={cardModal}
            toggle={toggleCardModal}
            modalheading={
              <CardHeading>
                <div>
                  <img src={BridgerIcon} alt="Bridger icon" />
                </div>
                <h4>Pay: N {amount}</h4>
              </CardHeading>
            }
            modalbody={
              <CardForm>
                <AmountSec>
                  <label>Enter Top up Amount</label>
                  <br />
                  <input type="tel" placeholder="Min Amount: N1000" onChange={handleAmountChange}/>
                </AmountSec>
                {lengthError ? <Error>Please Amount should be more than N 1000</Error> :''}
               
                <SubHeading> Enter Card Details to Pay</SubHeading>
                <FormGroup>
                  <label>Card Number</label>
                  <br />

                  <input type="number" placeholder="0000 0000 0000 0000" onChange={handleCardNumberChange}/>
                  {cardInvalid || cardLengthErr ? null: <img src={paymenticon} alt="payment icons"/>}
                  
                  

                </FormGroup>
                {cardInvalid ? <Error>Card Details Invalid</Error> :null}
                <FormGroupFlex>
                  <Group>
                    <label>Card Expiry</label>
                    <br />
                    <input type="text" placeholder="MM/YY" onChange={handleCardExpiry} value={cardExpiry} maxLength="5"/>
                  </Group>
                  <Group>
                    <label>CVV</label>
                    <br />
                    <input type="tel" placeholder="123" onChange={handleCVV} maxLength="3"/>
                  </Group>
                </FormGroupFlex>
                <Submit disabled={lengthError ||cardLengthErr|| cardInvalid}>Pay Now</Submit>
              </CardForm>
            }
          />
        ) : null}
      </React.Fragment>
    );
  }
}
export default Wallet;

const StartTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: var(--fontBVlue);
  opacity: 0.8;
  padding-top: 24px;
  padding-left: 24px;
`;
const PageContainer = styled.div`
  width: calc(100vw - 265px);
  position: relative;
  z-index: 10;
  margin-left: 256px;
  padding-top: 40px;
  padding-left: 25px;
  @media (max-width: 991px) {
    width: 500px;
    margin-left: 0px;
    margin: auto;
  }
  @media (max-width: 576px) {
    width: 326px;
    padding-left: 0px;
    margin: auto;
  }
`;

const PageWrapper = styled.div`
  background-color: white;
  position: relative;
  border-radius: 40px 40px 0px 0px;
  padding-bottom: 155px;
  hr {
    margin-left: 24px;
  }
  @media (min-width: 1336px) {
    // width:1050px;
  }
  @media (max-width: 1335.9px) {
    background-color: transparent;
    width: 950px;
    margin: auto;
  }
  @media (max-width: 1240px) {
    width: calc(100vw - 265px);
  }

  @media (max-width: 991px) {
    width: 100%;
  }
`;
const StartWrapper = styled.div`
  padding-top: 34px;
  // display: flex;
  width: 888px;
  margin: auto;
  // justify-content: space-between;
  @media (max-width: 1335.9px) {
    width: 777px;
  }
  @media (max-width: 1240px) {
    padding-top: 42px;
    width: 690px;
  }
  @media (max-width: 991px) {
    width: 500px;
    margin: auto;
  }
  @media (max-width: 991px) {
    width: 326px;
    margin: auto;
    flex-direction: column;
  }
`;
const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
  .topUp {
    :hover {
      background-color: #4f3a3a;
      color: white;
      cursor: pointer;
      h4 {
        color: var(--mainBlue);
      }
    }
  }
`;

const Card = styled.div`
  width: 200px;
  height: 133px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 12px;
  color: var(--fontColor);
  position: relative;
  @media (max-width: 1336px) {
    width: 180px;
    height: 120px;
  }
  @media (max-width: 1240px) {
    padding-top: 28px;
    width: 150px;
    height: 120px;
  }
  @media (max-width: 991px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 12px;
  @media (max-width: 1240px) {
    width: 100px;
  }
`;
const CardSub = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
`;

const Financing = styled.div`
  padding-top: 37px;
  padding-bottom: 37px;
  justify-content: space-between;
  padding-left: 24px;
`;
const LeftFinancing = styled.div`
  width: 60%;
  h2 {
    color: var(--fontColor);
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    padding-bottom: 11px;
  }
  p {
    color: var(--fontColor);
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width: 991px) {
    width: 100%;
  }
`;
const WithdrawButton = styled.button`
  display: flex;
  align-items: flex-end;
  margin-left: auto;
  background-color: var(--mainBlue);
  color: white;
  border-radius: 5px;
  border-color: transparent;
  padding: 8px 28px;
  margin-top: 20px;
  margin-bottom: 100px;
`;
const TopupModal = styled.div`
  width: 100%;
  position: absolute;
  background-color: blue;
  top: 140px;
  background: #ffffff;
  border: 0.5px solid #fff9f9;
  box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
`;
const ModalContent = styled.div`
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
  h4 {
    font-weight: bold;
    font-size: 17px;
    line-height: 21px;
    margin-bottom: 8px;
    color: var(--mainBlue);
    // :hover{
    //   color:var(--mainBlue);
    // }
  }
  p {
    font-weight: bold;
    font-size: 12px;
    margin-bottom: 0px;
    color: rgba(10, 10, 11, 0.4);
  }
  :hover {
    background-color: #ccc;
    cursor: pointer;
  }
`;
const CardHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 150px;
    height: 30px;
    position: relative;
    z-index: 5;
    display: block !important;
  }
  div {
    width: 30px;
    height: 30px;
    position: relative;
    z-index: 5;
  }
  h4 {
    margin-bottom: 0px;
    font-size: 16px;
    color: rgba(10, 10, 11, 0.4);
  }
`;
const CardForm = styled.form`
  padding-bottom: 30px;
`;
const AmountSec = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  input {
    width: 300px;
    // height:40px;
    background: #ffffff;
    padding-top: 20px;
    padding-bottom: 20px;
    border: 0.5px solid #fff9f9;
    box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    margin-top: 10px;
    padding-left: 5px;
  }
  label {
    font-size: 16px;
  }
`;
const SubHeading = styled.div`
  text-align: center;
  font-size: 17px;
  padding-top: 20px;
`;
const FormGroup = styled.div`
  position: relative;
  width: 100%;
  label {
    position: absolute;
    top: 30px;
    left: 10px;
  }
  input {
    width: 100%;
    // height:40px;
    padding-top: 30px;
    padding-bottom: 5px;
    padding-left: 10px;
    border: 0.5px solid #fff9f9;
    box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
  img{
    width;60px;
    height:20px;
    position:absolute;
    right:20px;
    top:42px;
    // margin-left:auto;
  }
`;
const Error = styled.p `
color:red;
font-size:16px;
`
const Group = styled.div`
  position: relative;
  width: 45%;
  label {
    position: absolute;
    top: 30px;
    left: 10px;
  }
  input {
    width: 100%;
    // height:40px;
    padding-top: 30px;
    padding-bottom: 5px;
    padding-left: 10px;
    border: 0.5px solid #fff9f9;
    box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
  }
`;
const FormGroupFlex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Submit = styled.button`
background-color:${({ disabled }) => disabled ? `#ccc`:`green`};
color:white;
font-size:18px;
height:60px;
width:100%;
display:flex;
align-items:center;
justify-content:center;
border: 0.5px solid #fff9f9;
box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.25);
margin-top:25px;
`