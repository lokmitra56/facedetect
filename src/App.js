import React from 'react';
import 'tachyons';
import Particles from "react-tsparticles";
import Option from "./components/particles.js";
import Signin from "./components/signin.js";
// import Register from "./components/register.js";
import Navigation from './components/navigation';
import Logo from './components/logo';
import Imageform from './components/imageform';
import Imageview from './components/imageview';
import './App.css';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
 apiKey: '5266635b190544cdbb23b1cd3f7cbfec'
});


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {},
      route: "signin"
      }
    }
  

  Facebox = (response) => {
      const event = response.outputs[0].data.regions[0].region_info.bounding_box;
      const img = document.getElementById("facebox");
      const height = Number(img.height);
      const width = Number(img.width);
    
      const newbox = {
          bottom_row: height - event.bottom_row * height,
          top_row: event.top_row * height,
          left_col: event.left_col * width,
          right_col: width - event.right_col * width 
        } 
      
        this.setState({box:newbox})    
  }
    
  // Onregister = () => {
  //   console.log("register")
  // }
  
  Oninput = (event) => {
    this.setState({input: event.target.value});
  }

  Onbutton = () => {
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,this.state.input)
        .then(response => {
          this.Facebox(response);
          console.log(this.state.box);
        })
        .catch(err => console.log(err));
  }

  Routechange = (event) => {
    this.setState({route:event})
  }

  render() {
    return (
      <div className='App'>
        <Particles className='particles' options = {Option} />
        <Navigation Routechange={this.Routechange}/>

        { (this.state.route === "signin") 
          ? 
          <div>
            <Signin Routechange={this.Routechange}/>
            {/* <Register Onregister={this.Onregister}/> */}
          </div>
          : 
          <div>
            <Logo />
            <Imageform Oninput={this.Oninput} Onbutton={this.Onbutton}/>
            <Imageview box={this.state.box} imageURL={ this.state.imageURL }/>
          </div>
        }

      </div>
    );
  }

}


export default App;






// calculateFaceLocation = (data) => {
  //   const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
  //   const image = document.getElementById('inputimage');
  //   const width = Number(image.width);
  //   const height = Number(image.height);
  //   return {
  //     leftCol: clarifaiFace.left_col * width,
  //     topRow: clarifaiFace.top_row * height,
  //     rightCol: width - (clarifaiFace.right_col * width),
  //     bottomRow: height - (clarifaiFace.bottom_row * height)
  //   }
  // // }

  // displayFaceBox = (box) => {
  //   this.setState({box: box});
  // }