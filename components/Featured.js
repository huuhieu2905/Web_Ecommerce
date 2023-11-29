import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
    background-color: #eee;
    color:#1c1c1c;
    padding: 50px 0;
`;
const Title = styled.h1`
    margin:0;
    font-weight:normal;
    font-size:1.5rem;
    @media screen and (min-width: 768px){
        font-size:3rem;
    }
`;
const Desc = styled.p`
    color:#696969;
    font-size:.8rem;
`;
const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    img{
        max-width:100%;
        max-height:200px;
        display:block;
        margin: 0 auto;

    }
    div:nth-child(1){
        order: 2;
    }
    
    @media screen and (min-width: 768px){
        grid-template-columns: 1.1fr 0.9fr;
        div:nth-child(1){
            order: 0;
        }
        img{
            max-width:100%;
        }
    }
`;
const Column = styled.div`
    display:flex;
    align-items:center;
`;
const ButtonsWrapper = styled.div`
    display: flex;
    gap: 10px;
    margin-top:25px;
`;
const ButtonRead = styled.button`
    cursor: pointer;
    border-radius: 1px solid;
`;

export default function Featured({product}){
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart(){
        addProduct(product._id);
    }
    return (
    <Bg>
        <Center>
            <ColumnsWrapper>
                <Column>
                <div>
                    <Title>{product.title}</Title>
                    <Desc>{product.description}</Desc>
                    <ButtonsWrapper>
                        <ButtonRead href={'/product/'+product._id} outline={1} white={1} >Read more</ButtonRead>
                        <Button green onClick={addFeaturedToCart}>
                        <CartIcon></CartIcon>
                        Add to cart
                        </Button>
                    </ButtonsWrapper>
                </div>  
                </Column>
                <Column>
                    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d384dfe9ed7a4d37a43dad0200fc5ac1_9366/Ao_DJau_San_Khach_FC_Bayern_21-22_DJen_GM5317_01_laydown.jpg" alt=""/>
                </Column>
            </ColumnsWrapper> 
        </Center>
    </Bg>
    );
}