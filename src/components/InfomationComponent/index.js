import React, {useEffect, useState, useCallback} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  CameraRoll,
} from 'react-native';
import {Button, RadioButton, TextInput} from 'react-native-paper';
import ButtonSubmit from '../../feauter/ButtonSubmit';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker, {ImageOrVideo} from 'react-native-image-crop-picker';

const InfomationComponent = props => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isCheckRender, setIsCheckRender] = useState(true);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    setValue('dateofbirth', moment(date).format('DD/MM/YYYY'));
  };

  const {
    control,
    handleSubmit,
    reset,
    formState,
    formState: {errors, isValid, isDirty},
    setValue,
    getValues,
  } = useForm();

  useEffect(() => {
    setValue('gender', 'nam');
    setValue('fullname', 'David');
    setValue('andress', 'US');
    setValue('dateofbirth', '29/01/2000');
    setValue('walletaddress', '– 0xf253fc2ca37c078436d07fb75e');
    setValue('email', 'davidalaba@gmail.com');
    setValue('image', '');
  }, []);

  const checkValidateSubmit = async () => {
    try {
      await AsyncStorage.setItem('Info', getValues());
      set;
    } catch (err) {
      // Alert.alert('Error');
    }
  };

  const getItemLocal = async () => {
    try {
      const value = await AsyncStorage.getItem('Info');
      if (value !== null) {
        // console.log(JSON.parse(value));
        const newData = JSON.parse(value);
        setValue('gender', newData.gender);
        setValue('fullname', newData.fullname);
        setValue('andress', newData.andress);
        setValue('dateofbirth', newData.dateofbirth);
        setValue('walletaddress', newData.walletaddress);
        setValue('email', newData.email);
        setValue('image', newData.image);
      }
    } catch (err) {
      // Alert.alert('Thông báo', 'Đã có lỗi sảy ra vui lòng thử lại');
    }
  };

  useCallback(() => {
    getItemLocal();
  }, [isCheckRender]);

  const pickPicture = onChange => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      onChange();
      setValue('image', image.path);
    });
  };

  const SaveLogin = async () => {};

  return (
    <ImageBackground
      style={{flex: 1, justifyContent: 'center'}}
      source={require('../../../asset/bgrLogin.png')}>
      <View>
        <Controller
          control={control}
          name="fullname"
          render={({field: {onChange, onBlur, value, name, ref}}) => (
            <View>
              <TextInput
                style={styles.textinput}
                label="Full Name"
                value={value}
                onChangeText={text => setValue('hovaten', text)}
                mode="flat"
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="dateofbirth"
          render={({field: {onChange, onBlur, value, name, ref}}) => (
            <>
              <TouchableOpacity onPress={showDatePicker}>
                <TextInput
                  style={styles.textinput}
                  label="Date Of Birth"
                  value={value}
                  editable={false}
                  mode="flat"
                />
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                onChange={onChange}
              />
            </>
          )}
        />
        <Controller
          control={control}
          name="andress"
          render={({field: {onChange, onBlur, value, name, ref}}) => (
            <View>
              <TextInput
                style={styles.textinput}
                label="Andress"
                value={value}
                onChangeText={text => setValue('diachi', text)}
                mode="flat"
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value, name, ref}}) => (
            <View>
              <TextInput
                style={styles.textinput}
                label="Email"
                value={value}
                onChangeText={text => setValue('email', text)}
                mode="flat"
              />
            </View>
          )}
        />

        <Controller
          control={control}
          name="walletaddress"
          render={({field: {onChange, onBlur, value, name, ref}}) => (
            <View>
              <TextInput
                style={styles.textinput}
                label="Wallet Address"
                value={value}
                onChangeText={text => setValue('cmnd', text)}
                mode="flat"
              />
            </View>
          )}
        />
        <Controller
          control={control}
          name="gender"
          render={({field: {onChange, onBlur, value, name, ref}}) => (
            <View style={styles.viewinput}>
              <Text style={styles.textgioitinh}>Gender: </Text>
              <View style={styles.labelgioitinhnam}>
                <RadioButton
                  value={value}
                  status={value === 'nam' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setValue('gioitinh', 'nam');
                    onChange;
                  }}
                />
                <Text style={styles.gioitinh}>Male</Text>
              </View>
              <View style={styles.labelgioitinhnu}>
                <RadioButton
                  value={value}
                  status={value === 'nu' ? 'checked' : 'unchecked'}
                  onPress={() => {
                    setValue('gioitinh', 'nu');
                    onChange;
                  }}
                />
                <Text style={styles.gioitinh}>Famale</Text>
              </View>
            </View>
          )}
        />
        <Controller
          control={control}
          name="image"
          render={({field: {onChange, onBlur, value, name, ref}}) => {
            return (
              <View style={styles.viewinput}>
                <Text style={styles.textcreatimage}>Image: </Text>
                <Image
                  source={require('../../../asset/image.png')}
                  style={[
                    styles.labelimage,
                    {
                      paddingTop: 20,
                      height: 100,
                      width: 100,
                      borderRadius: 100,
                      padding: 20,
                    },
                  ]}
                />
                <View style={styles.labelimage}>
                  <Button
                    //   icon="camera"
                    mode="contained"
                    onPress={() => pickPicture(onChange)}>
                    Create Market Place
                  </Button>
                </View>
              </View>
            );
          }}
        />
      </View>
      <TouchableOpacity
        onPress={handleSubmit(checkValidateSubmit)}
        style={styles.buttonTieptuc}>
        <Text style={[styles.lable]}>Saved</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  viewinput: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  textgioitinh: {
    flex: 0.5,
    alignSelf: 'center',
  },
  labelgioitinhnam: {
    flex: 0.5,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  labelgioitinhnu: {
    flex: 0.5,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  gioitinh: {
    alignSelf: 'center',
  },
  textcreatimage: {
    flex: 1,
    alignSelf: 'center',
  },
  labelimage: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textinput: {backgroundColor: '#fff'},
  lable: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  buttonTieptuc: {
    justifyContent: 'flex-end',
    marginBottom: 0,
    bottom: 0,
    backgroundColor: '#EB1B99',
    paddingVertical: 15,
    borderRadius: 15,
    marginBottom: 30,
  },
});

export default InfomationComponent;
