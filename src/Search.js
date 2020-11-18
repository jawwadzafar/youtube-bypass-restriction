import { useState } from "react";
const Search = () => {
  const [link, setlink] = useState("");
  function submitLink(e) {
    e.preventDefault();
    console.log(link);
    if (link) {
      const u = new URL(link);
      const id = u.searchParams.get("v");

      if (id) {
        window.location.href = `https://www.youtube.com/embed/${id}`;
      }
    }
  }
  return (
    <form onSubmit={submitLink}>
      <input
        value={link}
        onChange={(e) => setlink(e.target.value)}
        placeholder="www.youtube.com/watch?=randomStrings"
      />
      <button type="submit">Bypass</button>
    </form>
  );
};

export default Search;
