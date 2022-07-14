import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState({ name: "Name", nachname: "Nachname" });

  return (
    <div className="App">
      <button onClick={() => changeName("Name5", "Nachname5")}>
        Name1 Nachname1
      </button>
      <button onClick={() => changeName("Name2", "Nachname2")}>
        Name2 Nachname2
      </button>
      <span className="Name">
        {name.name} {name.nachname}
      </span>
    </div>
  );

  function changeName(_name, _nachname) {
    setName({ name: _name, nachname: _nachname });
  }
}
