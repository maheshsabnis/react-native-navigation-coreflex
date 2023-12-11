import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const HomeScreenComponent=({navigation})=>{
    return (
        <View style={styles.view}>
            <Text style={styles.text}>This is Home Screen</Text>
            <Button
             title='Go To Contact'
             onPress={()=>navigation.navigate('Contact')}
            ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        height:400,
        width:400,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    text: {
        height:80,
        width:100,
        backgroundColor: 'cyan',
        color:'yellow',
    }
});

export default HomeScreenComponent;