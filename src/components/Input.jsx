export default function Input({ style,  onChange , disabled, ...props   }) {
  return (
    <>
      <input {...props} className={style} onChange={onChange} disabled={disabled}/>
    </>
  );
}
