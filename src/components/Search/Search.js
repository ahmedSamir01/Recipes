import React from "react";
import { Form } from "./style.js";

function Search({ setSearch, search }) {
  // the search
  const [Tranzit, setTranzit] = React.useState("");

  function handleChange(e) {
    setTranzit(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(Tranzit);
  }

  return (
    <form className="Form mb-5" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control w-75 d-inline"
        onChange={handleChange}
        placeholder="type your food"
      />
      <input type="submit" className="form-control w-25 btn-success d-inline" />
    </form>
  );
}

export default Search;
