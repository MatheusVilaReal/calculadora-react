import React from 'react'
import {StyleSheet, View, TextInput} from 'react-native'
import {StatusBar} from 'expo-status-bar';

import Display from './src/Display'
import Keyboard from './src/Keyboard'

export default class App extends React.Component{

    constructor(){
        super()

        this.state = {

            lvalue: '0',
            rvalue: '0',
            operation: '0',
            showsResult: 0
        }

        this.addDigit = this.addDigit.bind(this)
        this.backspace = this.backspace.bind(this)
        this.clear = this.clear.bind(this)
        this.clearAll = this.clearAll.bind(this)
        this.addOperation = this.addOperation.bind(this)
        this.swapSign = this.swapSign.bind(this)
        this.equals = this.equals.bind(this)
    }

    addDigit(value){

        let {rvalue, showsResult} = this.state

        if(rvalue !== '0' && showsResult === 0){
        
            rvalue += value

        } else{

            rvalue = value
            showsResult = 0
        }

        this.setState({rvalue, showsResult})
    }

    backspace(){

        let {rvalue} = this.state

        if(rvalue.length > 1){

            rvalue = rvalue.slice(0, -1)
        
        } else{

            rvalue = '0'
        }

        this.setState({rvalue})
    }

    clear(){

        this.setState({rvalue: '0'})
    }

    clearAll(){

        this.setState({

            lvalue: '0',
            rvalue: '0',
            operation: '0',
            showsResult: 0
        })
    }

    addOperation(operation){
        
        const {rvalue} = this.state

        if(this.state.operation !== '0'){

            this.equals()

            this.setState({operation})

            return
        }

        this.setState({lvalue: rvalue, operation, showsResult: 1})
    }

    swapSign(){

        let {rvalue} = this.state

        if(rvalue.includes('-')){
                
            rvalue = rvalue.slice(1)

        } else if(rvalue !== '0'){

            rvalue = '-' + rvalue
        }

        this.setState({rvalue})
    }

    getResult(lvalue, operation, rvalue){

        const parse = 
            (lvalue.includes('.') || rvalue.includes('.')) ?
            (number) => parseFloat(number) : 
            (number) => parseInt(number)

        let result = parse(lvalue)

        switch(operation){

            case 'add':
                result = parse(lvalue) + parse(rvalue)
                break

            case 'sub':
                result = parse(lvalue) - parse(rvalue)
                break

            case 'mul':
                result = parse(lvalue) * parse(rvalue)
                break

            case 'div':
                result = parse(lvalue) / parse(rvalue)
                break
        }

        return result
    }

    equals(){

        const {lvalue, operation, rvalue} = this.state

        let result = this.getResult(lvalue, operation, rvalue)
            .toString()

        if(result.length > 12)
            result = result.slice(0, 12)

        this.setState({lvalue: result, rvalue: result, 
            operation: '0', showsResult: 1, isFloat: false})
    }

    render(){

        return(

            <View style={styles.container}>  

                <Display>
                    {this.state.rvalue}
                </Display>

                <Keyboard addDigit={this.addDigit}
                    backspace={this.backspace}
                    clear = {this.clear}
                    clearAll = {this.clearAll}
                    addOperation = {this.addOperation}
                    swapSign = {this.swapSign}
                    equals = {this.equals}
                />

                <StatusBar style="light" />
            </View>  
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        width: 400
    }
})