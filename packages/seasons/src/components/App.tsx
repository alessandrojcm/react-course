import React, { useState } from "react";
import { Handler, toRender, useRefract } from "refract-rxjs";
import { from, Observable, of } from "rxjs";
import { debounceTime, filter, map, switchMap } from "rxjs/operators";
import axios from "../utils/unsplash";
import { ImageList } from "./ImageList";
import SearchBar from "./SearchBar";
import { UnsplashResponse } from "./unsplash-response";

// @ts-ignore
const aperture: (component) => Observable<string[]> = (component) => {
  return component.observe("input").pipe(
    filter((val: string) => val.trim().length > 0),
    debounceTime(1000),
    switchMap((ef) =>
      from(
        axios.get<UnsplashResponse>("/search/photos", {
          params: {
            query: ef,
          },
        }),
      ).pipe(
        map((response) => response.data),
        map((images: UnsplashResponse) =>
          images.results.map((image) => ({
            id: image.id,
            url: image.urls.regular,
          })),
        ),
      ),
    ),
    map(toRender),
  );
};

const handler: Handler<string, string, any> = (initialData) => (effect) => {
  return of(effect)
    .pipe()
    .subscribe();
};

const App = () => {
  const [input, setInput] = useState("");

  // @ts-ignore
  const images: Array<{ url: string; id: string }> = useRefract(aperture, {
    input,
  });

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar input={input} setInput={setInput} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
