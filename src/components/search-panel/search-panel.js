import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {
  state = {
    tern: ''
  }
  onSearchChange = (e) => {
    const tern = e.target.value;
    this.setState({ tern });
    this.props.onSearchChange(tern);
  }
  render() {
    return (
      <input type="text"
        className="form-control search-input"
        placeholder="type to search"
        value={this.state.tern}
        onChange={this.onSearchChange} />
    );
  }
}
