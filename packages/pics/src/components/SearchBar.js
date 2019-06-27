import React from 'react';

const SearchBar = ({ input, setInput }) => {
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={(evt) => evt.preventDefault()}>
        <div className="field">
          <label>Search image</label>
          <input
            type="text"
            value={input}
            onChange={(evt) => setInput(evt.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
