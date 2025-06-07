export const WishlistedItems = ({id, isCompleted,theme, arrOfWishlist, setArrOfWishlist}) => {
    const deletingWish = (id) =>{
        console.log(id);
        const filteredArray = arrOfWishlist.filter(item => item.id !== id);
        setArrOfWishlist(filteredArray);
       }
      
      const selectingTheWishlist = (id) => {
        const filteredArray = arrOfWishlist.map((item) => item.id === id ? {...item, isCompleted : !item.isCompleted} : item);
        setArrOfWishlist(filteredArray);
      }
    return (
      <div >
              <label>
                <input type="checkbox"  checked={isCompleted}  onChange={() =>selectingTheWishlist(id)}/>
                <span className={isCompleted? "Strike" : ""}>{theme}</span>
              </label>
              <button onClick={()=>deletingWish(id)}>Delete</button>
            </div>
  
    )
  }

  export default WishlistedItems;