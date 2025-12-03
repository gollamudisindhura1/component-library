 // import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import { AlertBox } from './components/AlertBox/AlertBox';
import { ProductDisplay } from './components/ProductDisplay/ProductDisplay';
import { UserProfileCard } from './components/UserProfileCard/UserProfileCard';

function App() {
  // const [count, setCount] = useState(0)
   const [showAlert, setShowAlert] = useState(true);
   
   const user = {
    id: '1',
    name: 'Sindhu Gollamudi',
    email: 'sindhu.gollamudie@gmail.com',
    role: 'Software Engineer',
    avatarUrl: 'https://thumbs.dreamstime.com/z/adorable-digital-artwork-features-cute-emoji-character-smiling-girl-black-hai-expressive-joyful-face-371437399.jpg'
  };
  const product = {
    id: '101',
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'High-quality wireless headphones with noise cancellation.',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
    inStock: true
  };
// Function that runs when Edit Profile is clicked
  const handleEdit = (userId: string) => {
    alert(`Editing user: ${userId}`);
  };
// Function that runs when Add to Cart is clicked
  const handleAddToCart = (productId: string) => {
    setShowAlert(true);
    console.log(`Added product ${productId} to cart`);
    setTimeout(() => setShowAlert(false), 4000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-6">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-10">
        My Component Library – Lab 1
      </h1>

        {showAlert && (
          <div className="max-w-2xl mx-auto mb-8">
          <AlertBox
          type='success'
          message='Product added to cart successfully'
          onClose={()=> setShowAlert(false)}>
            <p className="text-sm mt-2 opacity-90">
              Continue Shopping 🛍️ or proceed to checkout!
            </p>
          </AlertBox>
          </div>
        )}
       <div className="card-grid max-w-6xl mx-auto">
        <div>
          <h2 className="text-center text-2xl font-semibold mb-6 text-gray-700">User Profile</h2>
        
          <UserProfileCard
            user={user}              
            showEmail={true}         
            showRole={true}          
            onEdit={handleEdit}      
          >
            <p className="text-sm text-gray-500 mt-4">
              💻 Last login: 2 hours ago
            </p>

          </UserProfileCard>
          </div>
          <div>
          <h2 className="text-center text-2xl font-semibold mb-6 text-gray-700">Product</h2>
          <ProductDisplay
            product={product}              
            showDescription={true}        
            showStockStatus={true}        
            onAddToCart={handleAddToCart}  
          >
           
              <p className="text-sm text-gray-500 mt-4"> Free shipping available 📦
            </p>
          </ProductDisplay>
        </div>
      </div>
    </div>

      )
}
export default App;
