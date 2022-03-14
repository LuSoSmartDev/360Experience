import React, {useState, useEffect} from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import {Radio} from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;

export default function ImagePickerExample() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);
  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);
  const PickImage = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage(image.sourceURL);
    });
  };
  const PickImage1 = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage1(image.sourceURL);
    });
  };
  const PickImage2 = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage2(image.sourceURL);
    });
  };
  const PickImage3 = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage3(image.sourceURL);
    });
  };
  const PickImage4 = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage4(image.sourceURL);
    });
  };
  const PickImage5 = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage5(image.sourceURL);
    });
  };
  const PickImage6 = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage6(image.sourceURL);
    });
  };
  const PickImage7 = async () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setImage7(image.sourceURL);
    });
  };
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [collector, setCollector] = useState();
  const [contact, setContact] = useState();
  const [token, setToken] = useState();
  const [meta, setMeta] = useState();
  const [blchan, setBlchan] = useState();
  const [tkStan, setTkStan] = useState();
  const [rarity, setRarity] = useState();
  const [type, setType] = useState();
  const [liscen, setLiscen] = useState();
  const [number, setNumber] = useState();
  const [decription, setDecription] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Create Listing</Text>
        <Text style={styles.textChoseImage}>
          Photos · 1 / 10 - You can add up to 8 photos.
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={PickImage} style={styles.ViewImage}>
            {image === null ? (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../asset/image.png')}
              />
            ) : (
              <Image source={{uri: image}} style={styles.ViewImage} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={PickImage1} style={styles.ViewImage}>
            {image1 === null ? (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../asset/image.png')}
              />
            ) : (
              <Image source={{uri: image1}} style={styles.ViewImage} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={PickImage2} style={styles.ViewImage}>
            {image2 === null ? (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../asset/image.png')}
              />
            ) : (
              <Image source={{uri: image2}} style={styles.ViewImage} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={PickImage3} style={styles.ViewImage}>
            {image3 === null ? (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../asset/image.png')}
              />
            ) : (
              <Image source={{uri: image3}} style={styles.ViewImage} />
            )}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 10,
          }}>
          <TouchableOpacity onPress={PickImage4} style={styles.ViewImage}>
            {image4 === null ? (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../asset/image.png')}
              />
            ) : (
              <Image source={{uri: image4}} style={styles.ViewImage} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={PickImage5} style={styles.ViewImage}>
            {image5 === null ? (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../asset/image.png')}
              />
            ) : (
              <Image source={{uri: image5}} style={styles.ViewImage} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={PickImage6} style={styles.ViewImage}>
            {image6 === null ? (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../asset/image.png')}
              />
            ) : (
              <Image source={{uri: image6}} style={styles.ViewImage} />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={PickImage7} style={styles.ViewImage}>
            {image7 === null ? (
              <Image
                style={{width: 30, height: 30}}
                source={require('../../asset/image.png')}
              />
            ) : (
              <Image source={{uri: image7}} style={styles.ViewImage} />
            )}
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={[styles.textChoseImage, {marginLeft: 0, marginTop: 20}]}>
            NAME
          </Text>
          <TextInput
            onChangeText={value => setName(value)}
            style={styles.inputName}>
            <Text style={styles.textChoseImage}>{name}</Text>
          </TextInput>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, marginRight: 10}}>
              <Text style={[styles.textChoseImage, {marginLeft: 0}]}>
                COLLECTION
              </Text>
              <TextInput
                onChangeText={value => setCollector(value)}
                style={styles.inputName}>
                <Text style={styles.textChoseImage}>{collector}</Text>
              </TextInput>
            </View>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={[styles.textChoseImage, {marginLeft: 0}]}>
                CATEGORY
              </Text>
              <TextInput
                onChangeText={value => setCategory(value)}
                style={styles.inputName}>
                <Text style={styles.textChoseImage}>{category}</Text>
              </TextInput>
            </View>
          </View>
          <Text style={[styles.textChoseImage, {marginLeft: 0}]}>
            PROPERTIES
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{flex: 3}}>
              <Text
                style={[
                  styles.textChoseImage,
                  {marginLeft: 0, color: 'gray', textAlign: 'center'},
                ]}>
                CONTACT ADDRESS:
              </Text>
            </View>
            <View style={{flex: 7}}>
              <TextInput
                onChangeText={value => setContact(value)}
                style={styles.inputName}>
                <Text style={styles.textChoseImage}>{contact}</Text>
              </TextInput>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 5,
            }}>
            <View style={{flex: 3}}>
              <Text
                style={[
                  styles.textChoseImage,
                  {marginLeft: 0, color: 'gray', textAlign: 'center'},
                ]}>
                TOKEN ID:
              </Text>
            </View>
            <View style={{flex: 7}}>
              <TextInput
                onChangeText={value => setToken(value)}
                style={styles.inputName}>
                <Text style={styles.textChoseImage}>{token}</Text>
              </TextInput>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 5,
            }}>
            <View style={{flex: 3}}>
              <Text
                style={[
                  styles.textChoseImage,
                  {marginLeft: 0, color: 'gray', textAlign: 'center'},
                ]}>
                METADATA:
              </Text>
            </View>
            <View style={{flex: 7}}>
              <TextInput
                onChangeText={value => setMeta(value)}
                style={styles.inputName}>
                <Text style={styles.textChoseImage}>{meta}</Text>
              </TextInput>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{flex: 3}}>
              <Text
                style={[
                  styles.textChoseImage,
                  {marginLeft: 0, color: 'gray', textAlign: 'center'},
                ]}>
                BLOCKCHAIN:
              </Text>
            </View>
            <View style={{flex: 7}}>
              <TextInput
                onChangeText={value => setBlchan(value)}
                style={styles.inputName}>
                <Text style={styles.textChoseImage}>{blchan}</Text>
              </TextInput>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{flex: 3}}>
              <Text
                style={[
                  styles.textChoseImage,
                  {marginLeft: 0, color: 'gray', textAlign: 'center'},
                ]}>
                TOKEN STANDARD:
              </Text>
            </View>
            <View style={{flex: 7}}>
              <TextInput
                onChangeText={value => setTkStan(value)}
                style={styles.inputName}>
                <Text style={styles.textChoseImage}>{tkStan}</Text>
              </TextInput>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, marginRight: 10}}>
              <Text style={[styles.textChoseImage, {marginLeft: 0}]}>
                RARITY
              </Text>
              <TextInput
                onChangeText={value => setRarity(value)}
                style={styles.inputName}>
                <Text style={styles.textChoseImage}>{rarity}</Text>
              </TextInput>
            </View>
            <View style={{flex: 1, marginLeft: 10}}>
              <Text style={[styles.textChoseImage, {marginLeft: 0}]}>TYPE</Text>
              <TextInput
                onChangeText={value => setType(value)}
                style={styles.inputName}>
                <Text style={styles.textChoseImage}>{type}</Text>
              </TextInput>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, marginRight: 10}}>
              <Text style={[styles.textChoseImage, {marginLeft: 0}]}>
                LISCENCE
              </Text>
              <TextInput
                onChangeText={value => setLiscen(value)}
                style={styles.inputName}>
                <Text style={styles.textChoseImage}>{liscen}</Text>
              </TextInput>
            </View>
            <View style={{flex: 1, marginLeft: 10}}></View>
          </View>
          <Text style={[styles.textChoseImage, {marginLeft: 0}]}>
            NAME OF ITEMS AVALIABLE
          </Text>
          <TextInput
            onChangeText={value => setName(value)}
            style={styles.inputName}>
            <Text style={styles.textChoseImage}>{name}</Text>
          </TextInput>
          <Text style={[styles.textChoseImage, {marginLeft: 0}]}>
            DECRIPTION
          </Text>
          <TextInput
            onChangeText={value => setDecription(value)}
            style={styles.inputName}>
            <Text style={styles.textChoseImage}>{decription}</Text>
          </TextInput>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', {
                image,
                image1,
                image2,
                image3,
                image4,
                image5,
                image6,
                image7,
                name,
                category,
              })
            }
            style={styles.Push}>
            <Text style={styles.textPush}>PUBLISH</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191834',
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 60,
  },
  ViewImage: {
    borderRadius: 10,
    width: 95,
    height: 95,
    backgroundColor: '#9386A3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textChoseImage: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    paddingVertical: 5,
    fontSize: 15,
  },
  Push: {
    width: windowWidth - 100,
    backgroundColor: '#EB1B99',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  textPush: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 10,
  },
  inputName: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
});
