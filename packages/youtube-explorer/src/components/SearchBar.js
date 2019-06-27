import React from 'react';

const SearchBar = ({ input, setInput }) => {
  return (
    <section className="ui segment">
      <form className="ui form" onSubmit={(evt) => evt.preventDefault()}>
        <div className="field">
          <label>Search video</label>
          <input
            type="text"
            value={input}
            onChange={(evt) => setInput(evt.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
