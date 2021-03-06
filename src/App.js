import React, { Component } from 'react';
import Display from "./Display"
import TombolAngka from "./TombolAngka";
import './App.css';
import calc from './letscalc.png';
import phone from './phone.png';
import { Button, Col, Container, Row } from "react-bootstrap";
import PrevOperationz from "./PrevOperationz";
import back from './right-arrow-black-triangle.svg'
import home from './rounded-black-square-shape.svg'
import optionss from './dry-clean.svg' 

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: '',
            prevOperation: ''
        };
     
    }
    
    onClick = button => {
        let forbiddenOnes = ['++', '**', '//', '+*', '-*', '-+', '*+', '+/', '/+', '*/', '/*', '-/', '-*', '..', '--','+-', '*-','()']
        if (this.state.prevOperation!==''){
            let operators = ['+','-','*', '/']
            if (operators.indexOf(button)>-1){
                this.setState({
                    result: this.state.result + button,
                    prevOperation: ''
                });    
            } else {
                if (button === 'CE') {
                    this.backspace()
                } else if (button === 'C'){
                    this.reset()
                } if (button === "="){
                    this.calculate()
                } else {
                    this.setState({
                        result: button,
                        prevOperation: ''
                    });
                }
            }
        }
        else if (this.state.prevOperation ===''){
            if (button === "="){
                return this.calculate()
            }
    
            else if(button === "C"){
                return this.reset()
            }
            else if(button === "CE"){
                return this.backspace()
            }

    
            else if (forbiddenOnes.indexOf(this.state.result[this.state.result.length-1] + button) > -1 ){
                this.setState({
                    result: this.state.result.slice(0, -1) + button
                })  
            }
            else if (this.state.result.length>11){
                this.setState({
                    result: this.state.result
                })
            }
    
            else {
                this.setState({
                    result: this.state.result + button
                })
            }
        }
        
    };


    calculate = () => {
        
        try {
            this.setState({
                prevOperation: this.state.result,
                result: (eval(this.state.result) || '' ) + ''
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: "",
            prevOperation: ''
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1),
            prevOperation: ''
        })
    };

    

    render() {
        return (
           <div>
                <Row> 
                    <div className='letscalc'>
                        <img src={calc} className="lets" alt="calc" />
                    </div>
                    <div className="mockup">
                        <div className="phone">
                            <img src={phone} className="App-phone" alt="phone" />
                        </div>
                        <div className="calcbutton">
                            <PrevOperationz prevOps={this.state.prevOperation} />
                            <Display result={this.state.result} />
                            <TombolAngka onClick={this.onClick} />
                        </div>
                        <div className = "mockup-menu">
                            <img src={home} alt = 'home'></img>
                            <img src={optionss} alt = 'option'></img>
                            <img src={back} alt = 'back'></img>
                        </div>
                    </div>
                </Row>   
            </div>
        );
    }
}

export default App;
