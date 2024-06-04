import Button from "./Button";
import icons from "../icons";
import Input from "./Input";
import { useState } from "react";

function InputList({ listItems, onChange }) {
    return (
    listItems.map((item, index) =>
        <input value={item} key={index} placeholder='Highlight' onChange={(e) => onChange(index, e)}/>)
    )
}

export default function Credential({ title, credentialItem }) {
    const [writing, setWriting] = useState(false);
    const [credential, setCredential] = useState(credentialItem);

    function changeInstitution(e) {
        let newCredential = credential;
        newCredential = {...newCredential, institution: e.target.value};
        setCredential(newCredential)
    }

    function changeTenure(e) {
        let newCredential = credential;
        newCredential = {...newCredential, tenure: e.target.value};
        setCredential(newCredential)
    }

    function changeRole(e) {
        let newCredential = credential;
        newCredential = {...newCredential, role: e.target.value};
        setCredential(newCredential)
    }

    function changeHighlight(key, e) {
        let newCredential = credential;
        let newHighlights = newCredential.highlights;
        newHighlights[key] = e.target.value
        newCredential = {...newCredential, highlights: newHighlights};
        setCredential(newCredential)
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
                <p className="institution">{credential.institution}</p>
                <span className="tenure">{credential.tenure}</span>
                <p>{credential.role}</p>
                <ul>
                    {credential.highlights.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
                </>
            ) : (
                <>
                <Input onChange={changeInstitution} text={credential.institution} placeholder='Institution'/>
                <Input onChange={changeTenure} text={credential.tenure} placeholder='Tenure'/>
                <Input onChange={changeRole} text={credential.role} placeholder='Role'/>
       
                    <InputList listItems={credential.highlights} onChange={changeHighlight}/>
                </>
            )}
        </section>
        <Button onClick={changeWriting} icon={writing ? icons.save : icons.edit}></Button>
    </article>
  )
}