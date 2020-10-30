// import React, { Component } from "react"
// import TombolAngka from "./TombolAngka"

// class App extends Component {
//   constructor (){
//     super ();
//     this.state = {
//       display: 0
//     }
//     this.onClick = this.onClick.bind(this);
//   }

//   onClick = () => {
//     console.log ('diklik')
//     // this.setState ({
//     //   display: 2
//     // })
//   }

//   render(){
//     return (
//       <div>
//         <TombolAngka name ="dua puluh enam" onClick = {this.onClick}/>
//         {/* <h1>{this.state.display}</h1> */}
//         {/* <input type = "text" className = "display" disabled></input>
//          <TombolAngka value = "1" nomor="1"/> */}
//          {/* <TombolAngka value = "2" nomor="2"/>
//          <TombolAngka value = "3" nomor="3"/>
//          <br />
//          <TombolAngka value = "4" nomor="4"/>
//          <TombolAngka value = "5" nomor="5"/>
//          <TombolAngka value = "6" nomor="6"/>
//          <br />
//          <TombolAngka value = "7" nomor="7"/>
//          <TombolAngka value = "8" nomor="8"/>
//          <TombolAngka value = "9" nomor="9"/>
//          <br/>
//          <TombolAngka value = "+" nomor="+" /> */}
//       </div>
     
//     )
//   }
// }

// export default App




import React, { Component } from 'react';
import Display from "./Display"
import TombolAngka from "./TombolAngka";
import './App.css';
import calc from './letscalc.png';
import { Button, Col, Container, Row } from "react-bootstrap";



class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        let checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    

    render() {
        return (
            <Container>
                <Row className="justify-content-center"> 
                        <img src={calc} className="App-calc" alt="calc" width="30%" />
                </Row>
                <Row className="justify-content-center"> 
                        <div className="calcbutton">
                            <Display result={this.state.result}/>
                            <TombolAngka onClick={this.onClick}/>
                        </div>
                </Row>
               
            </Container>
        );
    }
}

export default App;
