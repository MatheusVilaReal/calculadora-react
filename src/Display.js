import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

const Display = (props) => (

    <View style={styles.container}>

        <Text style={styles.displayText}>
            {props.children}
        </Text>
    </View>
)

const styles = StyleSheet.create({

    container: {
        
        alignItems: 'flex-end',
        width: 360,
        height: 60,
        marginTop: 160
    },
    displayText: {

        color: '#ffffff',
        fontSize: 50
    }
})

export default Display