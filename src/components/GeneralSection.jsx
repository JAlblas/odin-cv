export default function GeneralSection({
  name,
  handleNameChange,
  telephone,
  handleTelephoneChange,
  email,
  handleEmailChange,
}) {
  return (
    <div>
      <h2>General Section</h2>

      <fieldset>
        <legend>Personal info:</legend>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="telephone">Telephone:</label>
        <input
          type="tel"
          id="telephone"
          value={telephone}
          onChange={handleTelephoneChange}
        />
      </fieldset>
    </div>
  );
}
