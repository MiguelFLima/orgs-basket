/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import Texto from "../../components/Text";
import Detalhes from "./components/Detalhes";
import Item from "./components/Item";
import Topo from "./components/Topo";

function Cesta({ topo, detalhes, itens }) {
  return (
    <SafeAreaView>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Topo {...topo} />
              <View style={estilos.cesta}>
                <Detalhes {...detalhes} />
                <Texto style={estilos.titulo}>{itens.titulo}</Texto>
              </View>
            </>
          );
        }}
      />
    </SafeAreaView>
  );
}

export default Cesta;

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
