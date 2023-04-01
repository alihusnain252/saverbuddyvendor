import {View, Text, TextInput, Pressable, Image, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {TopHeader, BottomBar} from '@components';
import {globalInputsStyles} from '@utils';

export const ValidateCustomer = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [noDisplay, setNoDisplay] = useState(false);

  const searchHandler = () => {
    // phoneNumber === '0123456789' ? setNoDisplay(false) : setNoDisplay(true);
    if (phoneNumber === '') {
        Alert.alert("please add Phone Number")
    }
    if (phoneNumber === '0123456789') {
        setNoDisplay(false)
        navigation.navigate("UserFound")
    } else{
        setNoDisplay(true)
    }
  };

  return (
    <View style={styles.validateContainer}>
      <TopHeader />
      <View style={styles.body}>
        <Text style={styles.validateText}>Validate Customer</Text>
        <Text style={styles.phoneText}>Customer Phone #</Text>
        <TextInput
          style={noDisplay === false ? globalInputsStyles.input : styles.input}
          placeholder="0212345678"
          value={phoneNumber}
          onChangeText={(e)=>setPhoneNumber(e)}
          keyboardType="numeric"
        />
        <View style={noDisplay === false ? styles.noDisplay : styles.notFound}>
          <Image
            source={require('../../assets/icons/notFound.png')}
            style={styles.notFoundImage}
          />
          <Text style={styles.notFoundText}>User not found</Text>
        </View>
        <Pressable style={styles.search} onPress={() => searchHandler()}>
          <Text style={styles.searchText}>Search</Text>
        </Pressable>
      </View>

      <BottomBar />
    </View>
  );
};