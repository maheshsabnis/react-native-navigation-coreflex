 
import {View,Text,StyleSheet, Button} from 'react-native';

const SecondComponent=()=>{

    return(
        <View style={styles.container}>
            <Text style={styles.text}>The Second Component</Text>
            <Button style={styles.button}
              title='Navigate to First'
            ></Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height:400,
        width:400,
        backgroundColor:'red'
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

export default SecondComponent;