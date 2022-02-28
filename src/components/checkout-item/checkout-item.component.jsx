import React from "react";
import {useDispatch} from "react-redux";

import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";

import {
    CheckoutItemContainer,
    ImageContainer,
    QuantityContainer,
    RemoveButtonContainer,
    TextContainer
} from "./checkout-item.styles";

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const dispatch = useDispatch();

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt='item'/>
            </ImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick={() => dispatch(clearItemFromCart(cartItem))}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>€{price}</TextContainer>
            <RemoveButtonContainer onClick={() => dispatch(removeItem(cartItem))}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
};

export default CheckoutItem;