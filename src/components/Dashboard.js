import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
                  <li key={id}>
                    <Link to={`/polls/${id}`}>
                      {question}
                    </Link>
                  </li>
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
  const {
    authedUser,
    polls,
    users,
  } = state;
  const getPoll = (pollId) => polls[pollId];
  const sortMostRecentFirst = (a, b) => (b.timestamp - a.timestamp);
  const answered = users[authedUser].answers
    .map(getPoll)
    .sort(sortMostRecentFirst);
  const unanswered = Object.keys(polls)
    .filter((pollId) => answered.includes(pollId) === false)
    .map(getPoll)
    .sort(sortMostRecentFirst);

  return {
    answered,
    unanswered,
  }

}

export default connect(mapStateToProps)(Dashboard);
