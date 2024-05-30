import Button from "./Button";
import saveIcon from "../assets/content-save.svg";
import editIcon from "../assets/square-edit-outline.svg";
import { useState } from "react";
import "../styles/Heading.css";

function Input({ text, className, onChange }) {
  return (
    <input value={text} className={className} onChange={onChange} type="text" />
  );
}

export default function Heading() {
  const [write, setWrite] = useState(false);
  const [name, setName] = useState("Wyatt Earp");
  const [street, setStreet] = useState("4242 Main St.");
  const [cityStateZip, setCityStateZip] = useState("Tombstone, AZ 84492");
  const [email, setEmail] = useState("sherriffearp@az.gov");
  let iconSrc = editIcon;
  write ? (iconSrc = saveIcon) : editIcon;

  function changeWriting() {
    write === false ? setWrite(true) : setWrite(false);
  }

  const editName = (e) => setName(e.target.value);

  const editStreet = (e) => setStreet(e.target.value);

  const editCityStateZip = (e) => setCityStateZip(e.target.value);

  const editEmail = (e) => setEmail(e.target.value);

  return (
    <header>
      <section className="content">
        {!write ? (
          <>
            <p>{street}</p>
            <p>{cityStateZip}</p>
            <p>{email}</p>
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Input onChange={editStreet} text={street} />
            <Input onChange={editCityStateZip} text={cityStateZip} />
            <Input onChange={editEmail} text={email} />
            <Input onChange={editName} text={name} className="big" />
          </>
        )}
      </section>
      <Button onClick={changeWriting} icon={iconSrc} />
    </header>
  );
}
