function Display({ change }) {
  const inputStyle = {
    padding: "20px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    boxShadow: "inset 0 1px 3px rgba(0, 0, 0, 0.1)",
    width: "80%",
    marginTop: "1rem",
  };
  return <input type="text" style={inputStyle} value={change} readOnly />;
}
export default Display;
