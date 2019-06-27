import React, { useState } from "react";
import {
  ComponentEffect,
  ObservableComponent,
  toRender,
  useRefract,
} from "refract-rxjs";
import { from, Observable } from "rxjs";
import { debounceTime, filter, map, switchMap } from "rxjs/operators";
import { UnsplashImage } from "../models/unplash-image.model";
import { UnsplashResponse } from "../models/unsplash-response";
import axios from "../utils/unsplash";
import { ImageList } from "./ImageList";
import SearchBar from "./SearchBar";

const aperture: (
  component: ObservableComponent,
) => Observable<ComponentEffect<UnsplashImage[]>> = (component) => {
  return component.observe<string>("input").pipe(
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
        map((images: UnsplashResponse) => images.results as UnsplashImage[]),
      ),
    ),
    map(toRender),
  );
};

const App = () => {
  const [input, setInput] = useState("");

  // @ts-ignore
  const images: UnsplashImage[] = useRefract(aperture, {
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
