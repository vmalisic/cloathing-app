import React, { Component } from 'react'
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../component/preview-collection/preview-collection.component';

export default class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            colections: SHOP_DATA
        }
    }


  render() {

    const { colections } = this.state;
    return (
      <div className="shop-page">
        {colections.map( ({id, ...otherCollectionProps})=>(
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}
