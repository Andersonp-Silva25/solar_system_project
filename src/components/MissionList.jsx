import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class MissionList extends React.Component {
  render() {
    return (
      missions.map(({ name, year, country, destination }) => (
        <MissionCard
          name={ name }
          year={ year }
          country={ country }
          destination={ destination }
          key={ name }
        />
      ))
    );
  }
}

export default MissionList;
