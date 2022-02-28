import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions.js';

import {
    CartDropdownButton,
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer
} from './cart-dropdown.styles';

const CartDropdown = ({history}) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                ) : (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )}
            </CartItemsContainer>
            <CartDropdownButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                GO TO CHECKOUT
            </CartDropdownButton>
        </CartDropdownContainer>
    );
}

export default withRouter(CartDropdown);