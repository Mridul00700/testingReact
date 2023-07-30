import {render, screen} from "@testing-library/react";

import user from "@testing-library/user-event";
import UserForm from "./userForm";



test('it shows two inputs and a button', ()=>{
    render(<UserForm/>);

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();



});


test("it calls adduser when the form is submitted!", async()=>{

    // const argList = [];
    // const callback = (...args) => {
    //     argList.push(args);
    // }

    const mock = jest.fn();
    render(<UserForm addUser={mock}/>);
    const [nameInput, emailInput] = screen.getAllByRole("textbox");

    await user.click(nameInput);
    await user.keyboard("Jame");
    await user.click(emailInput);
    await user.keyboard("Jame@gmail.com");

    const button = screen.getByRole("button");

    await user.click(button);
    
    // expect(argList).toHaveLength(1);
    // expect(argList[0][0]).toEqual({name: 'Jame', email: 'Jame@gmail.com'})
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name: 'Jame', email: 'Jame@gmail.com'})

});