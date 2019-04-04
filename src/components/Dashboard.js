import React, {Component} from 'react';
import {connect} from 'react-redux';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      isAnsweredSelected: true,
    };
  }

  onClickAnswered = () => {
    this.setState({ isAnsweredSelected: true })
  }

  onClickUnanswered = () => {
    this.setState({ isAnsweredSelected: false })
  }

  render() {
    const {
      authedUser,
      answered,
      unanswered,
    } = this.props;
    const {isAnsweredSelected} = this.state;
    const list = isAnsweredSelected
      ? answered
      : unanswered;

    return (
      <div>
        <div className='dashboard-toggle'>
          <button
            onClick={this.onClickAnswered}
            style={{
              textDecoration: isAnsweredSelected && 'underline',
            }}>
            Answered
          </button>
          <span>|</span>
          <button
            onClick={this.onClickUnanswered}
            style={{
              textDecoration: !isAnsweredSelected && 'underline',
            }}>
            Unanswered
          </button>
        </div>
        <div className='dashboard-list'>
          <ul>
            {
              list.map(({id, question}) => {
                return (
                  <li key={id}>{question}</li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  const {
    authedUser,
    polls,
    users,
  } = state;
  const getPoll = (pollId) => polls[pollId];
  const answered = users[authedUser].answers.map(getPoll);
  const unanswered = Object.keys(polls).filter((pollId) => answered.includes(pollId) === false).map(getPoll);

  return {
    authedUser,
    answered,
    unanswered,
  }

}

export default connect(mapStateToProps)(Dashboard);
