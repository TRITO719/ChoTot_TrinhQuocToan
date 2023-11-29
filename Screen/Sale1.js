import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Sale1 = ({}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = {
      "food": [
        {
          "id": 1,
          "name": "Lẩu gà ớt hiểm + 2 nước ngọt",
          "price": 219000,
          "image": require('../img/lauga.png')
        },
        {
          "id": 2,
          "name": "Khuyến mãi ngày Valentine",
          "price": 56000,
          "image": require('../img/highland.png')
        },
        {
          "id": 3,
          "name": "Khuyến mãi KFC",
          "price": 125000,
          "image": require('../img/kfc.jpg')
        },
        {
          "id": 4,
          "name": "Mời bạn-Vé Cinema",
          "price": 51999,
          "image": require('../img/galaxy-cinema.jpg')
        }
      ]
    };

    setProducts(data.food);
  }, []);
  const navigation = useNavigation();
  const handleProductPress = (id) => {
    navigation.navigate(`Sp${id}`);
  };
  const renderItem = ({ item }) => (
    
    <TouchableOpacity onPress={() => handleProductPress(item.id)}>
      <View style={styles.productItem}>
        <Image source={item.image} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productPrice}>{`${item.price}Đ`}</Text>
        </View>
    </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Hot Deals</Text>
      
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
  
};
const styles = StyleSheet.create({
  text1:{
    fontSize:18,
    fontWeight: 'bold',
    color: 'rgb(112 92 92)',
  },
  container: {
    flex: 1,
    backgroundColor: 'whiteSmoce',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    borderRadius: 10,
    border:"1 px solid black",
  },
  productImage: {
    width: 130,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
});


export default Sale1;
