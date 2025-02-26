import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ChildComponent = ({ handleAddNewUser }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState("");

    const handleClick = () => {
        if (address == "" || age <= 0 || name == "") {
            alert("Dữ liệu nhập không hợp lệ");
        } else {
            handleAddNewUser({
                address,
                name,
                age,
            });
            setName("");
            setAge(0);
            setAddress("");
        }

    };

    return (
        <>
            My name is {name}, I am {age} years old, I live in {address}
            <form onSubmit={(event) => event.preventDefault()}>
                <label>Tên: </label>
                <input id="name" value={name} type="text" onChange={(e) => setName(e.target.value)} />
                <br />

                <label>Tuổi: </label>
                <input id="age" value={age} type="text" onChange={(e) => setAge(e.target.value)} />
                <br />

                <label>Địa chỉ: </label>
                <input id="address" value={address} type="text" onChange={(e) => setAddress(e.target.value)} />

                <button type="button" onClick={handleClick}>on click</button>

            </form>
        </>
    );
};

export default ChildComponent;
