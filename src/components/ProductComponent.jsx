import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    //   const {id, title} = products[0];
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <>
                {/* <div className='four column wide' key={id}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={image} alt={title} />
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">$ {price}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
            </div> */}
                <div className="product-card" key={id}>
                <Link to={`/product/${id}`}>
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                    <p>${price}</p>
                    <p>{category}</p>
                    </Link>
                </div>

            </>

        );
    });
    return (
        <>{renderList}</>
    );
};

export default ProductComponent
