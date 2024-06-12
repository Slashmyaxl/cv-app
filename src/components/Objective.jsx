import icons from "../icons.js";
import Button from "./Button.jsx";
import { useState } from "react";

export default function Objective() {
  const [writing, setWriting] = useState(false);
  const [objective, setObjective] = useState(
    "Work as part of a development team in order advance programming skills.",
  );

  function changeWriting() {
    writing === false ? setWriting(true) : setWriting(false);
  }

  return (
    <article>
      <section className="heading">
        <h2>Objective</h2>
        <Button
        onClick={changeWriting}
        icon={writing ? icons.save : icons.edit}
      />
      </section>
      <section className="content">
        {!writing ? (
          <p>{objective}</p>
        ) : (
          <input
            value={objective}
            onChange={(e) => setObjective(e.target.value)}
            placeholder="Professional or academic goal"
          />
        )}
      </section>
    </article>
  );
}
