import { useState } from "react";
import ShowInfo from "./ShowInfo";
import Input from "./Input";

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
        <div className="h-full p-4 overflow-y-auto bg-gray-400">
          <button
            type="button"
            className="w-full bg-gray-200 font-bold text-1xl rounded-t-lg"
            onClick={() => {
              setShow(!show);
            }}
          >
            Personal
          </button>
          {show && (
            <div id="personaInfo" className="bg-gray-200 rounded-b-lg border-1">
              <div className="flex flex-col justify-center items-center space-y-1">
                {Object.entries(PersonalInfo).map(([key, value]) => (
                  <Input
                    style={"w-[90%] border-black border-2 p-2.5 rounded-md"}
                    key={key}
                    type="text"
                    onChange={handleInputDiff}
                    name={key}
                    value={value}
                    disabled={!edit}
                  />
                ))}
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
          <ShowInfo PersonalInfo={PersonalInfo} />
        ) : (
          <div>Editing info</div>
        )}
      </div>
    </>
  );
}
export default AddInfo;
