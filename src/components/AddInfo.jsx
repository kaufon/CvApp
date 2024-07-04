import { useState } from "react";

function AddInfo() {
  const [PersonalInfo, updatePersonalInfo] = useState({
    name: "John",
    surname: "Doe",
    email: "johndoe@gmail.com",
    phone: 55123456789,
  });
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleInputDiff = (e) => {
    const { name, value } = e.target;
    updatePersonalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <aside className="fixed w-1/3 h-screen">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-400">
          <button
            type="button"
            className="w-[100%] bg-gray-200 font-bold text-1xl rounded-t-lg"
            onClick={() => {
              setShow(!show);
            }}
          >
            Personal
          </button>
          {show && (
            <div id="personaInfo" className="bg-gray-200 rounded-t-none rounded-r-lg roundd-l-lg rounded-b-lg border-1">
              <div className="flex flex-col justify-center items-center">
              <input
                className="w-[90%] border-black border-2 p-2.5 rounded-md mt-1"
                type="text"
                name="name"
                value={PersonalInfo.name}
                onChange={handleInputDiff}
                disabled={!edit}
              />
              <input
                className="w-[90%] border-black border-2 p-2.5 rounded-md mt-1"
                type="text"
                value={PersonalInfo.surname}
                onChange={handleInputDiff}
                name="surname"
                disabled={!edit}
              />
              <input
                className="w-[90%] border-black border-2 p-2.5 rounded-md mt-1"
                type="text"
                value={PersonalInfo.email}
                onChange={handleInputDiff}
                name="email"
                disabled={!edit}
              />
              <input
                className="w-[90%] border-black border-2 p-2.5 rounded-md mt-1"

                type="number"
                value={PersonalInfo.phone}
                onChange={handleInputDiff}
                name="phone"
                disabled={!edit}
              />
              </div>
              <div className="flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setEdit(false);
                }}
                disabled={edit == false}
              >
                Save
              </button>
              <button
                className="m-1"
                type="button"
                onClick={() => {
                  setEdit(true);
                }}
              >
                Edit
              </button>
              </div>
            </div>
          )}
        </div>
      </aside>
      <div className="p-4 ml-[33%]">
        {edit == false ? (
          <div>
            <h1>{PersonalInfo.name}</h1>
            <h1>{PersonalInfo.surname}</h1>
            <h1>{PersonalInfo.email}</h1>
            <h1>{PersonalInfo.phone}</h1>
          </div>
        ) : (
          <div>Editing info</div>
        )}
      </div>
    </>
  );
}
export default AddInfo;
