export default function MyForm({ type, name, placeholder, value = "" }) {
    return (
      <>
        <input 
          type={type} 
          name={name} 
          placeholder={placeholder} 
          value={value} 
        />
        <br />
      </>
    );
  }
  