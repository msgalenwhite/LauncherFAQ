import React, { Component } from 'react';
import { Link } from 'react-router';

class LauncherList extends Component {
  constructor(props){
    super(props)
    this.state = {
      launchers: []
    }
  }

  componentDidMount(){
    fetch('/api/v1/launchers')
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ launchers: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let launcherList = this.state.launchers.map((launcher) => {
      return(
        <Link
          to={`/launcher/${launcher.id}`}
          key={launcher.id}>
          <li>
            {launcher.name}
          </li>
        </Link>
      )
    })

    return(
      <div>
        <ul>
          {launcherList}
        </ul>
      </div>
    )
  }
}

export default LauncherList;
