import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  fetchCandidateProfile,
  fetchJobProfile,
  fetchUserDetails,
} from '../store/profile'
import OrgHeader from './OrgHeader'
import {fetchOrganization} from '../store/organization'
import {fetchAllJobs} from '../store/job'

class OrgLandingPage extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    // await this.props.loadUserId()
    await this.props.loadOrganization()
    await this.props.loadJobs(this.props.organization.id)
  }

  render() {
    const jobs = this.props.job || []
    return (
      <div>
        <OrgHeader />
        <h2>This is the landing page!</h2>

        <h3>Select a job to start searching for candidates</h3>

        {jobs.length
          ? jobs.map((job) => {
              //ARCHANA: Check with Mackenzie for jobId access
              const linkForCandidateSearch = `/findCandidates/${job.id}`
              return (
                <Link to={linkForCandidateSearch}>
                  <div key={job.id}>
                    <button className="job-listings">
                    <h5>{job.title}</h5>
                    <h5>{job.location}</h5>
                  </button>
                  </div>
                </Link>
              )
            })
          : null}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    user: state.user,
    profile: state.profile,
    job: state.job,
    organization: state.organization,
  }
}

const mapDispatch = (dispatch) => {
  return {
    // loadUserId: (id) => dispatch(fetchUserDetails(id)),
    loadOrganization: () => dispatch(fetchOrganization()),
    loadJobs: (orgId) => dispatch(fetchAllJobs(orgId)),
  }
}

export default connect(mapState, mapDispatch)(OrgLandingPage)
