/* eslint-disable react/prop-types */
import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Texto from "../../../components/Text";
import topo from "../../../../assets/topo.png";

const width = Dimensions.get("screen").width;

function Topo({ titulo }) {
  return (
    <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>{titulo}</Texto>
    </>
  );
}

export default Topo;

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
});
