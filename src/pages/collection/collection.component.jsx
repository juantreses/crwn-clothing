import React from 'react';
import {useSelector} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {selectCollection} from '../../redux/shop/shop.selectors';

import {CollectionItemsContainer, CollectionPageContainer, CollectionTitle} from './collection.styles';

const CollectionPage = ({match}) => {
    const {title, items} = useSelector(state => selectCollection(match.params.collectionId)(state));
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

export default WithSpinner(CollectionPage);