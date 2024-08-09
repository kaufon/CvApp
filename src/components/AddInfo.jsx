import { useState } from "react";
import ShowInfo from "./ShowInfo";
import Input from "./Input";
import { ChevronDown, ChevronUp, Dice1, LoaderCircle, X } from "lucide-react";

function AddInfo() {
  const [PersonalInfo, updatePersonalInfo] = useState({
    name: "John",
    surname: "Doe",
    email: "johndoe@gmail.com",
    phone: 55123456789,
  });

  const [degrees, setDegrees] = useState([
    {
      id: 0,
      degreeName: "High School",
      degree: "High School Diploma",
      year: 2019,
    },
  ]);
  const [initialDegree, setInitialDegree] = useState(degrees[0]);
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
  const deleteDegree = (key) => {
    const newDegrees = degrees.filter((degree) => degree.id !== key);
    setDegrees(newDegrees);
  };

  const saveNewDegree = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const degreeName = formData.get("degreeName");
    const degree = formData.get("degree");
    const year = formData.get("year");
    let id;
    if (degrees.length > 0) {
      id = degrees[degrees.length - 1].id + 1;
    } else {
      id = 1;
    }
    const newDegree = { id, degreeName, degree, year };
    setDegrees((prevState) => [...prevState, newDegree]);
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
                Personal Information
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
                      setEdit(!edit);
                    }}
                  >
                    {edit ? "Stop Editing" : "Edit"}
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
            <form onSubmit={saveNewDegree}>
              <div
                id="personaInfo"
                className="bg-gray-200 rounded-b-lg border-1 space-y-4"
              >
                <div className="flex flex-col justify-center items-center space-y-1">
                  <Input
                    style={"w-[90%] border-black border-2 p-2.5 rounded-md"}
                    type="text"
                    onChange={handleInitialDegreeDiff}
                    name="degreeName"
                    value={initialDegree.degreeName}
                    disabled={!edit}
                  />

                  <Input
                    style={"w-[90%] border-black border-2 p-2.5 rounded-md"}
                    type="text"
                    onChange={handleInitialDegreeDiff}
                    name="degree"
                    value={initialDegree.degree}
                    disabled={!edit}
                  />

                  <Input
                    style={"w-[90%] border-black border-2 p-2.5 rounded-md"}
                    type="number"
                    onChange={handleInitialDegreeDiff}
                    name="year"
                    value={initialDegree.year}
                    disabled={!edit}
                  />
                </div>
                <div className="flex justify-center space-x-8">
                  {edit && (
                    <button type="submit" disabled={edit == false}>
                      Add Degree
                    </button>
                  )}

                  <button
                    className=""
                    type="button"
                    onClick={() => {
                      setEdit(!edit);
                    }}
                  >
                    {edit ? "Stop Editing" : "Edit"}
                  </button>
                </div>
                <div className="w-full h-px bg-black" />
                <div className="font-bold items-center flex justify-center text-black w-full">
                  Degrees
                </div>
                <div>
                  {degrees.map((degree) => {
                    if (!degree.year) {
                      return null;
                    }
                    return (
                      <div
                        key={degree.id}
                        className="flex justify-center items-center"
                      >
                        <div className="flex justify-between w-[90%] mb-2">
                          <span className="border-black border-2 rounded-md bg-white  p-2.5">
                            {degree.degreeName}
                          </span>
                          <span className="border-black border-2 rounded-md bg-white  p-2.5">
                            {degree.degree}
                          </span>
                          <span className="border-black border-2 rounded-md bg-white  p-2.5 ">
                            {degree.year}
                          </span>
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => {
                                deleteDegree(degree.id);
                              }}
                            >
                              <X className="size-5 text-red-700 " />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
