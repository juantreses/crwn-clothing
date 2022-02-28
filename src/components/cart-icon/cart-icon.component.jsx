import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {selectCartItemsCount} from "../../redux/cart/cart.selectors";

import {CartIconContainer, ItemCountContainer, ShoppingIcon} from "./cart-icon.styles";

const CartIcon = () => {
    const itemCount = useSelector(selectCartItemsCount);
    const dispatch = useDispatch();

    return (
        <CartIconContainer onClick={() => {dispatch(toggleCartHidden())}}>
            <ShoppingIcon/>
            <ItemCountContainer>{itemCount}</ItemCountContainer>
        </CartIconContainer>
    );
}

export default CartIcon;