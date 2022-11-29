/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Texto from "../../../components/Text";

function Item({ item: { nome, imagem } }) {
  return (
    <View key={nome} style={estilos.item}>
      <Image source={imagem} style={estilos.imagem} />
      <Texto style={estilos.nome}>{nome}</Texto>
    </View>
  );
}

export default Item;

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    padding: 16,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
