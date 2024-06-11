function Input({ text, className, onChange, placeholder }) {
  return (
    <input
      value={text}
      className={className}
      onChange={onChange}
      type="text"
      placeholder={placeholder}
    />
  );
}

function InputList({ listItems, onChange }) {
  return listItems.map((item) => (
    <input
      value={item.detail}
      key={item.id}
      placeholder="Add an item"
      onChange={(e) => onChange(item.id, e)}
    />
  ));
}

export { Input, InputList }