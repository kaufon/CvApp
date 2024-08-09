import { Mail, Phone } from "lucide-react";

const ShowInfo = ({ PersonalInfo, Degrees }) => {
  return (
    <>
      <div className="bg-blue-700 text-white flex justify-between h-32">
        <div className="w-full flex justify-between m-6">
          <div className="flex flex-col  justify-center items-center font-bold text-4xl h-full">
            <h1>
              {PersonalInfo.name} {PersonalInfo.surname}
            </h1>
          </div>
          <div className="flex justify-center text-xl space-y-2 items-center flex-col ">
            <span className="flex items-center gap-2 font-medium justify-center">
              <Phone className="size-5 text-black" />
              {PersonalInfo.phone}
            </span>
            <span className="flex items-center gap-2 font-medium justify-center">
              <Mail className="size-5 text-black" />
              {PersonalInfo.email}
            </span>
          </div>
        </div>
      </div>

      <div>
        {Degrees.map((degree) => (
          <div
            key={degree.id}
            className="flex flex-col font-medium text-xl m-4 space-y-5"
          >
            <div className="flex flex-col space-y-2 flex-1 ">
              <span className="font-bold italic">{degree.degreeName}</span>

              <span className="flex flex-1 w-full text-gray-600 font-bold">{degree.degree} | {degree.year} </span>
            </div>

            <div className="h-px bg-black w-full" />
          </div>
        ))}
      </div>
    </>
  );
};
export default ShowInfo;
