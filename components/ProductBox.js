import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
const ProductWrapper = styled.div`

`;
const WhiteBox = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height: 120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
        max-width: 100%;
        max-height: 80px;
    }
`;
const Title = styled(Link)`
    font-weight:bold;
    font-size: .8rem;
    margin:0;
    color:inherit;
    text-decoration:none;
`;
const ProductInfoBox = styled.div`
    margin-top: 5px;
`;

const PriceRow = styled.div`
    display:block;
    align-items:center;
    justify-content: space-between;
    margin-top: 3px;
    @media screen and (min-width:768px){
        display: flex;
        gap: 5px;
    }
`;

const Price = styled.div`
    font-size: .8rem;
    font-weight: 600;
    text-align:right;
    @media screen and (min-width:768px){
        font-size: .9rem;
        font-weight: 600;
        text-align:left;
    }
`
export default function ProductBox({_id,title,description,price,images}){
    const {addProduct} = useContext(CartContext);
    const url = '/product/'+_id;
    return (
        <ProductWrapper>
            <WhiteBox href={url}>
                <div>
                    <img src={images[0]} alt=""/>
                </div>
            </WhiteBox>
            <ProductInfoBox>
                <Title href={url}>{title}</Title>
                <PriceRow>
                    <Price>
                        {price} VND
                    </Price>
                    <div>
                        <Button block onClick={()=> addProduct(_id)} primary outline>
                            Add to cart
                        </Button>
                    </div>
                </PriceRow>
             
            </ProductInfoBox>
           
        </ProductWrapper>
      
    );
}