// export const FormFirstName = () => {
//     return (
//         <>
//             <p>Samuel is working on props </p>
//             <label>
//                 <span> Name : </span>
//                 <input type="text" placeholder="Enter your name" />
//             </label>
//         </>
//     )
// }

// export const FormEmail = () => {
//     return(
//         <>
//             <label>
//                 <span> Email : </span>
//                 <input type="Email" placeholder="Enter your Email"/>
//             </label>
//         </>
//     )
// }

// export const FormMobileNumber = () => {
//     return(
//         <>
//             <label>
//                 <span> Mobile Number : </span>
//                 <input type="text" placeholder="Enter mobile number" />
//             </label>
//         </>
//     )
// }

// export const FormPassword = () => {
//     return(
//         <>
//             <label>
//                 <span> Password : </span>
//                 <input type="password" placeholder="Enter your password" />
//             </label>
//         </>
//     )
// }

export const FormInput = ({text, type, placeholder}) => {
    return(
        <>
            <label>
                <span>{text}</span>
                <input type={type} placeholder={placeholder} />
            </label>
        </>
    )
}

const usersDetails = [
    {id:1, text:"Name : ", type:"text", placeholder:"Enter your Name"},
    {id:2, text:"Password : ", type:"Password", placeholder:"Enter your Password"},
    {id:3, text:"Email : ", type:"Email", placeholder:"Enter your Email"},
    {id:4, text:"Mobile : ", type:"text", placeholder:"Enter your mobile"},

] 


function App(){
    return(
        <div className="inputs">

        {/* <FormFirstName /><br></br>
        <FormPassword /><br />
        <FormMobileNumber /><br />
        <FormEmail /> */}

        {/* <FormInput text = "Name : " type="text" placeholder="Enter your Name"/><br></br>
        <FormInput text = "Password : " type="Password" placeholder="Enter your Password"/> <br />
        <FormInput text = "Mobile : " type="text" placeholder="Enter your mobile number"/><br />
        <FormInput text = "Country : " type="text" placeholder="Enter your Country"/>    */}

        {
            usersDetails.map(({id, text, type, placeholder}) => (
                <FormInput key={id} text={text} type={type} placeholder={placeholder} />
            ))
        }

        </div>
    )
};

export default App;