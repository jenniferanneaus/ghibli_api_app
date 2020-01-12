import React from 'react';
import Welcome from './Welcome'
import Info from './Info'
import './css/App.css';


class App extends React.Component {
  
  constructor()
  {
    super()
    this.state = {
      loading: false,
      data: {},
      infoComponents: [<Welcome />]
    }
    this.baseURL = "https://ghibliapi.herokuapp.com/"
    this.getData = this.getData.bind(this)
    this.homePage = this.homePage.bind(this)
  }

  homePage() {
    this.setState({
      infoComponents: [<Welcome />]
    })
  }

  getData(category) {
    this.setState({loading: true})
    let cat = category

    let infComponents = []
    let url = this.baseURL + cat
    fetch(url)
    .then(response => response.json())
    .then(result => {
      this.setState({
        data: result,
      })
    })
    .then( () => {
      switch(cat) {
        case "people":
          infComponents = this.createPeopleComponents()
          break;
        case "films":
          infComponents = this.createFilmComponents()
          break;
        default:
          infComponents = this.createErrorMessage()
      }
      this.setState({
        infoComponents: infComponents,
        loading: false
      })
    })
    .catch( err => {
      console.log(err)
    })
  }

  createPeopleComponents()
  {
    let peopleComponents = []
    for (let i=0; i<this.state.data.length; i++)
    {
      let info = <Info key={this.state.data[i]['id']} 
      name={this.state.data[i]['name']} 
      age={this.state.data[i]['age']}
      gender={this.state.data[i]['gender']}
      eye_color={this.state.data[i]['eye_color']}
      hair_color={this.state.data[i]['hair_color']} />
      peopleComponents.push(info)
    }
    return peopleComponents
  }

  createFilmComponents()
  {
    let filmComponents = []
    for (let i=0; i<this.state.data.length; i++)
    {
      let info = <Info key={this.state.data[i]['id']} 
      title={this.state.data[i]['title']} 
      description={this.state.data[i]['description']} 
      director={this.state.data[i]['director']} 
      release_date={this.state.data[i]['release_date']}
       />
      filmComponents.push(info)
    }
    return filmComponents
  }

  createErrorMessage()
  {
    let err = [<div>Sorry, there was an error with that request</div>]
    return err
  }

  render() {
    const loadMsg = "Loading..."
    return (
      <div>
        <header>
          <div className="title">
            <h1><em>Studio Ghibli</em> API App</h1>
            <p><em>株式会社スタジオジブリ</em> エーピーアイ アプリ</p>
          </div>
          <ul className="nav-list">
            <li><button className="btn" onClick={() => this.homePage()}>Home</button></li>
            <li><button className="btn" onClick={() => this.getData("people")}>Characters</button></li>
            <li><button className="btn" onClick={() => this.getData("films")}>Films</button></li>
          </ul>
        </header>
        <div className="container flexbox-info-components">
          {this.state.loading ? loadMsg : this.state.infoComponents}
        </div>
      </div>
    )
  }
}

export default App;
