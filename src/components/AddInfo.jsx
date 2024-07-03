import { useState } from "react";

function AddInfo() {
  const [PersonalInfo, updatePersonalInfo] = useState({
    name: "John",
    surname: "Doe",
    email: "johndoe@gmail.com",
    phone: 55123456789,
  });
  const handleInputDiff = (e) => {
    const {name,value} = e.target
    updatePersonalInfo(prevState => ({
      ...prevState,
      [name]:value
    }))
  }
  return (
    <>
      <aside className="fixed top-0 left-0 z-40 w-1/3 h-screen">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-500 ">
          <div className="flex flex-col">
            <form onSubmit={console.log(PersonalInfo)}>
            <input
              className="m-1"
              type="text"
              name="name"
              value={PersonalInfo.name}
              onChange={handleInputDiff}
            />
            <input
              className="m-1"
              type="text"
              value={PersonalInfo.surname}
              onChange={handleInputDiff}
              name = "surname"
            />
            <input
              className="m-1"
              type="text"
              value={PersonalInfo.email}
              onChange={handleInputDiff}
              name = "email"
            />
            <input
              className="m-1"
              type="number"
              value={PersonalInfo.phone}
              onChange={handleInputDiff}
              name = "phone"
            />
            <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </aside>
      <div className="p-4 ml-[33%]">
        <h1>{PersonalInfo.name}</h1>
        <h1>{PersonalInfo.surname}</h1>
        <h1>{PersonalInfo.email}</h1>
        <h1>{PersonalInfo.phone}</h1>
      </div>
    </>
  );
}
export default AddInfo;
