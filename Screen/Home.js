import React,{ useEffect, useState,useRef } from'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button,ScrollView} from 'react-native';
import { useSafeAreaFrame } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Home=({navigator}) =>{
  const handleImage = (imagePick) =>{
    switch(imagePick){
      case 0:
        navigation.navigate('');
    }
  }
    const img1 = [
      require('../assets/list1.jpg'),
      require('../assets/list2.jpg'),
      require('../assets/list3.jpg'),
      require('../assets/list4.jpg'),
    ];
    const scrollRef = useRef(null);
    const [scrollX, setScrollX] = useState(0);

    const handleImagePress = (imageIndex) => {
      console.log('Image index pressed:', imageIndex);
    };

    useEffect(() => {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          const newScrollX = scrollX + 300;
          setScrollX(newScrollX);
          scrollRef.current.scrollTo({ x: newScrollX, animated: true });
        }
      }, 2000);

      return () => clearInterval(interval);
    }, [scrollX]);
/*----------------------------------------------------------------*/ 
    const navigation = useNavigation();
    const handleIconPress = () => {
      navigation.navigate('Sale1'); 
    };
    const handleTV=()=>{
      navigation.navigate('Memb');
    }
    const handleCoin=()=>{
      navigation.navigate('Coin');
    }
    
/*----------------------------------------------------------------*/      
    const [productList, setProductList] = useState([]);
    useEffect(() => {
      fetch('https://655e36009f1e1093c59ab938.mockapi.io/Vani/food')
        .then((response) => response.json())
        .then((data) => {
          setProductList(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    const renderProductItem = ({ item }) => (
      <View style={styles.productItem}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
      </View>
    );
    
    return(
      <View>
          <View style={styles.header}>
           <View style={styles.leftSection}>
              <Text style={styles.text}>Vani</Text>
            <View style={styles.iconsContainer}>
              <Icon name="bell" size={20} style={styles.icon} />
              <Icon name="cog" size={20} style={styles.icon} /> 
            </View>
          </View>
            <View style={styles.horizontalLine}>
              <Icon name='money' size={30} style={styles.icon}/>
              <Text style={styles.run}>Vani xu</Text>
              
          
            </View>
            <View style={styles.container}>
              <TouchableOpacity onPress={handleIconPress}>
                <View style={styles.box}>
                  <Text style={styles.run}>Ưu đãi</Text>
                  <Icon name='tags' size={30} style={styles.icon}/>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleTV}>
                <View style={styles.box}>
                <Text style={styles.run}>Thẻ thành viên</Text>
                <Icon name='qrcode' size={30} style={styles.icon}/>
                </View>
              </TouchableOpacity>
            </View>
        </View>
        <View>
        <View style={styles.note}>
        <Icon name='money' size={30} style={styles.icon}/>
          <Text style={styles.run}>Mở Vani xu để nhận xu Thử ngay!</Text>
          <TouchableOpacity onPress={handleCoin} style={styles.noteButton}>
            <Text style={styles.buttonText}>GO</Text>
          </TouchableOpacity>
      </View>
        </View>
        <View style={styles.section}>
            <View style={styles.iconRow}>
              <Icon name="mobile" size={40} style={styles.icon1} /> 
              <Icon name="clock-o" size={40} style={styles.icon1} /> 
              <Icon name="gift" size={40} style={styles.icon1} />
              <Icon name="gift" size={40} style={styles.icon1} />
            </View>
        </View>
        <View>
            <ScrollView
            horizontal
            ref={scrollRef}
            onScroll={(event) => {
              setScrollX(event.nativeEvent.contentOffset.x);
            }}>
            {[...img1, ...img1].map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleImagePress(index)}
                style={styles.imageContainer}
              >
                <Image
                  source={image}
                  style={styles.image}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.footer}>
            <Image
            source={require('../img/cream-gif.gif')} 
            style={styles.gifImage}
          />
        </View>
      </View>
      
    )

}

const styles = StyleSheet.create({
  gifImage: {
    width: 358,
    height: 600,
  },
  footer:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'purple',
    height:600,
    marginTop:30
  },
  section:{
    marginBottom:40
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  icon1:{
    color:'black',
  },
  header: {
    backgroundColor: "rgb(159 71 195)",
    height: 160,
    justifyContent: "left",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius:15,
    
    
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  run:{
    color: 'white',
    fontSize: 14,
    marginLeft:4,
    fontWeight: 'bold',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginLeft: 230, 
  },
  icon: {
    color: 'white',
    marginHorizontal: 10,
  },
  horizontalLine: {
    width: '80%',
    height: 35,
    backgroundColor: 'rgb(190 83 234)',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop:10,
    borderRadius:10,
  },
  container: {
    width:'90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20, 
    marginTop: 10, 
    alignSelf: 'center',
  },
  box: {
    width: 130, 
    height: 55, 
    backgroundColor: 'rgb(190 83 234)',
    borderRadius:10,
  },
  note: {
    width: '90%',
    height: 60,
    backgroundColor: 'rgb(190 83 234)',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop:10,
    borderRadius:10,
    
  },
  noteButton: {
    backgroundColor: 'purple', 
    borderRadius: 5,
    marginLeft: 10, 
    width:60,
    height:25,
    marginTop:10,
    marginLeft:50,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10,
  },
  imageContainer: {
    marginHorizontal: 5,
    borderRadius: 8,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 8,
  },
  slider: {
    width: '80%',
    marginTop: 20,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  navigationButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  navigationButtonText: {
    fontSize: 20,
    color: 'white',
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;