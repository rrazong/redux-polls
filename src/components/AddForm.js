import React, {Component } from 'react';
import {connect} from 'react-redux';
import {handleAddPoll} from '../actions/polls';

export class AddForm extends Component {
  constructor() {
    super ()

    this.state = {
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
    }
  }

  handleChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleClickSubmit = (event) => {
    event.preventDefault()

    const {question, optionA, optionB, optionC, optionD} = this.state;
    const poll = {
      question,
      a: {
        text: optionA,
      },
      b: {
        text: optionB,
      },
      c: {
        text: optionC,
      },
      d: {
        text: optionD,
      },
    }
    this.props.dispatch(handleAddPoll(poll));
    console.log('add poll');
  }

  isDisabled = () => {
    const {question, optionA, optionB, optionC, optionD} = this.state;
    return Boolean(question && optionA && optionB && optionC && optionD) === false;
  }

  render() {
    const {question, optionA, optionB, optionC, optionD} = this.state;
    return (
      <form className='add-form'>
        <h3 style={{marginBottom: 5}}>
          What is your question
        </h3>
        <input
          value={question}
          onChange={this.handleChangeInput}
          name='question'
          className='input'
          type='text'
        />
        <h3>What are the options?</h3>
        <label className='label' htmlFor='optionA'>A.</label>
        <input
          value={optionA}
          onChange={this.handleChangeInput}
          name='optionA'
          className='input'
          type='text'
        />
        <label className='label' htmlFor='optionB'>B.</label>
        <input
          value={optionB}
          onChange={this.handleChangeInput}
          name='optionB'
          className='input'
          type='text'
        />
        <label className='label' htmlFor='optionC'>C.</label>
        <input
          value={optionC}
          onChange={this.handleChangeInput}
          name='optionC'
          className='input'
          type='text'
        />
        <label className='label' htmlFor='optionD'>D.</label>
        <input
          value={optionD}
          onChange={this.handleChangeInput}
          name='optionD'
          className='input'
          type='text'
        />
        <button className='btn' disabled={this.isDisabled()} onClick={this.handleClickSubmit}>
          Submit
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  authedUser: state.authedUser,
});

export default connect(mapStateToProps)(AddForm)
  