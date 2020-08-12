import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements'
import Constants from 'expo-constants';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import MainScreen from './MainScreen'
// You can import from local files
import AssetExample from '../components/AssetExample';


export default class HomeScreen extends React.Component {
  constructor(){
    super()
    this.state={appName:"Morsy Code",color:"maroon",textColor:"white",size:27,}
  }
  render(){
  return (
    <View >
    
     <Header
     backgroundColor={this.state.color}
   
     centerComponent={{text:this.state.appName,style:{color:this.state.textColor,fontWeight:"bold",fontSize:this.state.size}}}

     />  

     <TouchableOpacity onPress={()=>{
       this.setState({appName:"Grammarnary",color:"maroon",textColor:"white",size:27,})
     }} style={{position:"absolute",marginTop:75,borderColor:"red",borderRadius:25,borderWidth:1}}>
     <Text style={{color:"red"}}>
     Restore Defaults
     </Text>
     </TouchableOpacity> 

     <Text style={{position:"absolute",marginTop:125}}>Your app's name:</Text>

     <TextInput
     placeholder="Your app's name"
     style={{borderColor:"grey",borderWidth:1,height:40,marginTop:100}}
     value={this.state.appName}
     onChangeText={(textApp)=>{
       this.setState({appName:textApp})     
     }}
     />

       <Text style={{position:"absolute",marginTop:265}}>Your app's background color (in lowercase):</Text>

     <TextInput
     placeholder="Your color(in small caps)"
     style={{borderColor:"grey",borderWidth:1,height:40,marginTop:100}}
     value={this.state.color}
     onChangeText={(colorApp)=>{
       this.setState({color:colorApp})
     }}
     />

     <Text style={{position:"absolute",marginTop:405}}>Your app's text color (in lowercase) :</Text>

      <TextInput
     placeholder="Your app name color"
     style={{borderColor:"grey",borderWidth:1,height:40,marginTop:100}}
     value={this.state.textColor}
     onChangeText={(colorTextApp)=>{
       this.setState({textColor:colorTextApp})
     }}
     />

     <TouchableOpacity
     style={{
       width:140,
       borderColor:"black",
       borderWidth:1,
       borderRadius:25,
       marginTop:15,
       
     }}
     onLongPress={()=>{
        this.setState({size:this.state.size-25})
      }} 
      onPress={()=>{
       this.setState({size:this.state.size-5})
     }}>
     <Text style={{marginLeft:2}}>Reduce text size by 5</Text>
     </TouchableOpacity>
      <TouchableOpacity 
       style={{
       width:140,
       borderColor:"black",
       borderWidth:1,
       borderRadius:25,
       marginTop:10
     }}
      onLongPress={()=>{
        this.setState({size:this.state.size+25})
      }} 
      onPress={()=>{
       this.setState({size:this.state.size+5})
     }}>
     <Text>Increase text size by 5</Text>
     </TouchableOpacity>

     <TouchableOpacity onPress={()=>{
       this.props.navigation.navigate("MainScreen",{recieveName:this.state.appName,recieveColor:this.state.color,recieveTextColor:this.state.textColor,recieveSize:this.state.size})
     }}>
     <Text>
     Enter
     </Text>
     </TouchableOpacity>
    
      </View>
  );
}}



