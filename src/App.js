/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

/*
DATOS DE LA API DE LAST.FM
Application name	PlatziMusic
API key	1d19421c694587148e50a9223ee72e8a
Shared secret	284011f65f3b5a541921ffd343f535bb
Registered to	daragonv
*/

import React, {Component} from 'react';
import { StyleSheet,View,Text} from 'react-native';
import ArtistList from './ArtistList'
import {getArtist} from './ApiClient'


export default class App extends Component {
  state={
    dataArtist:[]
  }
  componentDidMount(){
      getArtist()
      .then(data=> this.setState({dataArtist:data}) )
  }

  render() {
    const artists = this.state.dataArtist
    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
              <Text style={styles.txtTitulo}>Artistas</Text>
            </View>
            <ArtistList artista={artists}/>
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop:20
  },
  containerTitulo:{
    alignItems:"center"
  },
  txtTitulo:{
    color:"white",
    fontSize:30
  }
});
