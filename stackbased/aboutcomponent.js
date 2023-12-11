import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AboutScreenComponent=()=>{
    return (
        <View style={styles.view}>
            <Text style={styles.text}>This is About Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        height:100,
        width:400,
        backgroundColor:'yellow',
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        height:80,
        width:100,
        backgroundColor: 'black',
        color:'white',
        fontSize:'20px'
    }
});

export default AboutScreenComponent;