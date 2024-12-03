import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Vibration } from "react-native";
import { Color } from './Color';


export const GlobalStyles = StyleSheet.create({
    pantallaPrincipal: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
    },
    pantallaSecundaria: {
        fontSize: 40,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
    },
    botonOperador: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: Color.green,
        borderWidth: 2,
        borderRadius:20,
        backgroundColor: Color.green,
        color: Color.black,
        margin:1,
    },
    botonNumeros: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: Color.pink,
        borderWidth: 2,
        borderRadius:20,
        color:Color.white,
        backgroundColor: Color.pink,
        margin:1,
    },
    botonDemas: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: Color.violet,
        borderWidth: 2,
        borderRadius:20,
        backgroundColor: Color.violet,
        color: Color.white,
        margin:1,
    },
    
    container: {
        flex: 1,
        backgroundColor: Color.pardillo,
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:20,
      },
      fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:16,
        paddingHorizontal:10,
        width: '100%',
      }
});