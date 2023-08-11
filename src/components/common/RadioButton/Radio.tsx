const Radio = ({ children, value, name, checked, onChange }) => {
  return (
    <div>
      <input type='radio' value={value} name={name} checked={checked} onChange={onChange} />
      {children}
    </div>
  );
};
export default Radio;
