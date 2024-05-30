import Button from "./Button";
import icons from "../icons";
import { useState } from "react";
import "../styles/Heading.css";

function Input({ text, className, onChange, placeholder }) {
  return (
    <input value={text} className={className} onChange={onChange} type="text" placeholder={placeholder}/>
  );
}

const headingInfo = {
  name: 'Wyatt Earp',
  street: '4242 Main St.',
  cityStateZip: 'Tombstone, AZ 84492',
  email: 'sherrifearp@az.gov',
}

export default function Heading() {
  const [write, setWrite] = useState(false);
  const [headingData, setHeadingData] = useState(headingInfo)

  let icon = icons.edit;
  if (write) icon = icons.save;

  function changeWriting() {
    write === false ? setWrite(true) : setWrite(false);
  }

  function editName(e) {
    let newHeading = headingData
    newHeading = {...newHeading, name: e.target.value}
    setHeadingData(newHeading);
  }

  function editStreet(e) {
    let newHeading = headingData
    newHeading = {...newHeading, street: e.target.value}
    setHeadingData(newHeading);
  }

  function editCityStateZip(e) {
    let newHeading = headingData
    newHeading = {...newHeading, cityStateZip: e.target.value}
    setHeadingData(newHeading);
  }

  function editEmail(e) {
    let newHeading = headingData
    newHeading = {...newHeading, email: e.target.value}
    setHeadingData(newHeading);
  }

  return (
    <header>
      <section className="content">
        {!write ? (
          <>
            <p>{headingData.street}</p>
            <p>{headingData.cityStateZip}</p>
            <p>{headingData.email}</p>
            <h1>{headingData.name}</h1>
          </>
        ) : (
          <>
            <Input onChange={editStreet} text={headingData.street} placeholder='Street Address'/>
            <Input onChange={editCityStateZip} text={headingData.cityStateZip} placeholder='City, State and Zip'/>
            <Input onChange={editEmail} text={headingData.email} placeholder='email@domain.com'/>
            <Input onChange={editName} text={headingData.name} className="big" placeholder='Full Name'/>
          </>
        )}
      </section>
      <Button onClick={changeWriting} icon={icon} />
    </header>
  );
}
