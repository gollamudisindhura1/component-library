import React from 'react';
import type { ProductDisplayProps } from '../../types';

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children
}) => {
  return (
    <div className ="product-card">
{product.imageUrl ? (
  <img src = {product.imageUrl} alt ={product.name} className ="product-img"/>
) :(
  <div className='product-placeholder'>No Image</div>
)}
    <h2>{product.name}</h2>
  <p className ="product-price">${product.price.toFixed(2)}</p>
  {showDescription && <p className='product-desc'>{product.description}</p>}

  
  {showStockStatus && (<p className={product.inStock ? "✅ in-stock" : "❌ Out-of-stock"}>{product.inStock ? '✅ In Stock' : '❌ Out of Stock'}</p>
  )}

  {onAddToCart && product.inStock && (
    <button onClick ={() => onAddToCart(product.id)}
    disabled={!product.inStock} className='add-to-cart-btn' 
    style={{
            backgroundColor: product.inStock ? '#10b981' : '#94a3b8',
            cursor: product.inStock ? 'pointer' : 'not-allowed'
          }}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
    </button>
  )}

  {children}
    </div>
  );
};