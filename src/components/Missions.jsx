import React from 'react';
import MissionList from './MissionList';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <MissionList />
      </div>
    );
  }
}

export default Missions;
