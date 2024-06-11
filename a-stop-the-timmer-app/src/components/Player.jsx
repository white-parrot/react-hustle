import {useState} from "react";

export default function Player() {

  const [name, setName] = useState();
  const [isSet, setIsSet] = useState(false);
  function handleNameChange(event){
      setIsSet(false);
      setName(event.target.value);
  }

  function handleSetName(){
      setIsSet(true);
  }

  return (
    <section id="player">
      <h2>Welcome { !isSet ? 'Unknown' : name}</h2>
      <p>
        <input type="text" onChange={handleNameChange} value={name} />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
