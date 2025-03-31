import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, setInputValue, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={inputValue} onChange={onChange} />
    </>
  );
};

export default SearchBox;
