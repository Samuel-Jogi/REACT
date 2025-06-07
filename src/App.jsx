
import './App.css'
import {useState} from 'react';
import {v4 as uuid} from  'uuid';

function App() {

  const [wishlist, setWishlist] = useState('');
  const [arrOfWishlist, setArrOfWishlist] = useState([]);


  const wishlistTobeAdded = (e) => {
    const {value} = e.target;
    if(value.trim().length > 0){
      setWishlist(value)
    }
  }

  console.log(wishlist);

  const addingItemsToWishlist=()=>{
    setArrOfWishlist([...arrOfWishlist, {id : uuid(), theme : wishlist, isCompleted:false}])
    setWishlist("");
  }

  console.log(arrOfWishlist);

 const deletingWish = (id) =>{
  console.log(id);
  const filteredArray = arrOfWishlist.filter(item => item.id !== id);
  setArrOfWishlist(filteredArray);
 }

const selectingTheWishlist = (id) => {
  const filteredArray = arrOfWishlist.map((item) => item.id === id ? {...item, isCompleted : !item.isCompleted} : item);
  setArrOfWishlist(filteredArray);
}

console.log(selectingTheWishlist)

  return (
    <>
     <h1>Your WishList</h1>
     <div>
      <input type="text" value={wishlist} placeholder="Add your wishlist here"  onChange={wishlistTobeAdded}/>
      <button onClick={addingItemsToWishlist}>Add</button>
     </div>
     <div>
      {
        arrOfWishlist.map(item =>(
          <div key={item.id}>
            <label>
              <input type="checkbox"  checked={item.isCompleted}  onChange={() =>selectingTheWishlist(item.id)}/>
              <span className={item.isCompleted? "Strike" : ""}>{item.theme}</span>
            </label>
            <button onClick={()=>deletingWish(item.id)}>Delete</button>
          </div>
        ))
      }
     </div>
      
    </>
  )
}

export default App
