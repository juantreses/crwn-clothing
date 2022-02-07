import {createSelector} from "reselect";

const selectShop = state => state.shop;

export const selectSelections = createSelector(
    [selectShop],
    shop => shop.collections
)