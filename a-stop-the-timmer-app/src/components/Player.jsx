import {useRef, useState} from "react";

export default function Player() {

  const playerNameRef = useRef();
  const [name, setName] = useState();

  function handleSetName(){
      setName(playerNameRef.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {name ? name : 'Unknow'}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
