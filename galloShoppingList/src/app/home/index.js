import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { StatusBar  } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import ItemList from '../../components/ItemList';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
  const [textInput, setTextInput] = useState('');
  const [items, setItems] = useState([]);

  const saveItemToDevice = async () => {

  }

  const getItemsFromDevice = async() => {

  }

  const addItem = () => {

  }

  const markItemBought = itemId => {

  }

  const unmarkItemBought = itemId => {

  }

  const removeItem = itemId => {

  }

  const removeAll = () => {
    Alert.alert('Limpar lista?', 'Confirme a exclusão de todos os produtos de sua lista?', 
    [{
      text: 'sim', onPress: () => {setItems([])}
    },{
      text: 'cancelar', style: 'cancel', 
    }]);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require('../../assets/background.png')} resizeMode='repeat' style={{flex: 1, justifyContent: 'flex-start'}}>
        
        <View style={styles.header}>
          <Text style={styles.title}>Lista de produtos</Text>
          <Ionicons name="trash" size={32} color='#fff' onPress={removeAll} />
        </View>

        {/* Lista de produtos */}
        <FlatList
          contentContainerStyle={{ padding: 20, paddingBottom:100, color:"#fff" }}
          data={items}
          renderItem={({item}) => <ListItem item={item} markItem={markItemBought} unmarkItem={unmarkItemBought} removeItem={removeItem}/>}
        />

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput 
              color = '#fff'
              fontSize={18}
              placeholderTextColor="#fff"
              placeholder='Digite o Nome do produto...'
              value={textInput}
              onChangeText={(text) => setTextInput(text)}
            />
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={addItem}>
            <Ionicons name='add' size={36} color='#fff'/>
          </TouchableOpacity>
        </View>

      </ImageBackground>
      <StatusBar style="light" backgroundColor='#000' />
    </SafeAreaView>
  )
}