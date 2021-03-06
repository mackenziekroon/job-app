import React from 'react'
import {connect} from 'react-redux'
import ReactAvatarEditor from 'react-avatar-editor'
import {fetchCandidate} from '../store/candidate'
import {Link} from 'react-router-dom'

class UploadLogo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      allowZoomOut: false,
      position: {x: 0.5, y: 0.5},
      scale: 1,
      rotate: 0,
      borderRadius: 50,
      preview: null,
      width: 200,
      height: 200,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidMount() {
  //   this.props.loadOrganization(this.props.organization.id)
  // }

  handleNewImage = (e) => {
    this.setState({image: e.target.files[0]})
  }

  handleScale = (e) => {
    const scale = parseFloat(e.target.value)
    this.setState({scale})
  }

  handlePositionChange = (position) => {
    this.setState({position})
  }

  setEditorRef = (editor) => (this.editor = editor)

  async handleSubmit(e) {
    if (this.editor) {
      // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
      // drawn on another canvas, or added to the DOM.
      const img = this.editor.getImageScaledToCanvas().toDataURL()
      await fetch(`/api/upload`, {
        method: 'POST',
        body: JSON.stringify({data: img}),
        headers: {'Content-type': 'application/json'},
      })
    }
    this.props.history.push('/signup/organization/job')
  }

  render() {
    return (
      <div>
        <div>
          <ReactAvatarEditor
            ref={this.setEditorRef}
            scale={parseFloat(this.state.scale)}
            width={this.state.width}
            height={this.state.height}
            position={this.state.position}
            onPositionChange={this.handlePositionChange}
            rotate={parseFloat(this.state.rotate)}
            borderRadius={this.state.width / (100 / this.state.borderRadius)}
            image={this.state.image}
            className="editor-canvas"
          />
        </div>
        <br />
        New File:
        <input name="newImage" type="file" onChange={this.handleNewImage} />
        <br />
        Zoom:
        <input
          name="scale"
          type="range"
          onChange={this.handleScale}
          min={this.state.allowZoomOut ? '0.1' : '1'}
          max="2"
          step="0.01"
          defaultValue="1"
        />
        <button onClick={this.handleSubmit}>Confirm</button>
        <Link to="/signup/organization/job">
          <button>Skip</button>
        </Link>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    organization: state.organization,
  }
}

// const mapDispatch = (dispatch) => {
//   return {
//     fetchCandidate: () => dispatch(fetchCandidate()),
//   }
// }

export default connect(mapState)(UploadLogo)
