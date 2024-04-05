import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    activeTabId: countryAndCapitalsList[0].id,
  }

  // mistake1 instead onChange method getCountry functionality is implemented here
  onChangeUpdateName = event => {
    this.setState({
      activeTabId: event.target.value,
    })
  }

  getCountry = () => {
    const {activeTabId} = this.state
    const result = countryAndCapitalsList.find(
      eachCountry => eachCountry.id === activeTabId,
    )
    return result.country
  }

  render() {
    const {activeTabId} = this.state
    const country = this.getCountry(activeTabId)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>

          <select
            className="form-control select-styling"
            onChange={this.onChangeUpdateName}
            id="selectKey"
          >
            <option selected value="NEW_DELHI">
              New Delhi
            </option>
            <option value="LONDON">London</option>
            <option value="PARIS">Paris</option>
            <option value="KATHMANDU">Kathmandu</option>
            <option value="HELSINKI">Helsinki</option>
          </select>

          <span htmlFor="selectKey">is capital of which country</span>

          <p className="country-heading">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
