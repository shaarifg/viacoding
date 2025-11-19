import { Fragment, useEffect, useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const [debaounceValue, setDebaounceValue] = useState("");

  // ─── Trigger API call only after user stops typing ───
  useEffect(() => {
    //
    const intervalId = setTimeout(() => {
      setDebaounceValue(search);
    }, 1000); // wait for 1 sec if user stop typing

    // every time user start type without waiting for one sec, clear above setTimeout
    return () => {
      clearTimeout(intervalId);
    };
  }, [search]);

  // ─── Fetch user when debounced value changes ───
  useEffect(() => {
    if (debaounceValue) {
      callSearchApi(search);
    }
  }, [debaounceValue]);

  function callSearchApi(value: string) {
    console.log("Api is called for " + value);
  }
  return (
    <Fragment>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        className="outline-none border-2 border-black p-2 w-full rounded-none"
      />
    </Fragment>
  );
};

export default Search;
