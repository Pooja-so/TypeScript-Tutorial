import type { Dispatch, SetStateAction } from "react";

type InputValueType = string | number;

const Form = <T extends InputValueType>({
  label,
  value,
  setValue,
}: {
  label: T;
  value: T;
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <form>
      <label>{label}</label>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
