import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { Vibration } from "react-native";
import { GlobalStyles } from './src/themes/GlobalStyles';
import * as Haptics from 'expo-haptics';

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         operacionRealizar, Operadores, resultado  } = useCalculadora();
   
         
      

  return (
  
    <View style={GlobalStyles.container}>    
      <Pantalla tamanyo='p1' numberOfLines={1} adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla tamanyo='p2' numberOfLines={1} adjustsFontSizeToFit> </Pantalla>
      ) : (
        <Pantalla tamanyo='p2' numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</Pantalla>
      )}
      
     
      
      
      <StatusBar style="auto" />

    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo='botonDemas' label='C' width={80} onPress={clean}></BotonOperacion>
      <BotonOperacion tipo='botonDemas' label='+/-' width={80} onPress={cambiarSigno}></BotonOperacion>
      <BotonOperacion tipo='botonDemas' label='del' width={80} onPress={borrarDigito}></BotonOperacion>
      <BotonOperacion tipo='botonOperador' label='/' width={80} onPress={() => operacionRealizar(Operadores.dividir)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo='botonNumeros' label='7' width={80} onPress={() =>construirNumero('7')}></BotonOperacion>
      <BotonOperacion tipo='botonNumeros' label='8' width={80} onPress={() =>construirNumero('8')}></BotonOperacion>
      <BotonOperacion tipo='botonNumeros' label='9' width={80} onPress={() =>construirNumero('9')}></BotonOperacion>
      <BotonOperacion tipo='botonOperador' label='x' width={80} onPress={() => operacionRealizar(Operadores.multiplicar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo='botonNumeros' label='4' width={80} onPress={() =>construirNumero('4')}></BotonOperacion>
      <BotonOperacion tipo='botonNumeros' label='5' width={80} onPress={() =>construirNumero('5')}></BotonOperacion>
      <BotonOperacion tipo='botonNumeros' label='6' width={80} onPress={() =>construirNumero('6')}></BotonOperacion>
      <BotonOperacion tipo='botonOperador' label='-' width={80} onPress={() =>operacionRealizar(Operadores.restar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo='botonNumeros' label='1' width={80} onPress={() =>construirNumero('1')}></BotonOperacion>
      <BotonOperacion tipo='botonNumeros' label='2' width={80} onPress={() =>construirNumero('2')}></BotonOperacion>
      <BotonOperacion tipo='botonNumeros' label='3' width={80} onPress={() =>construirNumero('3')}></BotonOperacion>
      <BotonOperacion tipo='botonOperador' label='+' width={80} onPress={() => operacionRealizar(Operadores.sumar)}></BotonOperacion>
    </View>
    <View style={GlobalStyles.fila}>
      <BotonOperacion tipo='botonNumeros' label='0' width={80} onPress={() =>construirNumero('0')}></BotonOperacion>
      <BotonOperacion tipo='botonDemas' label='.' width={80} onPress={() =>construirNumero('.')}></BotonOperacion>
      <BotonOperacion tipo='botonOperador' label='=' width={180} onPress={resultado}></BotonOperacion>
    </View>
    </View>


  );
}

