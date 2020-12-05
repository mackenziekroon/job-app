import React from 'react'
import {connect} from 'react-redux'
import {postNewOrganization} from '../store/organization'
import {Link} from 'react-router-dom'

class SignUpOrgDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      location: '',
      description: '',
      isRemote: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.newOrganization({...this.state})
    this.setState({
      name: '',
      location: '',
      description: '',
      isRemote: '',
    })
  }

  render() {
    const {name, location, description, isRemote} = this.state
    return (
      <div>
        <form id="add-form">
          <h5>Company Name</h5>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <h5>Location</h5>
          <input
            type="text"
            name="location"
            onChange={this.handleChange}
            value={location}
          />
          <h5>Give a brief description of the company </h5>
          <textarea
            type="text"
            name="description"
            onChange={this.handleChange}
            value={description}
          />
          <h5>Are you willing to hire remote employees?</h5>
          <input
            type="radio"
            name="isRemote"
            checked={isRemote === true}
            onChange={this.handleChange}
            value="true"
          />
          Yes
          <input
            type="radio"
            name="isRemote"
            checked={isRemote === false}
            onChange={this.handleChange}
            value="false"
          />
          No
          <Link to="/name">
            <button type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </Link>
        </form>
      </div>
    )
  }
}

const mapDispatch = (dispatch) => {
  return {
    newOrganization: (organization) =>
      dispatch(postNewOrganization(organization)),
  }
}

export default connect(null, mapDispatch)(SignUpOrgDetails)