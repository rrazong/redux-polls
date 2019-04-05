import React, { Component } from 'react';
import { connect } from 'react-redux';

const Leaderboard = ({leaders}) => (
  <div>
    {
      leaders.map((user) => {
        return (
          <li key={user.id} style={{display: 'flex'}}>
            <img src={user.avatarURL} style={{
              height: 80,
              width: 80,
              borderRadius: 10,
              margin: 10,
            }}></img>
            <div>
              <h3 style={{marginBottom: 4}}>{user.name}</h3>
              <div>{`${user.pollCount} Polls`}</div>
              <div>{`${user.answersCount} Answers`}</div>
            </div>
          </li>
        )
      })
    }
  </div>
);

const mapStateToProps = (state) => {
  const {users} = state;
  const leaders = Object.values(users)
    .map((user) => {
      const {
        id,
        name,
        avatarURL,
        polls,
        answers,
      } = user;
      const pollCount = Object.keys(polls).length;
      const answersCount = Object.keys(answers).length;
      const score = pollCount + answersCount;
      return {
        id,
        name,
        avatarURL,
        pollCount,
        answersCount,
        score,
      }
    })
    .sort((a, b) => (b.score - a.score));
  return {
    leaders,
  };
}

export default connect(mapStateToProps)(Leaderboard)
