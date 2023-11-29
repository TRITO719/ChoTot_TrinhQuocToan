import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet,TouchableOpacity,Alert } from 'react-native';

const Comp = ({navigation}) => {
    const handleThanhToan = () => {
        navigation.navigate('Home');
    };
    return(
        <View>
            <View style={styles.container}>
            <Text>Thanh toán thành công</Text>
            <Text>Cảm ơn đã sử dụng dịch vụ</Text>
            </View>
            <View style={styles.center}>
                <Image style={styles.img2} source={require('../img/Comp.jpg')}/>
            </View>
            <View style={styles.center}>
            <TouchableOpacity
                style={[styles.bnt, { backgroundColor: 'purple' }]}
                onPress={handleThanhToan} >
                <Text style={styles.textBt}>Xác nhận</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
    
    };
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor:'white',
      },
      center:{
        alignItems: 'center',
        marginBottom:100
    },
    textBt: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      bnt:{
        width:250,
        height:50,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img2:{
        width:250,
        height:250,
      },
});


export default Comp;
