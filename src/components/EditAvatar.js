import React from 'react'
import {connect} from 'react-redux'
import ReactAvatarEditor from 'react-avatar-editor'
import {fetchCandidate} from '../store/candidate'
import {Link} from 'react-router-dom'

class UploadAvatar extends React.Component {
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
    this.goBack = this.goBack.bind(this)
  }

  componentDidMount() {
    this.props.fetchCandidate()
  }

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

  goBack() {
    this.props.history.goBack()
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
    this.props.history.goBack()
  }

  render() {
    return (

      <div className='global-screen-box'>
        <div className='upload-img-avatar-container'>
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
            color={[255, 255, 255, 0.6]}
            className="editor-canvas"
          />
        </div>
        <br />

       <h3>New File:</h3>
          <label className="custom-file-upload">
          <input name="newImage" type="file" onChange={this.handleNewImage} />
        </label>
        <br />
         <h3>Zoom:</h3>
        <input
          name="scale"
          type="range"
          onChange={this.handleScale}
          min={this.state.allowZoomOut ? '0.1' : '1'}
          max="2"
          step="0.01"
          defaultValue="1"
        />
        <button className='upload-img-button' onClick={this.handleSubmit}>CONFIRM</button>
        <h3 onClick={this.goBack}>Go Back</h3>

      </div>
    )
  }
}

const mapState = (state) => {
  return {
    candidate: state.candidate,
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchCandidate: () => dispatch(fetchCandidate()),
  }
}

export default connect(mapState, mapDispatch)(UploadAvatar)
