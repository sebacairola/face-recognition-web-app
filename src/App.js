import './App.css';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import { Component } from 'react';


const app = new Clarifai.App({
  apiKey: '5ecbbbec75ce4b65b739fcdfd309f7a7'
 });

const particleOptions = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
}

class App extends Component{

  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      navState: 'register'
    }
  }

  onInputChange = (event) =>{
    this.setState({ input: event.target.value })
  }

  calculateFaceLocations = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box });
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    app.models.predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocations(response))) 
    .catch(error => console.log(error));
    
  }

  onRouteChange = (route) => {
    if(route === 'register'){
      this.setState({navState: 'signin'});
    } else if( route === 'home'){
      this.setState({navState: 'signout'});
    } else if (route === 'signin'){
      this.setState({navState: 'register'});
    }
    this.setState({ route: route });
  }

  render(){

    let {navState, imageUrl, box, route} = this.state;

    if(route === 'home'){
      return(
        <div>
          <Particles className="particles" params={particleOptions}/>
          <Navigation onRouteChange={this.onRouteChange} navState={navState} />
          <Logo />
          <Rank />
          <ImageLinkForm 
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
          />
          <FaceRecognition box={box} imageUrl={imageUrl}/>
        </div>           
      )
    } else if(route === 'signin'){
      return(
        <div>
          <Particles className="particles" params={particleOptions}/>
          <Navigation onRouteChange={this.onRouteChange} navState={navState} />
          <SignIn onRouteChange={this.onRouteChange}/>
        </div>     
      ) 
    } else {
      return(
        <div>
          <Particles className="particles" params={particleOptions}/>
          <Navigation onRouteChange={this.onRouteChange} navState={navState} />
          <Register onRouteChange={this.onRouteChange}/>
        </div>     
      )
    }
  }
}

export default App;
