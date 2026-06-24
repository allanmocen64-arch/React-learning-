import propTypes from "prop-types";

function Student(props){

  return (
    <div className="student">
      <p>name:{props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student:{props.isStudent ? "Yes": "No"}</p>
    </div>
  );
  Student.propTypes = {
    name: propTypes.string,
    Age : propTypes.number,
    isStudent : propTypes.bool,
  }

}
export default Student