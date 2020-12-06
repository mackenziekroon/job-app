import React from 'react'
import {fetchUserDetails} from '../store/profile'
import {fetchCandidateSkills} from '../store/skills'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      renderForm: false,
    }
    this.displayForm = this.displayForm.bind(this)
  }

  componentDidMount() {
    this.props.loadUserDetails()
    this.props.loadCandidateSkills()
  }

  displayForm() {
    this.setState({
      renderForm: !this.state.renderForm,
    })
  }

  render() {
    const profile = this.props.profile
    const user = this.props.user
    const skills = this.props.skills
    console.log('skills->', this.props)
    let link
    if (user.userType === 'CANDIDATE') {
      link = '/profile/edit'
    } else if (user.userType === 'ORGANIZATION') {
      link = '/profile/editOrg'
    }
    return (
      <div>
        <h4>User Profile</h4>

        <Link to={link}>
          <button onClick={this.displayForm}>Edit my profile</button>
        </Link>
        <h6>{profile.name}</h6>
        <h6>Location: {profile.location}</h6>
        {profile.currentCompany ? (
          <h6>Current Company: {profile.currentCompany}</h6>
        ) : null}
        {profile.currentRole ? (
          <h6>Current Role: {profile.currentRole}</h6>
        ) : null}
        <p>Description: {profile.description}</p>
        {profile.isRemote ? (
          <h6>Willing to hire remote candidates: True</h6>
        ) : (
          <h6>Willing to hire remote candidates: False</h6>
        )}
        <h5>Skills:</h5>
        {skills
          ? skills.map((skill) => <p key={skill.id}>{skill.skill.name}</p>)
          : null}

        {profile.jobs ? (
          <Link to="/profile/jobs">
            <button>View Job Postings</button>
          </Link>
        ) : null}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    profile: state.profile,
    user: state.user,
    skills: state.selectedSkills,
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadUserDetails: () => dispatch(fetchUserDetails()),
    loadCandidateSkills: () => dispatch(fetchCandidateSkills()),
  }
}

export default connect(mapState, mapDispatch)(Profile)
