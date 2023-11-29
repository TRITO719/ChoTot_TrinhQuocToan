import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Sp2 = () => {
    const navigation = useNavigation();

    const handleButton1Press = () => {
      
      navigation.navigate('Screen1');
    };
  
    const handleButton2Press = () => {
      
      navigation.navigate('MuaSp');
    };
  return (
    <View>
        <View style={styles.container}>
            <Image style={styles.imageSp} source={require('../img/highland.png')}/>
        </View>
        <View style={styles.section}>
            <Text style={styles.text1}>Khuyến mãi Highland ngày lễ tình nhân</Text>
            <View style={styles.price}>
                <Text style={styles.text4}>-30%</Text>
                <Text style={styles.text2}>56.000</Text>
                <Text style={styles.text3}>78.000đ</Text>
            </View>
            <View style={styles.sale1}>
                <Text style={styles.text5}>Ưu đãi từ Vani Xu</Text>
                <Text style={styles.text6}>Nhận thưởng lên đến 2.190 Vani xu</Text>
            </View>
            <View style={styles.info}>
                <Text style={styles.text2}>Mô tả sản phẩm</Text>
                <Text>Combo cho các cặp tình nhân ngày Valentine</Text>
                <Text>Ưu đãi khi mua 2 sản phẩm sẽ được giảm giá lên tới 30%</Text>
                <Text>Ngoài ra, cũng phải kể đến menu cực kỳ đa dạng các món chắc chắn sẽ làm ngày lễ tình nhân thêm tuyệt vời</Text>
            </View>
            <View style={styles.buttonForm}>
            <TouchableOpacity
                style={[styles.button2, { backgroundColor: 'white' }]}
                onPress={handleButton1Press}>
                <Text style={styles.buttonText2}>Tặng bạn bè</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, { backgroundColor: 'purple' }]}
                onPress={handleButton2Press}>
                <Text style={styles.buttonText}>Mua</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  imageSp:{
    width:330,
    height:200,
    borderRadius:15,
  },
  section:{
    marginTop:16,
    marginLeft:10,
  },
  text1:{
    fontSize:18,
    fontWeight: 'bold',
    color: 'rgb(112 92 92)',
  },
  text2:{
    fontSize:18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  text3:{
    fontSize:18,
    textDecorationLine:'line-through',
    color: 'rgb(112 92 92)',
    marginLeft: 10,
  },
  text4:{
    backgroundColor:'red',
    color: 'white',
    fontSize:15,
    borderRadius:6,
  },
  price:{
    flexDirection: 'row', 
    marginLeft: 10,
    alignItems: 'center',
  },
  sale1: {
    borderWidth: 1,
    borderColor: 'purple',
    padding: 10,
    borderRadius:10,
    marginTop:5,

  },
  text5: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft: 10,
  },
  text6: {
    fontSize: 14,
    color: 'purple',
  },
  info: {
    borderWidth: 1,
    borderColor: 'rgb(227 212 212)',
    padding: 10,
    borderRadius:10,
    marginTop:5,

  },
  buttonForm: {
    borderWidth: 1,
    borderColor: 'rgb(227 212 212)',
    padding: 10,
    borderRadius:10,
    marginTop:5,
    flexDirection:'row'

  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    width: 150,
    height: 50,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'purple',
    borderWidth: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: 'purple',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Sp2;


