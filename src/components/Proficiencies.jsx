import Button from "./Button";
import icons from "../icons";
import { InputList } from "./Inputs";
import { useState } from "react";

const proficiencyList = [
  {
    id: 0,
    detail:
      "Law Enforcement",
  },
  {
    id: 1,
    detail:
      "Communication (written & verbal)",
  },
  {
    id: 2,
    detail: "JavaScript",
  },
  {
    id: 3,
    detail: "Version Control (GitHub)",
  },
  {
    id: 4,
    detail: "HTML",
  },
  {
    id: 5,
    detail: "CSS",
  },
  {
    id: 6,
    detail: "React",
  },
  {
    id: 7,
    detail: "",
  },
  {
    id: 8,
    detail: "",
  }
];

export default function Proficiencies() {
  const [writing, setWriting] = useState(false);
  const [proficiencies, setProficiencies] = useState(proficiencyList);

  function changeWriting() {
    writing === false ? setWriting(true) : setWriting(false);
  }

  function changeProficiencies(key, e) {
    let newProficiencies = proficiencies;
    let editable = newProficiencies.filter((item) => item.id === key);
    editable[0].detail = e.target.value;
    newProficiencies = [...newProficiencies];
    setProficiencies(newProficiencies);
  }

  return (
    <aside className="proficiencies">
      <section className="heading">
        <h2>Proficiencies</h2>
        <Button
        onClick={changeWriting}
        icon={writing ? icons.save : icons.edit}
      ></Button>
      </section>
      <section className="content">
        {!writing ? (
          <>
            <ul>
              {proficiencies.map((item) => {
                if (item.detail.length > 0)
                  return <li key={item.id}>{item.detail}</li>;
              })}
            </ul>
          </>
        ) : (
          <>
            <InputList listItems={proficiencies} onChange={changeProficiencies} />
          </>
        )}
      </section>
    </aside>
  );
}