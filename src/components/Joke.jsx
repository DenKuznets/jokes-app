export default function Joke(props) {
  return (
    <>
      { props.setup && <h4>{props.setup}</h4> }
      
      <p>{props.punchline}</p>
      <hr />
    </>
  );
}
