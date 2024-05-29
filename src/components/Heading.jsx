export default function Heading( {name, street, city, state, zip, email }) {
    return (
        <header>
            <p>{street}</p>
            <p>{city}, {state} {zip}</p>
            <p>{email}</p>
            <h1>{name}</h1>
        </header>
    )
}