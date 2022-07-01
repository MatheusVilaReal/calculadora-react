import React from 'react-native'
import {StyleSheet, Text, TouchableHighlight, View} 
    from 'react-native'

const Button = (props) => (

    <View>

        <TouchableHighlight style={props.style} 
            onPress={props.action}>

            <View style={{flex: 1, justifyContent: 'center'}}>    

                <Text style={styles.keyboardText}>
                    {props.children}
                </Text>
            </View>
        </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({

    keyboardText: {

        textAlign: 'center',
        color: '#ffffff',
        fontSize: 24,
    }
})

export default Button