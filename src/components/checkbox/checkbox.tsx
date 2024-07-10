import { CheckboxProps } from "../../types/types";

function Checkbox({ onClick = null, checked, onChange }: CheckboxProps) {
  return (
    <div className='checkbox'>
      <label className="checkbox-container">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className="checkmark" onClick={onClick}></span>
      </label>
    </div>
  );
}

export default Checkbox;
