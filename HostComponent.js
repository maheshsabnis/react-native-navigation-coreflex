/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
 
import { StyleSheet, Text, View } from 'react-native';
/* A Container Object that is responsible to manage Navigation across component
 besides this it is also responsible to maintain the state across components 
*/
import {NavigationContainer} from '@react-navigation/native';
/* Create a Stack for Navigation across components
Maintain Stack for keeping Object references for all components in Navigation
*/
import {createNativeStackNavigator} from '@react-navigation/native-stack';
/* Navigator that provides the Tabs */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';'@react-navigation/bottom-tabs';


 
import FirstComponent from './tabednavigation/firstcomponent';
import SecondComponent from './tabednavigation/secondcomponent';
import ProductListComponent from './stackbased/passingparameters/productlistcomponent';
import CategoryListComponent from './stackbased/passingparameters/categorylistcomponent';

const Stack = createNativeStackNavigator();

/* Workspace that holds object references of all components used in Navigation*/
const Tab = createBottomTabNavigator();

export default function HostComponent() {
  return (
      <NavigationContainer>
          {/* initialRouteName: A Name given to a Navigation for a component under the NavigationContainer, this is unique */}
          <Stack.Navigator initialRouteName='CategoryList'> 
             {/* <Stack.Screen name='Home' component={HomeScreenComponent}/>
           <Stack.Screen name='About' component={AboutScreenComponent} options={{title:'Hi I am Maehsh'}}/>
           <Stack.Screen name='Contact' component={ContactScreenComponent}/> */}
            {/* name: A Unique Name for the Route Navigation */}
             <Stack.Screen name="CategoryList" 
           component={CategoryListComponent}
            options={{title: 'Category List',headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            }}}
           />   
            <Stack.Screen name="ProductList" 
           component={ProductListComponent}
           options={{title: 'Product List',headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }}}
           />  
          </Stack.Navigator> 
          {/* Navigator: This provide a 'props' named navigator that has an immutable object storing K:V pairs of data to be shared across components  */}
        {/* <Tab.Navigator> */}
          {/* Screen: Acts as a ViewHost for mounting and rendering the Component */}
          {/* <Tab.Screen name='First' component={FirstComponent}/>
          <Tab.Screen name='Second' component={SecondComponent}/>
        </Tab.Navigator> */}
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
