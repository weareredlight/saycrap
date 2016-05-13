import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { setInput, getCraps, createCrap } from './actions';


const Crapper = React.createClass({

  propTypes: {
    craps:    PropTypes.arrayOf(PropTypes.object).isRequired,
    input:    PropTypes.string.isRequired,
    dispatch: PropTypes.func.isRequired
  },


  componentWillMount() {
    this.props.dispatch(getCraps());
  },


  handleChange(e) {
    console.log('yo');
    this.props.dispatch(setInput(e.target.value));
  },


  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const { input, dispatch } = this.props;
    dispatch(createCrap(input));
  },


  renderCrap(crap) {
    return <div key={crap.id} className='pull-left'>
      <span>{crap.text}</span>
    </div>;
  },


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

});


export default connect((state) => ({
  input: state.input,
  craps: state.craps
}))(Crapper);
