import { Mail, Phone } from "lucide-react";

const ShowInfo = ({ PersonalInfo , Degrees}) => {
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
    </>
  );
};
export default ShowInfo;
