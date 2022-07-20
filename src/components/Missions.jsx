import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        { missions.map(({ name: n, year: y, country: c, destination: d }) => (
          <MissionCard name={ n } year={ y } country={ c } destination={ d } key={ n } />
        )) }
      </div>
    );
  }
}

export default Missions;
