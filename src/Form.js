import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    group: '',
    formValid: false,
  };

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      const newState = {
        ...prevState,
        [name]: value,
      };
      if (newState.name === '' || newState.group === '') {
        newState.formValid = false;
      } else {
        newState.formValid = true;
      }
      return newState;
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      group: this.state.group,
    });
    this.setState(prevState => {
      return { name: '', group: '', formValid: false };
    });
  }

  render() {
    const groups = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    return (
      <form
        onChange={e => this.handleChange(e)}
        onSubmit={e => this.handleSubmit(e)}
      >
        <div>
          <label htmlFor="name" />
          <input type="text" name="name" id="name" value={this.state.name} />
        </div>
        <div>
          <select name="group" id="group" value={this.state.group}>
            {groups.map(group => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>
        <button disabled={!this.state.formValid}>save</button>
      </form>
    );
  }
}
