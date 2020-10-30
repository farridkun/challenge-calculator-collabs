// import React, {Component} from "react"

// // // const TombolAngka = (props) => {
// // //     return (
// // //         <div>
// // //             <button>1</button>
// // //         </div>
// // //     )
// // // }


// class TombolAngka extends Component {
//     constructor (){
//         super ();
//         this.state = {
//             display: ''
//         }
//       }
    
//     //   diklik = () => {
//     //   console.log (this.props.diklik)
//     //   }

//       onClick = () => {
//         this.setState({
//           display: this.state.display + '2'
//       })
//     }

//     onClick3 = () => {
//         this.setState({
//           display: this.state.display + '3'
//       })
//     }

//     onClick4 = () => {
//         this.setState({
//           display: this.state.display + '4'
//       })
//     }

//     onClick5 = () => {
//         this.setState({
//           display: this.state.display + '5'
//       })
//     }

//     onClick6 = () => {
//         this.setState({
//           display: this.state.display + '6'
//       })
//     }

//     onClick7 = () => {
//         this.setState({
//           display: this.state.display + '7'
//       })
//     }

//     onClick8 = () => {
//         this.setState({
//           display: this.state.display + '8'
//       })
//     }

//     onClick9 = () => {
//         this.setState({
//           display: this.state.display + '9'
//       })
//     }

//     onClick0 = () => {
//         this.setState({
//           display: this.state.display + '0'
//       })
//     }

//     onClickPlus = () => {
//         this.setState({
//           display: this.state.display + '+'
//       })
//     }

//     onClickEqual = () => {
//         this.setState ({
//             display: eval(this.state.display)
//         })
//     }


    
//     render(){
//         return(
//         <div>
//             {/* <h1>{this.state.display}</h1> */}
//             <input type = "text" className = "display" disabled value = {this.state.display}></input>
//             <button>{this.props.name}</button>
//             <button onClick = {this.onClick0}>2</button>
//             <button onClick = {this.onClick3}>3</button>
//             <button onClick = {this.onClick4}>4</button>
//             <button onClick = {this.onClick5}>5</button>
//             <button onClick = {this.onClick6}>6</button>
//             <button onClick = {this.onClick7}>7</button>
//             <button onClick = {this.onClick8}>8</button>
//             <button onClick = {this.onClick9}>9</button>
//             <button onClick = {this.onClick0}>0</button>
//             <button onClick = {this.onClickPlus}>+</button>
//             <button onClick = {this.onClickEqual}>=</button>
//         </div>)
//     }
// }

// export default TombolAngka



















import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class TombolAngka extends Component {

    clicked =  (e) => {
        this.props.onClick(e.target.name)
    }

    render() {
        return (
            <div>
                <Button variant="success" className = "operator" name="(" onClick={this.clicked}>(</Button>
                <Button variant="success" className = "operator" name="CE" onClick={this.clicked}>CE</Button>
                <Button variant="success" className = "operator" name=")" onClick={this.clicked}>)</Button>
                <Button variant="success" className = "operator" name="C" onClick={this.clicked}>C</Button>
                <br/>
                


                <Button variant="success" className = "number" name="1" onClick={this.clicked}>1</Button>
                <Button variant="success" className = "number" name="2" onClick={this.clicked}>2</Button>
                <Button variant="success" className = "number" name="3" onClick={this.clicked}>3</Button>
                <Button variant="success" className = "operator" name="+" onClick={this.clicked}>+</Button>
                <br/>
                


                <Button variant="success" className = "number" name="4" onClick={this.clicked}>4</Button>
                <Button variant="success" className = "number" name="5" onClick={this.clicked}>5</Button>
                <Button variant="success" className = "number" name="6" onClick={this.clicked}>6</Button>
                <Button variant="success" className = "operator" name="-" onClick={this.clicked}>-</Button>
                <br/>
                

                <Button variant="success" className = "number" name="7" onClick={this.clicked}>7</Button>
                <Button variant="success" className = "number" name="8" onClick={this.clicked}>8</Button>
                <Button variant="success" className = "number" name="9" onClick={this.clicked}>9</Button>
                <Button variant="success" className = "operator" name="*" onClick={this.clicked}>x</Button>
                <br/>
                


                <Button variant="success" className = "operator" name="." onClick={this.clicked}>.</Button>
                <Button variant="success" className ="number" name="0" onClick={this.clicked}>0</Button>
                <Button variant="success" className = "operator" name="=" onClick={this.clicked}>=</Button>
                <Button variant="success" className = "operator" name="/" onClick={this.clicked}>÷</Button>
                <br/>
            </div>
        );
    }
}


export default TombolAngka;