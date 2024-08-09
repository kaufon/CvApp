import { useState } from "react";
import ShowInfo from "./ShowInfo";
import Input from "./Input";
import { ChevronDown, ChevronUp, LoaderCircle } from "lucide-react";

function AddInfo() {
  const [PersonalInfo, updatePersonalInfo] = useState({
    name: "John",
    surname: "Doe",
    email: "johndoe@gmail.com",
    phone: 55123456789,
  });

  const [degrees, setDegrees] = useState([
    { id: 1, degreeName: "Ensino medoio", degree: "diploma", year: 2019 },
  ]);
  const [initialDegree, setInitialDegree] = useState(degrees[0]);
  console.log(initialDegree);
  const [show, setShow] = useState(false);
  const [showDegree, setShowDegree] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleInputDiff = (e) => {
    const { name, value } = e.target;
    updatePersonalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleInitialDegreeDiff = (e) => {
    const { name, value } = e.target;
    setInitialDegree((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const saveNewDegre = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const degreeName = formData.get("degreeName");
    const degree = formData.get("degree");
    const year = formData.get("year");
    const newDegree = { degreeName, degree, year };
    console.log(newDegree);
  };
  return (
    <>
      <aside className="fixed w-1/3 h-screen">
        <div className="space-y-2">
          <div className="h-full p-4 overflow-y-auto bg-gray-400">
            <button
              type="button"
              className="w-full bg-gray-200 font-bold text-1xl rounded-t-lg"
              onClick={() => {
                setShow(!show);
              }}
            >
              <span className="flex justify-center items-center gap-2">
                Personal{" "}
                {show ? (
                  <ChevronDown className="size-5 text-black " />
                ) : (
                  <ChevronUp className="size-5 text-black" />
                )}
              </span>
            </button>

            {show && (
              <div
                id="personaInfo"
                className="bg-gray-200 rounded-b-lg border-1"
              >
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
                <div className="flex justify-center space-x-2">
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
                    className=""
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
        </div>
        <div className="h-full p-4 overflow-y-auto bg-gray-400">
          <button
            type="button"
            className="w-full bg-gray-200 font-bold text-1xl rounded-t-lg"
            onClick={() => {
              setShowDegree(!showDegree);
            }}
          >
            <span className="flex justify-center items-center gap-2">
              Education{" "}
              {showDegree ? (
                <ChevronDown className="size-5 text-black " />
              ) : (
                <ChevronUp className="size-5 text-black" />
              )}
            </span>
          </button>
          {showDegree && (
            <form onSubmit={saveNewDegre}>
              <div
                id="personaInfo"
                className="bg-gray-200 rounded-b-lg border-1"
              >
                <div className="flex flex-col justify-center items-center space-y-1">
                  <Input
                    style={"w-[90%] border-black border-2 p-2.5 rounded-md"}
                    key={degrees[degrees.length - 1].degreeName}
                    type="text"
                    onChange={handleInitialDegreeDiff}
                    name="degreeName"
                    value={degrees[degrees.length - 1].degreeName}
                    disabled={!edit}
                  />

                  <Input
                    style={"w-[90%] border-black border-2 p-2.5 rounded-md"}
                    key={degrees[degrees.length - 1].degree}
                    type="text"
                    onChange={handleInitialDegreeDiff}
                    name="degree"
                    value={degrees[degrees.length - 1].degree}
                    disabled={!edit}
                  />

                  <Input
                    style={"w-[90%] border-black border-2 p-2.5 rounded-md"}
                    key={degrees[degrees.length - 1].year}
                    type="text"
                    onChange={handleInitialDegreeDiff}
                    name="year"
                    value={degrees[degrees.length - 1].year}
                    disabled={!edit}
                  />
                </div>
                <div className="flex justify-center space-x-2">
                  <button
                    type="submit"
                    onClick={() => {
                      setEdit(false);
                    }}
                    disabled={edit == false}
                  >
                    Save
                  </button>
                  <button
                    className=""
                    type="button"
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </aside>
      <div className=" ml-[33%]">
        {edit == false ? (
          <ShowInfo PersonalInfo={PersonalInfo} Degrees={initialDegree} />
        ) : (
          <div className="flex justify-center items-center h-screen font-bold  text-4xl">
            Editing info{" "}
            <span className="">
              <LoaderCircle className="size-10 flex items-end animate-spin" />
            </span>
          </div>
        )}
      </div>
    </>
  );
}
export default AddInfo;
