import * as React from 'react';

const UserList = (props) => {


    const renderUser = props.userList.map((user)=> {
        return <tr key={user.name}>
            <td>{user.name}</td>
            <td>{user.email}</td>
        </tr>
    });

    // return (
    //     <>
    //     <div>
    //         User List
    //     </div>
    //     <div>
    //     <ul>
    //     {props.userList.map((user, index) =>{
    //         return (<div key={index}>
    //             <li>{user.name}</li>
    //             <li>{user.email}</li>
    //             </div>)
    //     })}
    //     </ul>
    //     </div>
    //     </>
    // )

    return (<table>
        <thead>
            <th>Name</th>
            <th>Email</th>
        </thead>
        <tbody>
            {renderUser}
        </tbody>
    </table>)
}

export default UserList;