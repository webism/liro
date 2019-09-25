/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';


const ActionButtons = () => {
  return(
    <View style={styles.profileContainer}>
      <View style={styles.actionPartContainer}>
        <Icon name="suitcase" color="#b8b32d" style={{fontSize: 25, marginRight: 20}} />
        <View style={{flexDirection: 'row-reverse', justifyContent:'space-between', alignItems: 'center', marginLeft:20}}>
          <Text style={{fontSize:17, color: '#FFF', fontWeight: 'bold'}}>2</Text>
          <Icon name="gem" color="#6fddff" style={{fontSize: 25, marginRight: 6}} />
        </View>
        <View style={{flexDirection: 'row-reverse', justifyContent:'space-between', alignItems: 'center', marginLeft:20}}>
          <Text style={{fontSize:17, color: '#2d2f6c', fontWeight: 'bold'}}>2</Text>
          <Icon name="medal" color="#ffdb4a" style={{fontSize: 25, marginRight: 6}} />
        </View>
      </View>
        <View style={styles.avatarContainer}>
          <Image source={require('./static/images/35.jpg')} style={styles.profileImg}/>
          <Text style={{fontSize:17, color: '#FFF', marginLeft: 7, fontWeight: 'bold'}}>Farid</Text>
        </View>
    </View>
  );
};

const BottomActionBar = () => {
  return(
    <View style={{flexDirection: 'row-reverse', justifyContent: 'space-around', alignItems: 'center', marginBottom: 30}}>
      <TouchableOpacity>
        <MaterialIcon name="announcement" color="#FFF" style={{fontSize: 25}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcon name="local-mall" color="#FFF" style={{fontSize: 25}} />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcon name="settings" color="#FFF" style={{fontSize: 25}} />
      </TouchableOpacity>
    </View>
  );
}


const App = () => {
  return (
    <View style={styles.container}>
      <View style={{flexGrow:1, justifyContent: 'space-between'}}>
        <ActionButtons/>
        <TouchableOpacity style={styles.goAheadBtn}>
          <Text style={{fontSize:17, color: '#FFF', fontWeight: '500'}}>Let's Start</Text>
        </TouchableOpacity>
      </View>
      <BottomActionBar/>
    </View>
        
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2f3e96',
    flex: 1,
    justifyContent: 'space-between'
  },
  profileContainer: {
    backgroundColor: '#00884f',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    marginTop: 50,
    marginHorizontal: 30,
    borderRadius: 50,
  },
  actionPartContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImg: {
    height: 60,
    width: 60,
    borderRadius: 35,
    marginLeft: 5
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  goAheadBtn: {
    backgroundColor: '#00884f',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    marginBottom: 50,
    borderRadius: 50,
    marginHorizontal: 30,
  }
});

export default App;
