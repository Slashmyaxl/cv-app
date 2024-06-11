import Button from "./Button";
import icons from "../icons";
import { InputList } from "./Inputs";
import { useState } from "react";

const projectList = [
  {
    id: 0,
    detail:
      "Multiple grammatical and reformatting contributions to open-source programming curriculum (The Odin Project) via GitHub.",
  },
  {
    id: 1,
    detail:
      "Assist online community of aspiring programmers in solving development-related problems using critical thinking approach.",
  },
  {
    id: 2,
    detail: "",
  },
  {
    id: 3,
    detail: "",
  },
];

export default function Projects() {
  const [writing, setWriting] = useState(false);
  const [projects, setProjects] = useState(projectList);

  function changeWriting() {
    writing === false ? setWriting(true) : setWriting(false);
  }

  function changeProjects(key, e) {
    let newProjects = projects;
    let editable = newProjects.filter((item) => item.id === key);
    editable[0].detail = e.target.value;
    newProjects = [...newProjects];
    setProjects(newProjects);
  }

  return (
    <article>
      <section className="content">
        <h2>Projects</h2>
        {!writing ? (
          <>
            <ul>
              {projects.map((item) => {
                if (item.detail.length > 0)
                  return <li key={item.id}>{item.detail}</li>;
              })}
            </ul>
          </>
        ) : (
          <>
            <InputList listItems={projects} onChange={changeProjects} />
          </>
        )}
      </section>
      <Button
        onClick={changeWriting}
        icon={writing ? icons.save : icons.edit}
      ></Button>
    </article>
  );
}
