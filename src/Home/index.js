import React, {useState} from 'react';
import {
  ImageBackground,
  FlatList,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import {useNavigation} from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;

function Home() {
  const navigation = useNavigation();
  function ListItem() {
    return (
      <View>
        <Text style={styles.titleStyle}>New</Text>
        <ScrollView horizontal={true}>
          <FlatList
            scrollEnabled={false}
            numColumns={5}
            data={Data}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailProduct')}
                style={styles.styleItem}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                    marginBottom: 10,
                  }}
                  source={item.image}
                />
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity style={styles.buttonBuy}>
                  <Text style={styles.textBuy}>Buy</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    );
  }
  function ListItem1() {
    return (
      <View>
        <Text style={styles.titleStyle}>New</Text>
        <ScrollView horizontal={true}>
          <FlatList
            scrollEnabled={false}
            numColumns={5}
            data={Data1}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailProduct')}
                style={styles.styleItem}>
                <Image
                  style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                    marginBottom: 10,
                  }}
                  source={item.image}
                />
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity style={styles.buttonBuy}>
                  <Text style={styles.textBuy}>Buy</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    );
  }
  const [valueSlide, setValueSlide] = useState(0);
  const [show, setShow] = useState(false);
  return (
    <ImageBackground
      style={{flex: 1, alignItems: 'center'}}
      source={require('../../asset/bgrLogin.png')}>
      <SafeAreaView>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity style={styles.filter}>
            <Image source={require('../../asset/infinity.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <Image source={require('../../asset/edit.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <Image source={require('../../asset/hidden.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <Image source={require('../../asset/gim.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filter}>
            <Image source={require('../../asset/magic.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setShow(!show)}
            style={styles.filter}>
            <Image source={require('../../asset/giamgia.png')} />
          </TouchableOpacity>
        </View>
        {show === false ? null : (
          <View style={styles.styleSlide}>
            <Text style={styles.textBuy}>Price: {valueSlide}$</Text>
            <Slider
              maximumTrackTintColor="#FFFFFF"
              trackClickable={true}
              thumbStyle={{
                backgroundColor: '#FF39E0',
                borderWidth: 1,
                borderColor: 'white',
              }}
              minimumValue={0}
              maximumValue={100}
              step={5}
              value={valueSlide}
              onSlidingComplete={values => setValueSlide(values)}
              thumbTouchSize={{width: 40, height: 40}}
            />
          </View>
        )}
        <ScrollView>
          <ListItem />
          <View style={styles.imageStyle}>
            <Image
              style={{
                width: windowWidth - 10,
                marginLeft: 5,
                height: 150,
                borderRadius: 10,
                resizeMode: 'cover',
              }}
              source={require('../../asset/logo.png')}
            />
          </View>
          <ListItem1 />
          <ListItem />
          <ListItem1 />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
export default Home;
const styles = StyleSheet.create({
  contentView: {
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  styleItem: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderColor: 'white',
    borderRadius: 5,
  },
  titleStyle: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 5,
    color: 'white',
  },
  imageStyle: {
    width: windowWidth,
    paddingVertical: 15,
  },
  filter: {
    backgroundColor: '#2D3152',
    marginVertical: 10,
    padding: 10,
  },
  textFilter: {
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  price: {
    color: 'white',
  },
  buttonBuy: {
    backgroundColor: '#FF39E0',
    borderRadius: 5,
    marginTop: 5,
  },
  textBuy: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  styleSlide: {
    width: windowWidth - 20,
    marginLeft: 10,
  },
});
const Data = [
  {
    image: require('../../asset/balo2.png'),
    price: 'price 20$',
  },
  {
    image: require('../../asset/balo3.png'),
    price: 'price 15$',
  },
  {
    image: require('../../asset/balo4.png'),
    price: 'price 15$',
  },
  {
    image: require('../../asset/balo5.png'),
    price: 'price 20$',
  },
];
const Data1 = [
  {
    image: require('../../asset/balo4.png'),
    price: 'price 10$',
  },
  {
    image: require('../../asset/balo5.png'),
    price: 'price 20$',
  },
  {
    image: require('../../asset/balo2.png'),
    price: 'price 10$',
  },
  {
    image: require('../../asset/balo3.png'),
    price: 'price 20$',
  },
];
