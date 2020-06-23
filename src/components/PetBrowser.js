import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  



  render() {
    debugger;
    const allPets = this.props.pets.map(pet =>
)
  return <div className="ui cards"> <Pet pets={allPets} /></div>
  }
}

export default PetBrowser
