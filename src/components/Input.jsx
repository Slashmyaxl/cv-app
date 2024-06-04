export default function Input({ text, className, onChange, placeholder }) {
    return (
      <input value={text} className={className} onChange={onChange} type="text" placeholder={placeholder}/>
    );
  }