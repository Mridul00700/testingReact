import * as React from "react";


const UserForm = (props) => {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");


    const onSubmitHandler =(e) =>{
        e.preventDefault();
        // console.log(name, email);
        props.addUser({name:name, email:email});
        setEmail("")
        setName("")

    }
    return(
        <form onSubmit={onSubmitHandler}>
            <div>
            <label htmlFor="name">Name</label>
            <input id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
            <button type="submit">Add user</button>
            </div>
        </form>
    )

}

export default UserForm;