import React from 'react';
import { Link } from 'expo-router';
import { Text, View, StyleSheet, Image, Dimensions, FlatList } from "react-native";
import { PaperProvider, IconButton, ProgressBar, Button} from 'react-native-paper';
import * as Font from 'expo-font';
const { width, height } = Dimensions.get('window');

export default function PlaylistPage() {
  type Musica = {
    id: string;
    cantor: string;
    musica: string;
    imagem: any;
  };

  const musicas: Musica[] = [
    { id: '1', cantor: 'ALEE', musica: 'PASSADO DE UM VILÃO', imagem: require('@/assets/images/1083007-caos_035708.png') },
    { id: '2', cantor: 'FRANCO,THE SIR', musica: 'INTERFERE', imagem: require('@/assets/images/1179656-e-assim-que-funciona_142703.png') },
    { id: '3', cantor: 'BRANDAO', musica: 'DE VOLTA', imagem: require('@/assets/images/CEO-COVER-1.png') },
  ];

 const renderItem = ({ item }: { item: Musica }) => (
  <Button
    mode="contained"
    onPress={() => console.log(`Tocando ${item.musica}`)}
    contentStyle={styles.item}
    style={{ marginBottom: 20, padding: 0 }}
    labelStyle={{ textAlign: 'left' }}
  >
    <View style={styles.itemContent}>
      <Image source={item.imagem} style={styles.capa} />
      <View style={styles.infoMusica}>
        <Text style={styles.cantor}>{item.cantor}</Text>
        <Text style={styles.musica}>{item.musica}</Text>
      </View>
    </View>
  </Button>
);


  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.appName}>MUSIC30</Text>
        
        <View style={styles.listaMusica}>
        <FlatList
          data={musicas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.lista}
          />
          </View>



        <View style={styles.controles}>
                  <IconButton icon="skip-previous" size={45} iconColor="#FFF" onPress={() => {}} />
        
                  <View style={styles.playButton}>
                  <IconButton icon="play-circle-outline" size={70} iconColor="#FFF" onPress={() => {}} />
                  </View>
        
                  <IconButton icon="skip-next" size={45} iconColor="#FFF" onPress={() => {}} />
                </View>
        <ProgressBar progress={0.3} color="#D9D9D9" style={styles.progresso} />
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
            <IconButton icon="menu" size={30} iconColor="#FFF" onPress={() => {}} />
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
    fontFamily: 'Koulen',
    textShadowColor: 'rgba(0, 0, 0, 0.90)',
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 5,
  },
  lista: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    padding: 10,
  },
  listaMusica:{
    width: width * 0.90,  
    height: width * 0.89,
  },
  capa: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 15,
  },
  cantor: {
    fontSize: 18,
    color: "#403C3C",
    fontWeight: 'bold',
  },
  musica: {
    fontSize: 14,
    color: "#403C3C",
  },
  progresso: {
    width: width * 0.75,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#403C3C",
    marginBottom: 30,
    alignSelf: 'center',
  },
  controles: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width * 0.7,
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  playButton: {
    width: 60,
    height: 60,
    backgroundColor: "#403C3C",
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonControles: {
    width: 45,
    height: 45,
    backgroundColor: "#403C3C",
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    top: 1,
  },
  infoMusica: {
    justifyContent: 'center',
    height: 60,
    flex: 1,
  },
  menu: {
    width: width * 0.90,
    height: width * 0.17,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 20,
    alignItems: 'center',
  },
  itemContent: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: 'D9D9D9'
},

});
