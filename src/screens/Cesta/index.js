/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Detalhes from "./components/Detalhes";
import Topo from "./components/Topo";

function Cesta({ topo, detalhes }) {
  return (
    <SafeAreaView>
      <Topo {...topo} />
      <View style={estilos.cesta}>
        <Detalhes {...detalhes} />
      </View>
    </SafeAreaView>
  );
}

export default Cesta;

const estilos = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
