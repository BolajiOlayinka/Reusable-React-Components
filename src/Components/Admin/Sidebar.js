import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import DashIcon from "../../assets/icons/dashboard.svg";
import Invoice from "../../assets/icons/logistics.svg";
import Customers from "../../assets/icons/marketing.svg";
import Payment from "../../assets/icons/products.svg";
import Product from "../../assets/icons/products.svg";
import Marketing from "../../assets/icons/logistics.svg";
import Paper from "../../assets/icons/marketing.svg";
import Logo from "../../assets/Logo.png";
import NtficatIconBlue from "../../assets/icons/bell.svg";
import MessageBlue from "../../assets/icons/msg.svg";
import { Link, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ProfileIcon from "../../assets/icons/client_img.png";

export default function Sidebar() {
    const [activeDashBoard, setActiveDashBoard] = useState("");
    const [dashboardBackground, setDashBoardBackground] = useState("");
    const [activeInvoice, setActiveInvoice] = useState("");
    const [invoiceBackground, setInvoiceBackground] = useState("");
    const [activeCustomers, setActiveCustomers] = useState("");
    const [customersBackground, setcustomersBackground] = useState("");
    const [activePayment, setActivePayment] = useState("");
    const [paymentBackground, setPaymentBackground] = useState("");
    const [activeProduct, setActiveProduct] = useState("");
    const [ProductBackground, setProductBackground] = useState("");
    const [activeMarketing, setActiveMarketing] = useState("");
    const [MarketingBackground, setMarketingBackground] = useState("");
    const [activeLogistics, setActiveLogistics] = useState("");
    const [LogisticsBackground, setLogisticsBackground] = useState("");
  
    const handleActiveDashboard = () => {
      setDashBoardBackground("#F7F4FE");
      setActiveDashBoard(`5px solid var(--mainBlue)`);
      setActiveInvoice("5px solid transparent");
      setInvoiceBackground(`transparent`);
      setActiveCustomers("5px solid transparent");
      setcustomersBackground(`transparent`);
      setActivePayment("5px solid transparent");
      setPaymentBackground(`transparent`);
      setActiveProduct("5px solid transparent");
      setProductBackground(`transparent`);
      setActiveMarketing("5px solid transparent");
      setMarketingBackground(`transparent`);
      setActiveLogistics("5px solid transparent");
      setLogisticsBackground(`transparent`);
    };
    const handleActiveInvoice = () => {
      setActiveDashBoard(`5px solid transparent`);
      setDashBoardBackground("transparent");
      setActiveInvoice("5px solid var(--mainBlue)");
      setInvoiceBackground(`#F7F4FE`);
      setActiveCustomers("5px solid transparent");
      setcustomersBackground(`transparent`);
      setActivePayment("5px solid transparent");
      setPaymentBackground(`transparent`);
      setActiveProduct("5px solid transparent");
      setProductBackground(`transparent`);
      setActiveMarketing("5px solid transparent");
      setMarketingBackground(`transparent`);
      setActiveLogistics("5px solid transparent");
      setLogisticsBackground(`transparent`);
    };
    const handleActiveCustomers = () => {
      setActiveDashBoard(`5px solid transparent`);
      setDashBoardBackground("transparent");
      setActiveInvoice("5px solid transparent");
      setInvoiceBackground(`transparent`);
      setActiveCustomers("5px solid var(--mainBlue)");
      setcustomersBackground(`#F7F4FE`);
      setActivePayment("5px solid transparent");
      setPaymentBackground(`transparent`);
      setActiveProduct("5px solid transparent");
      setProductBackground(`transparent`);
      setActiveMarketing("5px solid transparent");
      setMarketingBackground(`transparent`);
      setActiveLogistics("5px solid transparent");
      setLogisticsBackground(`transparent`);
    };
    const handleActivePayment = () => {
      setActiveDashBoard(`5px solid transparent`);
      setDashBoardBackground("transparent");
      setActiveInvoice("5px solid transparent");
      setInvoiceBackground(`transparent`);
      setActiveCustomers("5px solid transparent");
      setcustomersBackground(`transparent`);
      setActivePayment("5px solid var(--mainBlue)");
      setPaymentBackground(`#F7F4FE`);
      setActiveProduct("5px solid transparent");
      setProductBackground(`transparent`);
      setActiveMarketing("5px solid transparent");
      setMarketingBackground(`transparent`);
      setActiveLogistics("5px solid transparent");
      setLogisticsBackground(`transparent`);
    };
    const handleActiveProduct = () => {
      setActiveDashBoard(`5px solid transparent`);
      setDashBoardBackground("transparent");
      setActiveInvoice("5px solid transparent");
      setInvoiceBackground(`transparent`);
      setActiveCustomers("5px solid transparent");
      setcustomersBackground(`transparent`);
      setActivePayment("5px solid transparent");
      setPaymentBackground(`transparent`);
      setActiveProduct("5px solid var(--mainBlue)");
      setProductBackground(`#F7F4FE`);
      setActiveMarketing("5px solid transparent");
      setMarketingBackground(`transparent`);
      setActiveLogistics("5px solid transparent");
      setLogisticsBackground(`transparent`);
    };
    const handleActiveMarketing = () => {
      setActiveDashBoard(`5px solid transparent`);
      setDashBoardBackground("transparent");
      setActiveInvoice("5px solid transparent");
      setInvoiceBackground(`transparent`);
      setActiveCustomers("5px solid transparent");
      setcustomersBackground(`transparent`);
      setActivePayment("5px solid transparent");
      setPaymentBackground(`transparent`);
      setActiveProduct("5px solid transparent");
      setProductBackground(`transparent`);
      setActiveMarketing("5px solid var(--mainBlue)");
      setMarketingBackground(`#F7F4FE`);
      setActiveLogistics("5px solid transparent");
      setLogisticsBackground(`transparent`);
    };
    const handleActiveLogistics = () => {
      setActiveDashBoard(`5px solid transparent`);
      setDashBoardBackground("transparent");
      setActiveInvoice("5px solid transparent");
      setInvoiceBackground(`transparent`);
      setActiveCustomers("5px solid transparent");
      setcustomersBackground(`transparent`);
      setActivePayment("5px solid transparent");
      setPaymentBackground(`transparent`);
      setActiveProduct("5px solid transparent");
      setProductBackground(`transparent`);
      setActiveMarketing("5px solid transparent");
      setMarketingBackground(`transparent`);
      setActiveLogistics("5px solid var(--mainBlue)");
      setLogisticsBackground(`#F7F4FE`);
    };
    const location = useLocation();
    useEffect(() => {
      if (location.pathname === "/dashboard") {
        handleActiveDashboard();
      } else if (location.pathname === "/invoice") {
        handleActiveInvoice();
      } else if (location.pathname === "/customer") {
        handleActiveCustomers();
      } else if (location.pathname === "/payment") {
        handleActivePayment();
      } else if (location.pathname === "/product") {
        handleActiveProduct();
      } else if (location.pathname === "/marketing") {
        handleActiveMarketing();
      } else if (location.pathname === "/Logistics") {
        handleActiveLogistics();
      }
    }, [location.pathname]);
    const [open, setOpen] = useState(false);
    const history = useHistory();
    return (
        <Wrapper>
<SidebarWrapper open={open}>
        <LogoSection>
          <img src={Logo} alt="Logo" />
        </LogoSection>
        <NotificationSection>
          <NotificationContainer to="/">
            <div>
              <img src={MessageBlue} alt="Message" />
              <SuperScript>4</SuperScript>
            </div>
            <p>Messages</p>
          </NotificationContainer>
          <NotificationContainer to="/">
            <div>
              <img src={NtficatIconBlue} alt="Message" />
              <SuperScript>12</SuperScript>
            </div>

            <p>Notifications</p>
          </NotificationContainer>
        </NotificationSection>

        <SideNavs
          onClick={() => history.push("/dashboard")}
          activeDashBoard={activeDashBoard}
          dashboardBackground={dashboardBackground}
        >
          <div>
            <img src={DashIcon} alt="Dashboard" />
          </div>
          <div>Dashboard</div>
        </SideNavs>

        <SideNavs
          onClick={() => history.push("/invoice")}
          activeInvoice={activeInvoice}
          invoiceBackground={invoiceBackground}
        >
          <div>
            <img src={Paper} alt="Invoice" />
          </div>
          <div>Invoice</div>
        </SideNavs>

        <SideNavs
          onClick={() => history.push("/customer")}
          activeCustomers={activeCustomers}
          customersBackground={customersBackground}
        >
          <div>
            <img src={Customers} alt="Customers" />
          </div>
          <div>Customers</div>
        </SideNavs>

        <SideNavs
          onClick={() => history.push("/payment")}
          activePayment={activePayment}
          paymentBackground={paymentBackground}
        >
          <div>
            <img src={Payment} alt="Payment" />
          </div>
          <div>Payment</div>
        </SideNavs>

        <SideNavs
          onClick={() => history.push("/product")}
          activeProduct={activeProduct}
          ProductBackground={ProductBackground}
        >
          <div>
            <img src={Product} alt="Product" />
          </div>
          <div>Product</div>
        </SideNavs>

        <SideNavs
          onClick={() => history.push("/marketing")}
          activeMarketing={activeMarketing}
          MarketingBackground={MarketingBackground}
        >
          <div>
            <img src={Marketing} alt="Marketing Tracking" />
          </div>
          <div>Marketing</div>
        </SideNavs>

        <SideNavs
          onClick={() => history.push("/logistics")}
          activeLogistics={activeLogistics}
          LogisticsBackground={LogisticsBackground}
        >
          <div>
            <img src={Invoice} alt="Invoice Finance" />
          </div>
          <div>Logistics</div>
        </SideNavs>

        <ProfileLink to="/">
          <ProfileContainer>
            <img src={ProfileIcon} alt="Profile Icon" />
            <div>
              Jerry Rawlings
              <p>Exporter</p>
            </div>
          </ProfileContainer>
        </ProfileLink>
      </SidebarWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div `
// height: 100vh;
    left: 0px;
    top: 0px;
    padding-bottom: 50px;
    position: fixed;
    width: 270px;
    z-index: 999;
    overflow: hidden auto;
    transition: all 0.5s ease 0s;
    background: rgb(255, 255, 255);
    box-shadow: rgb(80 143 244 / 10%) 0px 12px 30px;

    @media only screen and (min-width: 992px) and (max-width: 1200px){
 width: 20%;
    }
@media (max-width: 991px)
    // left: -280px;
    transition: all 0.5s ease 0s;
    top: 0px;
    width: 280px;
    background: rgb(255, 255, 255);
    // position:relative;
    // display:none;
}
   
}
`
const SidebarWrapper = styled.div`
  background-color: white;
  box-shadow: 4px 4px 9px rgba(48, 35, 97, 0.06);
  border-radius: 40px 0px 0px 0px;
//   padding-top: 100px;
  position: relative;
  z-index: 3;
  width: 265px;
  height: 100vh;
  padding-bottom: 40px;
  @media (max-width: 991px) {
    height: 100%;
    border-radius: 0px;
    position: absolute;
    padding-top: 20px;
    width: 284px;
    display: ${({ open }) => (open ? "block" : "none")};
    transform: ${({ open }) => (open ? "transfromX(100%)" : "transformX(0%)")};
    translate: all 0.3s linear;
  }
`;
const LogoSection = styled.div`
  text-align:center;
  padding-top:30px;
  padding-bottom:20px;
  margin-bottom:30px;
  img{
    width: 170px;   
  }
  @media (max-width: 1024px) {
    width: 190px;
    img {
      padding-left: 10px;
    }
  }
  
//   @media (max-width: 991px) {
//     padding-left: 16px;
//   }
`;
const NotificationSection = styled.div`
  position: relative;
  padding-right: 34px;
  background-color: #f7f7f7;
  img {
    width: 20px;
    height: 22px;
    z-index: 1;
    position: relative;
    :first-child {
    }
    :nth-child(2) {
      width: 20px;
    }
  }
  @media (max-width: 1024px) {
    padding-right: 14px;
  }
  @media (min-width: 991.1px) {
    display: none;
  }
  @media (max-width: 991px) {
    padding-left: 26px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;
const NotificationContainer = styled(Link)`
  display: flex;
  text-decoration: none;
  width: 100%;
  @media (max-width: 991px) {
    height: 49px;
    align-items: center;
    p {
      padding-left: 16px;
    }
    div {
      width: 30px;
      display: flex;
    }
  }
`;
const SuperScript = styled.div`
  height: 14px;
  text-align: center;
  position: relative;
  z-index: 2;
  color: white;
  font-size: 12px;
  margin-left: -12px;
  margin-top: -10px;
  padding: 1px 6px;
  border-radius: 8px;
  background-color: rgba(245, 56, 85, 1);
`;
// const SideLink = styled(Link)`
//   font-size: 16px;
//   color: rgba(48, 35, 91, 0.8);
//   text-decoration: none;
//   font-weight: 400;
// `;
const SideNavs = styled.div`
  width: 260px;
  border-left: ${(props) => props.activeDashBoard} !important;
  border-left: ${(props) => props.activeInvoice} !important;
  border-left: ${(props) => props.activeCustomers} !important;
  border-left: ${(props) => props.activePayment} !important;
  border-left: ${(props) => props.activeProduct} !important;
  border-left: ${(props) => props.activeMarketing} !important;
  border-left: ${(props) => props.activeLogistics} !important;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: ${(props) => props.dashboardBackground} !important;
  background-color: ${(props) => props.invoiceBackground} !important;
  background-color: ${(props) => props.customersBackground} !important;
  background-color: ${(props) => props.paymentBackground};
  background-color: ${(props) => props.ProductBackground};
  background-color: ${(props) => props.MarketingBackground};
  background-color: ${(props) => props.LogisticsBackground};
  color: #30235b;
  :hover {
    cursor: pointer;
  }
  div {
    :nth-child(2) {
      width: 150px;
    }
  }
  img {
    width: 32px;
    height: 32px;
    padding-right: 14px;
    text-align: center;
  }
`;
const ProfileLink = styled(Link)`
  @media (min-width: 991px) {
    display: none;
  }

  text-decoration: none;
`;
const ProfileContainer = styled.div`
  display: flex;
  padding-top: 84px;
  padding-left: 32px;
  img {
    height: 33px;
    width: 27px;
  }
  div {
    width: 184px;
    color: #30235b;
    padding-left: 16px;
    font-size: 16px;
  }
  p {
    margin-bottom: 0px;
    margin-top: 2px;
    opacity: 0.6;
    font-size: 14px;
  }
`;
