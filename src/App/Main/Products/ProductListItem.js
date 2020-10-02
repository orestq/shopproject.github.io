import React from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'

const ProductListItem = ({
    name,
    description = "No description...",
    type,
    capacity,
    price
}) => {
    return (
        <div className="product-list-item">
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity}</div>
            <div className="product-price">$ {price}</div>
            <button className="btn-add-to-cart">Add to cart</button>
            <div></div>
        </div>  
    )
}


ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired
}



export default ProductListItem