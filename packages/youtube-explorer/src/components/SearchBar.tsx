import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';

const SearchBar = ({
  input,
  setInput,
}: {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <section className="ui segment">
      <form
        className="ui form"
        onSubmit={(evt: FormEvent<HTMLFormElement>) => evt.preventDefault()}
      >
        <div className="field">
          <label>Search video</label>
          <input
            type="text"
            value={input}
            onChange={(evt: ChangeEvent<HTMLInputElement>) =>
              setInput(evt.target.value)
            }
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
