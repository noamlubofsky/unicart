import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import AccountInfo from "./AccountInfo";
import ShippingInfo from "./ShippingInfo"
import PaymentInfo from "./PaymentInfo";

function AccountPage({user, setUser}) {
    let history = useHistory();
    const [account, setAccount] = useState(false);
    const [payment, setPayment] = useState(false);
    const [shipping, setShipping] = useState(false);

    function handleLogout() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setUser(null);
            // history.push("/")
        }
        });
    }

    const showAccountInfo = () => {
        setPayment(false)
        setShipping(false)
        setAccount(true)
    }

    const showPaymentInfo = () => {
        setAccount(false)
        setShipping(false)
        setPayment(true)
    }

    const showShippingInfo = () => {
        setAccount(false)
        setPayment(false)
        setShipping(true)
    }

return(
    <AccountContainer>
    <div>
    <h1>Hello, {user.username}!</h1>
    <br></br>

<Container>
    <span>
        <Button onClick={showAccountInfo}>Account Info</Button>
        <Button onClick={showPaymentInfo}>Payment Info</Button>
        <Button onClick={showShippingInfo}>Shipping Info</Button>
        <Button onClick={handleLogout}>Logout</Button>
    </span>
</Container>

{!account ? null :
<div>
 <AccountInfo user={user}/>
    </div>
}
{!shipping ? null : 
<div>
<ShippingInfo user={user}/>
    </div>
}
{!payment ? null :
<div>
<PaymentInfo user={user}/>
    </div>
}

<br></br>

    </div>
    </AccountContainer>
)
}

const NavButton = styled.button`
  cursor: pointer;
  font-size: 1.5rem;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 8px 16px;
  text-decoration: none;
`;

const Button = styled.button`
  border-radius: 0;
  height: 15vh;
  width: 30vh;
  &:hover {
      width: 35vh;
  }
`;

const AccountContainer = styled.div`
align-items: center;
justify-content: center;
margin-bottom: 450px;
margin-left: auto;
margin-right: auto;
width: 80em;
// margin-left: 40%;
`;

const Container = styled.div`
// align-items: center;
// justify-content: center;
// margin-left: auto;
// margin-right: auto;
// width: 60em

// margin-left: 40%;
`;

export default AccountPage;