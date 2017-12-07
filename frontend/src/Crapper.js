import React, { Component } from 'react';
import PropTypes from 'react-proptypes';
import { connect } from 'react-redux';

import {
  setInput,
  getCraps,
  createCrap,
  deleteCrap
} from './actions';


class Crapper extends Component {

  static propTypes = {
    craps:    PropTypes.arrayOf(PropTypes.object).isRequired,
    input:    PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  }


  componentWillMount() {
    this.props.dispatch(getCraps());
  }


  handleChange = (e) => {
    this.props.dispatch(setInput(e.target.value));
  }


  handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { input, dispatch } = this.props;
    dispatch(createCrap(input));
  }


  renderCrap(crap) {
    return <div key={crap.id} className='pull-left'>
      <span>{crap.text}</span>
      <button onClick={() => { this.props.dispatch(deleteCrap(crap.id)); }}>
        X
      </button>
    </div>;
  }


  render() {
    const { input, craps } = this.props;

    return(
      <div className='ml-100'>
        <div className='mt-100 w-40pct timer-box'>
          <h4 className='pull-left'>Crap anonymous people say</h4>
          {craps.map(this.renderCrap)}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={input} onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}


export default connect((state) => ({
  input: state.input,
  craps: state.craps
}))(Crapper);
