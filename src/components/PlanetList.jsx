import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class PlanetList extends React.Component {
  render() {
    return (
      planets.map(({ name, image }) => (
        <PlanetCard planetName={ name } planetImage={ image } key={ name } />
      ))
    );
  }
}

export default PlanetList;
