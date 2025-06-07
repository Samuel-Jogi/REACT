import {v4 as uuid} from 'uuid'

export const AddingList = ({setWishlist, wishlist, setArrOfWishlist, arrOfWishlist}) => {

    const wishlistTobeAdded = (e) => {
        const {value} = e.target;
        if(value.trim().length > 0){
          setWishlist(value)
        }
      }

      const addingItemsToWishlist=()=>{
        setArrOfWishlist([...arrOfWishlist, {id : uuid(), theme : wishlist, isCompleted:false}])
        setWishlist("");
      }

    return(
        <>
        <div>
            <input type="text" value={wishlist} placeholder="Add your wishlist here"  onChange={wishlistTobeAdded}/>
            <button onClick={addingItemsToWishlist}>Add</button>
        </div>
     
        </>
    )
}
export default AddingList;