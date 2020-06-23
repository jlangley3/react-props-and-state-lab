import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  



  render() {
    const allPets = this.props.pets.map(pet => (
      <Pet pet={pet} />
    ));

  return <div className="ui cards"> {allPets}</div>
  }
}

export default PetBrowser
