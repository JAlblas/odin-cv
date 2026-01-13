export default function CVRender({ name, telephone, email }) {
  return (
    <div id="render">
      <h2>CV</h2>
      <h3>{name}</h3>
      <h3>{telephone}</h3>
      <h3>{email}</h3>
    </div>
  );
}
