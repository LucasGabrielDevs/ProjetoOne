import React from "react";
import {Text, View, TextInput, Image} from "react-native"
import { Style } from "./styles";
import logo from '../../assets/logo.jpg'

export default function Entrada () {

 return (
    <View >
       
        <View style={Style.topo}>
                <Text>Seja Bem Vindo</Text>
                <Image source={logo} />
        </View>
        <View style={Style.meio}>
        <Text>eee</Text>
        </View>
        <View style={Style.baixo}>
        <Text>eee</Text>
        </View>
    
    </View>
 )



}