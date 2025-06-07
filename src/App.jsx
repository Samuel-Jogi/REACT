
import './App.css'
import {useState} from 'react';
import WishlistedItems from './NewComponents';
import AddingList from './LabelAndButton';

function App() {

  const [wishlist, setWishlist] = useState('');
  const [arrOfWishlist, setArrOfWishlist] = useState([]);




  return (
    <>
     <h1>Your WishList</h1>
      <AddingList setWishlist={setWishlist} setArrOfWishlist={setArrOfWishlist} wishlist={wishlist} arrOfWishlist={arrOfWishlist}/>
     <div>
      {
        arrOfWishlist.map(({id,isCompleted, theme}) => ( <WishlistedItems key={id} id={id} isCompleted={isCompleted} theme={theme}
          arrOfWishlist={arrOfWishlist} setArrOfWishlist={setArrOfWishlist}  />))
      }
     </div>
      
    </>
  )
}

export default App
