import React from "react";
import {Text, View, TextInput, Image} from "react-native" 
import { Style } from "./styles";
// esse codigo exporta o css dessa pagina para a pagina q eu criar EX: styles.ts
import logo from '../../assets/logo.jpg' 

// exportamos essa funcao para dentro de App.tsx, essa funcao tem os compomentes h
export default function Entrada () {

 return (
    <View >
       
        <View style={Style.topo}>
                <Text>Seja Bem Vindo</Text>
                <Image source={logo} />
        </View>
        <View style={Style.meio}>
        <Text>teste</Text>
        </View>
        <View style={Style.baixo}>
        <Text>teste</Text>
        </View>
    
    </View>
 )



}