import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { Link } from 'expo-router';
import { PaperProvider, ProgressBar, IconButton } from 'react-native-paper';
import * as Font from 'expo-font';

const {width, height} = Dimensions.get('window')
export default function Index() {
  return (
    <PaperProvider>
      <View style={styles.container}>

        <Text style={styles.appName}>MUSIC30</Text>

        <Image style={styles.capa} source={require('@/assets/images/1083007-caos_035708.png')} />

        <Text style={styles.cantor}>ALEE</Text>
        <Text style={styles.musica}>PASSADO DE UM VILÃO</Text>


        <View style={styles.controles}>
          <IconButton icon="skip-previous" size={45} iconColor="#FFF" onPress={() => {}} />

          <View style={styles.playButton}>
          <IconButton icon="play-circle-outline" size={70} iconColor="#FFF" onPress={() => {}} />
          </View>

          <IconButton icon="skip-next" size={45} iconColor="#FFF" onPress={() => {}} />
        </View>
        <ProgressBar progress={0.5} color="#D9D9D9" style={styles.progresso} />
        
        <View style={styles.menu}>
          <View style={styles.ButtonControles}>
          <Link href={'/'} asChild>
          <IconButton icon="home" size={30} iconColor="#FFF" onPress={() => {}} />
          </Link>
          </View>
          <View style={styles.ButtonControles}>

          <IconButton icon="magnify" size={30} iconColor="#FFF" onPress={() => {}} />
          </View>
          <View style={styles.ButtonControles}>
          <Link href={'/ListaPlays'} asChild>
          <IconButton icon="menu" size={30} iconColor="#FFF" onPress={() => {}} />
          </Link>
          </View>
        </View>

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5E5A5A",
    alignItems: "center",
    paddingTop: 60,
  },
  appName: {
    fontSize: 22,
    color: "#FFF",
    marginBottom: 20,
    fontFamily: 'Oswald',
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5,
  },
  capa: {
    width: width * 0.65,  
  height: width * 0.65,
    borderRadius: 20,
    marginBottom: 20,
  },
  cantor: {
    fontFamily: '',
    fontSize: 24,
    color: "#FFF",
    marginBottom: 5,
  },
  musica: {
    fontFamily: '',
    fontSize: 18,
    color: "#FFF",
    marginBottom: 20,
  },
  progresso: {
    width: width * 0.75,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#403C3C",
    marginBottom: 30,
    alignSelf: 'center',
    top: -22,
  },
  controles: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.7,
    alignItems: "center",
    marginBottom: 40,
  },
  playButton: {
  width: 60,
  height: 60,
  backgroundColor: "#403C3C",
  borderRadius: 45,
  justifyContent: "center",
  alignItems: "center",
},  
  ButtonControles:{
    width: 45,
    height: 45,
    backgroundColor: "#403C3C",
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    top: 6,
  },
  menu: {
    width: width * 0.90,  
    height: width * 0.15,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 20,
    
  },
});
