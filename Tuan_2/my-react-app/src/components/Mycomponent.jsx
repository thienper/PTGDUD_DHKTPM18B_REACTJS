import { useState } from "react";
import ChildComponent from "./Childcomponent";
import DisplayInfo from "./DisplayInfo";

const MyComponent = () => {
    const [listUsers, setListUsers] = useState([
        { name: "thien", age: 20, address: "tay ninh" },
        { name: "thien 1", age: 21, address: "tay bac" },
        { name: "hehe", age: 10, address: "ca mau" },
    ]);

    const handleAddNewUser = (userObject) => {
        setListUsers([userObject, ...listUsers]); // Cập nhật danh sách người dùng
    };

    return (
        <div>
            <ChildComponent handleAddNewUser={handleAddNewUser} />
            <DisplayInfo listUsers={listUsers} />
        </div>
    );
};

export default MyComponent;
