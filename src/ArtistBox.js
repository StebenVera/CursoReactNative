/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


export default function ArtistBox(props) {
    
    return (
         <View style={styles.artistBox}>
            <Image
              style={styles.image}
              source={{uri:props.artista.image}}
            />
            <View style={styles.info}>
              <Text style={styles.name}>{props.artista.name}</Text>
              <View style={styles.row}>
                <View style={styles.iconContainer}>
                  <Icon name="ios-add" size={30} color="gray"/>
                  <Text style={styles.count}>{props.artista.likes}</Text>
                </View>
                <View style={styles.iconContainer}>
                <Icon name="ios-power" size={30} color="gray"/>
                <Text  style={styles.count}>{props.artista.comments}</Text>
                </View>
              </View>
            </View>
          </View>
    );
  }


const styles = StyleSheet.create({
  image:{
    width:150,
    height:150
  },
  artistBox:{
    margin:10,
    backgroundColor:'white',
    flexDirection:"row",
    shadowColor:"black",
    shadowOpacity:.9,
    shadowOffset:{
        height:10,
        width:-20
    },
    elevation:10,
    borderColor:"black",
    borderWidth:2
  },
  info:{
    flex:1,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center"
    
  },
  name:{
    fontSize:20,
    marginTop:10,
    color:"#333"
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal: 40,
    marginTop:15
    
  },
  iconContainer:{
    flex:1,
    alignItems:"center"
  },
  count:{
    color:"gray"
  }
 
});
