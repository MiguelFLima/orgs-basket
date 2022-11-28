import React from "react";
import {
  Image,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView,
  View,
} from "react-native";
import topo from "../../assets/topo.png";
import logo from "../../assets/logo.png";

const width = Dimensions.get("screen").width;

function Cesta() {
  return (
    <SafeAreaView>
      <Image source={topo} style={estilos.topo} />
      <Text style={estilos.titulo}>Detalhes da cesta</Text>

      <View style={estilos.cesta}>
        <Text style={estilos.nome}>Cesta de verduras</Text>
        <View style={estilos.fazenda}>
          <Image style={estilos.imagemFazenda} source={logo} />
          <Text style={estilos.nomeFazenda}>Jenny Jack Farm</Text>
        </View>
        <Text style={estilos.descricao}>
          Uma cesta com produtos selecionados cuidadosamente da fazenda direto
          para sua cozinha
        </Text>
        <Text style={estilos.preco}>R$ 40,00</Text>
      </View>
    </SafeAreaView>
  );
}

export default Cesta;

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: (578 / 768) * width,
  },
  titulo: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 26,
    color: "white",
    padding: 16,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: "MontserratRegular",
  },
  descricao: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
  },
  preco: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});
