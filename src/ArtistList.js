/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {ListView} from 'react-native';
import ArtistBox from './ArtistBox'




export default class ArtistList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
        dataSource:ds
    }
    
  }
  componentDidMount(){
    this.updateDateSource(this.props.artista)
  }
  componentWillReceiveProps(newProps){
    if(newProps.artista !== this.props.artista){
       this.updateDateSource(newProps.artista)
    }
  }

  updateDateSource=(data)=>{
    this.setState({dataSource:this.state.dataSource.cloneWithRows(data)})
  }
  render() {
    return (
        <ListView
            enableEmptySections
            dataSource={this.state.dataSource}
            renderRow={(artist) => <ArtistBox artista={artist}/>}
            />
    );
  }
}

