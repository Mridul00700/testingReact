import { screen, render, within  } from "@testing-library/react";

// import user from "@testing-library/user-event";
import UserList from "./userList";

test("render one row per user", async()=>{

    const users= [
        {name: "xyz", email:"xyz@gmail.com"},
        {name: "abc", email:"abc@gmail.com"}
    ]
    //render
    const {container} = render(<UserList userList={users}/>);
    // get all rows 

    // screen.logTestingPlaygroundURL();
    //eslint-disable-next-line
    // const rows= container.querySelectorAll("tbody tr");

    
    // const rows = await screen.findAllByRole("row");
    const rows =within(screen.getByTestId("users")).getAllByRole('row');
        // console.log(rows.values);

    expect(rows).toHaveLength(2);


    // assertion that we have correct number of rows

});


test("render the email and name of the user", ()=>{

    const users= [
        {name: "xyz", email:"xyz@gmail.com"},
        {name: "abc", email:"abc@gmail.com"}
    ]
    render(<UserList userList={users}/>);

    for(let user of users){
        const name = screen.getByRole('cell', {name: user.name});
        const email = screen.getByRole('cell', {name: user.email});

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
    // screen.logTestingPlaygroundURL();
});