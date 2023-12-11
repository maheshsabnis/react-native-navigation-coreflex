 
import {View,Text,StyleSheet, Button} from 'react-native';

const FirstComponent=()=>{

    return(
        <View style={styles.container}>
            <Text style={styles.text}>The First Component</Text>
            <Button style={styles.button}
              title='Navigate to Second'
            ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:400,
        width:400,
        backgroundColor:'yellow'
    },
    text:{
       height:80,
       width:200,
       backgroundColor:'azure',
       color:'red'
    },
    button:{
        height:100,
        width:200,
        backgroundColor:'blue',
        color:'red'
    }
});

export default FirstComponent;