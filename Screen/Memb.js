import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';

const Memb = () => {
  return (
    <View>
      <View>
        <Text style={styles.text1}>Đưa mã vạch cho nhân viên để tích điểm</Text>
        <View style={styles.container}>
          <Image style={styles.img} source={require('../img/mem.jpg')}/>
        </View>

      </View>
      <View style={styles.center}>
          <Image style={styles.img2} source={require('../img/m8_TAG_qrcode.png')}/>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor:'white',
    width:330,
    height:120,
    borderRadius:10,
    marginLeft:20
  },
  center:{
    marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img:{
    width:300,
    height:100,
  },
  img2:{
    width:250,
    height:250,
  },
  text1:{
    fontSize:18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
});
export default Memb;
