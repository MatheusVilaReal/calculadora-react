import React from 'react'
import {StyleSheet, View} from 'react-native'
import Button from './Button'

const Keyboard = ({addDigit, backspace, clear, 
    clearAll, addOperation, swapSign, equals}) => {

    return(

        <View style={styles.box}>
        <View style={styles.container}>

            <Button style={styles.operator} 
                action={() => clearAll()}>
                AC
            </Button>

            <Button style={styles.operator} 
                action={() => clear()}>
                C
            </Button>

            <Button style={styles.operator} 
                action={() => backspace()}>
                ⌫
            </Button>

            <Button style={styles.operator} 
                action={() => addOperation('div')}>
                ÷
            </Button>

            <Button style={styles.number} 
                action={() => addDigit('7')}>
                7
            </Button>

            <Button style={styles.number} 
                action={() => addDigit('8')}>
                8
            </Button>

            <Button style={styles.number} 
                action={() => addDigit('9')}>
                9
            </Button>

            <Button style={styles.operator} 
                action={() => addOperation('mul')}>
                ×
            </Button>
            
            <Button style={styles.number} 
                action={() => addDigit('4')}>
                4
            </Button>

            <Button style={styles.number} 
                action={() => addDigit('5')}>
                5
            </Button>

            <Button style={styles.number} 
                action={() => addDigit('6')}>
                6
            </Button>

            <Button style={styles.operator} 
                action={() => addOperation('sub')}>
                -
            </Button>
            
            <Button style={styles.number} 
                action={() => addDigit('1')}>
                1
            </Button>

            <Button style={styles.number} 
                action={() => addDigit('2')}>
                2
            </Button>

            <Button style={styles.number} 
                action={() => addDigit('3')}>
                3
            </Button>

            <Button style={styles.operator} 
                action={() => addOperation('add')}>
                +
            </Button>

            <Button style={styles.number} 
                action={() => addDigit('.')}>
                .
            </Button>

            <Button style={styles.number} 
                action={() => addDigit('0')}>
                0
            </Button>

            <Button style={styles.number} 
                action={() => swapSign()}>
                ±
            </Button>

            <Button style={styles.operator} 
                action={() => equals()}>
                =
            </Button>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    
    box:{

        flex: 1,
        backgroundColor: '#131313',
        marginTop: 10
    },
    container: {

        flex: 1,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    operator: {

        width: 72,
        height: 72, 
        backgroundColor: '#8600e0',
        paddingLeft: 20,
        paddingRight: 20,
        margin: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0, 
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    },
    number: {

        width: 72,
        height: 72, 
        backgroundColor: '#474747',
        paddingLeft: 20,
        paddingRight: 20,
        margin: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
    }
})

export default Keyboard