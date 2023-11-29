import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet,TouchableOpacity,Alert } from 'react-native';

const MuaSp = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState('');

    const selectValue = (value) => {
      setSelectedValue(value);
    };
    const handleThanhToan = () => {
      navigation.navigate('Comp');
  };
    
  return (
    <View>
        <View style={styles.info}>
         <Text style={styles.text22}>Thông tin sản phẩm</Text>
         <View style={styles.formSp}>
            <View>
                <Image style={[{width:120,height:90, borderRadius:10}]} source={require('../img/sp1.jpg')}/>
            </View>
            <View>
                <Text style={styles.text1}>Lẩu gà ớt hiểm + 2 nước ngọt</Text>
                <Text style={styles.text2}>219.000đ</Text>
                <Text style={styles.text3}>293.000đ</Text>
            </View> 
         </View>
         <View style={styles.headbot}>
                <Text>Số lượng</Text>
                <Text>1</Text>
        </View>
        </View>
        <View style={styles.info}>
            <View >
                <Text style={styles.text22}>Phương thức thanh toán</Text>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={[styles.radioButton, selectedValue === 'option1' && styles.selectedButton1]}
                        onPress={() => selectValue('option1')}
                    >
                        <Text style={styles.buttonText}>Momo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.radioButton, selectedValue === 'option2' && styles.selectedButton2]}
                        onPress={() => selectValue('option2')}
                    >
                        <Text style={styles.buttonText}>VNPay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        <View style={styles.info}>
            <Text style={styles.text22}>Tổng thanh toán</Text>
            <View>
            <View style={styles.headbot}>
                <Text style={styles.text2}>Giá sản phẩm</Text>
                <Text style={styles.text2}>219.000</Text>
            </View>
            
            <View style={styles.headbot}>
                <Text style={styles.text2}>Tổng số tiền thanh toán</Text>
                <Text style={styles.text22}>219.000đ</Text>
            </View>
            </View>
        </View>
        <View style={styles.center}>
            <TouchableOpacity
                style={[styles.bnt, { backgroundColor: 'purple' }]}
                onPress={handleThanhToan} >
                <Text style={styles.textBt}>Thanh Toán</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
  
};
const styles = StyleSheet.create({
    textBt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
    center:{
        alignItems: 'center',
    },
    bnt:{
        width:250,
        height:50,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    horizontalLine: {
        borderBottomColor: 'black', 
        borderBottomWidth: 2, 
        marginVertical: 10, 
      },
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        marginTop: 20,
      },
      radioButton: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 5,
      },
      selectedButton1: {
        backgroundColor: 'purple', 
      },
      selectedButton2: {
        backgroundColor: 'blue', 
      },
      buttonText: {
        fontSize: 16,
      },
    headbot:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    formSp:{
        flexDirection:'row',
        marginLeft:10,
    },
    text2:{
        fontSize:12,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
      },
      text3:{
        fontSize:14,
        textDecorationLine:'line-through',
        color: 'rgb(112 92 92)',
        marginLeft: 10,
      },
    text1:{
        fontSize:14,
        fontWeight: 'bold',
        color: 'rgb(112 92 92)',
      },
    text22:{
        fontSize:18,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 10,
      },
    info: {
        borderWidth: 1,
        borderColor: 'rgb(227 212 212)',
        padding: 10,
        borderRadius:10,
        marginTop:5,
        backgroundColor:'white',
      },
    
});


export default MuaSp;
