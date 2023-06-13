import StudentName from "./StudentName";

export default function Students(props) {
  console.log(props);
  return (
    <div>
      <p>hello</p>
      {props.students.map((student) => (
        <StudentName key={student} key={student} />
      ))}
    </div>
  );
}
