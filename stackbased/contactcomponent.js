import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const ContactScreenComponent=({navigation})=>{
    return (
        <View style={styles.view}>
            <Text style={styles.text}>This is Contact Screen</Text>
            <Button title='Go to Contact...again'
            onPress={()=>navigation.push('Contact')}
            ></Button>
            {/* Go to immediate back Screen */}
             <Button title='Go back'
            onPress={()=>navigation.goBack()}
            ></Button>
            {/* Go BAck to Top Directly */}
            <Button title='Back to First'
            onPress={()=>navigation.popToTop('Home')}
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
        backgroundColor: 'magenta',
        color:'yellow',
    }
});

export default ContactScreenComponent;