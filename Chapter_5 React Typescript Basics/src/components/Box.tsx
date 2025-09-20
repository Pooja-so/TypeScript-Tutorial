interface PropTypes {
  name: string;
  age: number;
  gender?: string;
  isAdult: (age: number) => boolean;
}

// Note for passing default values in paramters, you must make property optional
const Box = ({ name, age, isAdult, gender = "Not to say" }: PropTypes) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>Gender: {gender}</h2>
      <h3>IsAdult: {isAdult(age)}</h3>
    </div>
  );
};

// const Box = (props: PropTypes) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//     </div>
//   );
// };

export default Box;
