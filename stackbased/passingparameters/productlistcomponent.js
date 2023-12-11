import {StyleSheet, StatusBar ,View, FlatList,Alert
     ,Text,SafeAreaView} from 'react-native';
     import { useFocusEffect } from '@react-navigation/native';
import {useState,useEffect, useCallback} from 'react';

const Products = [
    {
        ProductId:'Prd-001',
        ProductName: 'Laptop',
        CategoryId:'Cat-001'
    },
    {
        ProductId:'Prd-002',
        ProductName: 'Bulb',
        CategoryId:'Cat-002'
    },
    {
        ProductId:'Prd-003',
        ProductName: 'Biscuts',
        CategoryId:'Cat-003'
    },
    {
        ProductId:'Prd-004',
        ProductName: 'Jeans',
        CategoryId:'Cat-004'
    },
    {
        ProductId:'Prd-005',
        ProductName: 'Desktop',
        CategoryId:'Cat-001'
    },
    {
        ProductId:'Prd-006',
        ProductName: 'Iron',
        CategoryId:'Cat-002'
    },
    {
        ProductId:'Prd-007',
        ProductName: 'Chocklet',
        CategoryId:'Cat-003'
    },
    {
        ProductId:'Prd-008',
        ProductName: 'T-Shirt',
        CategoryId:'Cat-004'
    }
];

const Item = ({product}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{product.ProductId}</Text>
      <Text style={styles.title}>{product.ProductName}</Text>
      <Text style={styles.title}>{product.CategoryId}</Text>
    </View>
  );
/* 
navigation: props that specifies to RN that the current component is mounted undert the navigation container

route: This represents the route naviogation request across components under the NavigationContainer
  - This will allow to read data from Route Parameters 
*/
const ProductListComponent=({route, navigation})=>{
    const [products, setProducts] = useState(Products);
    /* Subscribing to the params, initial value for this will be {} object */
    const {category, id} = route.params;

    // useFocusEffect(
    //      useCallback(() => {
          
    //        if(category !== undefined){
    //         const c = category.substring(1,category.length-1);
             
    //           setProducts(Products.filter((prd,idx)=>{
                
    //             return prd.CategoryId.toString() === c;
    //           }));      
    //        }else {
            
    //            setProducts(Products); 
    //        }
    //     }, [])
    //   );
    


    useEffect(()=>{
        if(category !== undefined){
            const c = category.substring(1,category.length-1);
             
              setProducts(Products.filter((prd,idx)=>{
                
                return prd.CategoryId.toString() === c;
              }));      
           }else {
            
               setProducts(Products); 
           }
    },[]);
  
     
        return (
            <SafeAreaView>
               <FlatList
                numColumns='2'
                data={products}
                renderItem={({item}) => <Item product={item} />}
                keyExtractor={item => item.ProductId}
          />
            </SafeAreaView>
        );
    

   
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

  export default ProductListComponent;