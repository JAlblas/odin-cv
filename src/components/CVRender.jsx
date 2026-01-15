import "../styles/CVRender.css";

export default function CVRender({ name, telephone, email }) {
  return (
    <div id="render">
      <h2>CV</h2>
      <div className="general">
        <h2>General Section</h2>
        <p>
          <b>Name:</b> {name}
        </p>
        <p>
          <b>Telephone:</b> {telephone}
        </p>
        <p>
          <b>Email:</b> {email}
        </p>
      </div>
    </div>
  );
}
