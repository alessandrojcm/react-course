import axios from "axios";
import React, { useState } from "react";
import { Aperture, Handler, useRefract } from "refract-rxjs";
import { distinctUntilChanged, filter, switchMap } from "rxjs/operators";
import SearchBar from "./SearchBar";
import { from, of } from "rxjs";

// @ts-ignore
const aperture: Aperture<string, string, any> = (component) => {
  return component.observe("input").pipe(
    filter((val) => (val as string).trim().length > 0),
    switchMap((ef) =>
      from(
        axios.get("https://api.unsplash.com/search/photos", {
          headers: {
            Authorization:
              "Client-ID 6a58d69b6567508749bd0222e591442b2fdf5edc3f8ac6911c8dba822853ad9d",
          },
          params: {
            query: ef,
          },
        }),
      ),
    ),
  );
};

const handler: Handler<string, string> = (initialData) => (effect) => {
  of(effect)
    .pipe()
    .subscribe();
};

const App = () => {
  const [input, setInput] = useState("");

  // @ts-ignore
  useRefract(aperture, { input }, { handler });

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar input={input} setInput={setInput} />
    </div>
  );
};

export default App;
