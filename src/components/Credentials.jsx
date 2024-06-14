import Button from "./Button";
import icons from "../icons";
import { Input, InputList } from "./Inputs";
import { useState } from "react";
import '../styles/Credentials.css';

export default function Credential({ title, credentialItem }) {
  const [writing, setWriting] = useState(false);
  const [credential, setCredential] = useState(credentialItem);

  function changeInstitution(e) {
    let newCredential = credential;
    newCredential = { ...newCredential, institution: e.target.value };
    setCredential(newCredential);
  }

  function changeLocation(e) {
    let newCredential = credential;
    newCredential = { ...newCredential, location: e.target.value };
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
      <section className="heading">
        <h2>{title}</h2>
        <Button
        onClick={changeWriting}
        icon={writing ? icons.save : icons.edit}
        ></Button>
      </section>
      <section className="content">
        {!writing ? (
          <>
            <div className="institution">
              <p>{credential.institution}</p>
              <p className="tenure">{credential.location} {credential.tenure}</p>
            </div>
            <p className="role">{credential.role}</p>
            <ul>
              {credential.highlights.map((item) => {
                if (item.detail.length > 0) return <li key={item.id}>{item.detail}</li>;
              })}
            </ul>
          </>
        ) : (
          <>
            <div className="institutional-info">
            <Input
              onChange={changeInstitution}
              text={credential.institution}
              placeholder="Institution"
              className="heading"
            />
            <Input
              onChange={changeLocation}
              text={credential.location}
              placeholder="Location"
              className="heading"
            />
            <Input
              onChange={changeTenure}
              text={credential.tenure}
              placeholder="Tenure"
              className="heading"
            />
            </div>
            <Input
              onChange={changeRole}
              text={credential.role}
              placeholder="Role"
              className="big"
            />
            <InputList
              listItems={credential.highlights}
              onChange={changeHighlight}
            />
          </>
        )}
      </section>
    </article>
  );
}
