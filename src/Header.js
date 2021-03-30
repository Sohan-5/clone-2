import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn'
import  {Link} from "react-router-dom";

function Header({signOut,user ,cartItems}) {

    const getCount=()=>{
        let count =0;
        //loop
        cartItems.forEach((item)=>{
            count+=item.product.quantity;
        })       
        
        return count;
    }

    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"}/>
                </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <LocationOnIcon />  
               <HeaderOption>  
                    <OptionLineOne>Hello,</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderOption>   
            </HeaderOptionAddress>   

            <HeaderSearch>
                <HeaderSearchInput type='text'/>

                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>
            
            <HeaderNavItems>
                <HeaderOption onClick={signOut}>                    
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo>Account & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>                    
                    <OptionLineOne>Returns,</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo> 
                </HeaderOption>

                <HeaderOptionCart>
                    
                    <Link to="/cart">       
                        <ShoppingBasketIcon />
                        <CartCount>{getCount()}</CartCount>
                    </Link>        
                </HeaderOptionCart>
                
                
            </HeaderNavItems>

        </Container>
    )
}

export default Header

const HeaderLogo=styled.div`
    img{
        width:100px;
        margin-left:11px;
    }
`

const Container=styled.div`
    height:60px;
    background-color: #0F1111;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;

`


const HeaderOptionAddress=styled.div`
    padding-left:9px;
    display:flex;
    align-items:center;
`

const OptionLineOne=styled.div``


const OptionLineTwo=styled.div`
    font-weight: 700;
`


const HeaderSearch=styled.div`
  display:flex;
  flex-grow:1;
  height: 40px;
  border-radius :4px;
  overflow:hidden;
  margin-left:4px;
  background-color:white;
  :focus-within{
      box-shadow: 0 0 0 3px #f90
  }
`


const HeaderSearchInput=styled.input`
    flex-grow:1;
     border:0;
    :focus{
        outline:none;
    }
`

const HeaderSearchIconContainer=styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const HeaderOptionCart=styled.div`
    display:flex;
     
    a{
        display:flex;
        align-items:center;
        padding:0px 9px 0px 0px;
        color:white;
        text-decoration:none;
    }   
`

const HeaderOption=styled.div`
    padding:10px 9px 10px 9px;
    cursor: pointer;
    
`

const HeaderNavItems=styled.div`
    display:flex;
`

const CartCount=styled.div`
    padding-left:4px;
`