const ShowInfo = ({PersonalInfo }) => {
  return (
    <>
      <div>
        <h1>{PersonalInfo.name}</h1>
        <h1>{PersonalInfo.surname}</h1>
        <h1>{PersonalInfo.email}</h1>
        <h1>{PersonalInfo.phone}</h1>
      </div>
    </>
  );
}
export default ShowInfo;
