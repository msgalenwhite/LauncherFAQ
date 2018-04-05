import React, {Component} from 'react'

class LauncherShow extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      id: null,
      bio: ""
    }
  }

  componentDidMount() {
    let id = parseInt(this.props.params.id)

    fetch(`/api/v1/launcher/${id}`)
      .then ( response => {
        if ( response.ok ) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`;
          let error = new Error(errorMessage);
          throw(error);
        }
      })
      .then ( response => response.json() )
      .then ( response => {
        let name = response.name
        let bio = response.bio

        this.setState({
          name: name,
          id: id,
          bio: bio
        })
      })
      .catch ( error => console.error(`Error in fetch: ${error.message}`) );
  }

  render() {

    return(
      <div>
        <h1>{this.state.name}</h1>
        <p>{this.state.bio}</p>
      </div>
    )
  }
}

export default LauncherShow
