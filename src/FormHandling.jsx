import React from "react";

const FormHandling = () => {
  const [name, setName] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    // const value=(name==="email")?value.toLowerCase():value; //apply some condition
    console.log(name.value);

    setName((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name:</label>
        <input
          type="text"
          name="name"
          value={name.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Enter Email:</label>
        <input
          type="text"
          name="email"
          value={name.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FormHandling;
