import { useState } from "react";
import "./App.css";
import { Card } from "./Card";

function App() {
  const [error, setError] = useState(false);
  const [dataValidate, setDataValidate] = useState(false);
  const [data, setData] = useState({
    name: "",
    animal: "",
  });

  const validateName = (name) => {
    const regex = /^[a-zA-Z ]+$/;
    return name[0] !== " " && regex.test(name) && name.length > 2;
  };
  const validateAnimal = (animal) => {
    const regex = /^[a-zA-Z ]+$/;
    return animal[0] !== " " && regex.test(animal) && animal.trim().length > 5;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(data.name) || !validateAnimal(data.animal)) {
      setError(true);
      setDataValidate(false);
      return;
    }
    setError(false);
    setDataValidate(true);
    console.log("Paso perrito");
  };

  return (
    <div className="App">
      <h2>¿Cual es tu animal Favorito?</h2>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="animal">Animal</label>
            <input
              type="text"
              name="animal"
              placeholder="Ingresa su animal favorito"
              onChange={(e) => setData({ ...data, animal: e.target.value })}
            />
          </div>
          <button>Enviar</button>
        </form>
        {error && (
          <p
            style={{
              margin: "0 auto",
              paddingTop: "12px",
              color: "crimson",
              fontWeight: "bold",
              maxWidth: "250px",
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            Por favor revisa que la información no contenga espacios
          </p>
        )}
      </div>
      {dataValidate && <Card data={data} />}
    </div>
  );
}

export default App;
