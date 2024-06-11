import Button from "./Button";
import icons from "../icons";
import { Input, InputList } from "./Inputs";
import { useState } from "react";

export default function Credential({ title, credentialItem }) {
  const [writing, setWriting] = useState(false);
  const [credential, setCredential] = useState(credentialItem);

  function changeInstitution(e) {
    let newCredential = credential;
    newCredential = { ...newCredential, institution: e.target.value };
    setCredential(newCredential);
  }

  function changeTenure(e) {
    let newCredential = credential;
    newCredential = { ...newCredential, tenure: e.target.value };
    setCredential(newCredential);
  }

  function changeRole(e) {
    let newCredential = credential;
    newCredential = { ...newCredential, role: e.target.value };
    setCredential(newCredential);
  }

  function changeHighlight(key, e) {
    let newCredential = credential;
    const newHighlights = credential.highlights;
    let editable = newHighlights.filter((item) => item.id === key);
    editable[0].detail = e.target.value;

    newCredential = { ...newCredential, highlights: newHighlights };
    setCredential(newCredential);
  }

  function changeWriting() {
    writing === false ? setWriting(true) : setWriting(false);
  }

  return (
    <article>
      <section className="content">
        <h2>{title}</h2>
        {!writing ? (
          <>
            <p className="institution">{credential.institution} <span className="tenure">{credential.location} {credential.tenure}</span></p>
            <p>{credential.role}</p>
            <ul>
              {credential.highlights.map((item) => {
                if (item.detail.length > 0) return <li key={item.id}>{item.detail}</li>;
              })}
            </ul>
          </>
        ) : (
          <>
            <Input
              onChange={changeInstitution}
              text={credential.institution}
              placeholder="Institution"
            />
            <Input
              onChange={changeTenure}
              text={credential.tenure}
              placeholder="Tenure"
            />
            <Input
              onChange={changeRole}
              text={credential.role}
              placeholder="Role"
            />
            <InputList
              listItems={credential.highlights}
              onChange={changeHighlight}
            />
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
