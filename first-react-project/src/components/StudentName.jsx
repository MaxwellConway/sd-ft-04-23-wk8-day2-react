export default function StudentName(props) {
  return (
    <div>
      <p key={props.student}>{props.student}</p>
    </div>
  );
}
