import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'Search for a car' };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Image search</label>
            <input
              onChange={e => this.setState({ term: e.target.value })}
              type='text'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
