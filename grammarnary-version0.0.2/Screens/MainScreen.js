import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native';
import {Header} from 'react-native-elements'
import Constants from 'expo-constants';
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import HomeScreen from './HomeScreen.js'
import local from '../local.js'

export default class MainScreen extends React.Component{
 constructor(){
   super()
   this.state={userInput:"Your Input",answer:[],}
   this.array=null
   this.array2=null
   this.array3=null
  this.array4=null
  this.array5=null
   this.array6=null
    this.array7=null
     this.array8=null
      this.array9=null
        this.array10=null
         this.array11=null
          this.array12=null
           this.array13==null
            this.array14=null
             this.array15=null
              this.array16=null
               this.array17=null
                this.array18=null
                 this.array19=null
              this.array20=null
                 this.array21=null
                  this.array22=null
                   this.array23=null
                    this.array24=null
                     this.array25=null 
                      this.array26=null
                       this.array27=null
                        this.array28=null
                         this.array29=null
                          this.array30=null
 }
  
  render(){

    
    return(
      <View>
       <Header
     backgroundColor={this.props.navigation.getParam('recieveColor')}
    
     centerComponent={{text:this.props.navigation.getParam('recieveName'),style:{color:this.props.navigation.getParam('recieveTextColor'),fontWeight:"bold",fontSize:this.props.navigation.getParam('recieveSize')}}}

     />  
     <TouchableOpacity style={{borderWidth:1,borderRadius:25,borderColor:"black",width:150,marginTop:10}} onPress={()=>{
       this.props.navigation.navigate('HomeScreen')
     }}>
    <Text style={{marginLeft:5}}>
    Back To Home Page->
    </Text>
     </TouchableOpacity>

     <Text style={{position:"absolute",marginTop:150}}>Your word (in Titlecase):</Text>

     <TextInput
     placeholder="Your word(in Titlecase)"
     style={{borderColor:"grey",borderWidth:1,height:40,marginTop:100,}}
     value={this.state.userInput}
     onChangeText={(data)=>{
       this.setState({userInput:data,})
     }}
     />
     
     
     <TouchableOpacity style={{borderWidth:3,borderRadius:50,marginTop:20}} onPress={()=>{
       
      
    this.setState({answer:local[this.state.userInput].meaning})
    
    this.array=this.state.answer
    
    
  
    
     }}>
     <Text style={{fontSize:20,marginLeft:100}}>
     
       Search Word
       </Text>
     </TouchableOpacity>
     <View>
     {this.state.answer.map((process)=>{
       return(
         <View>
       <Text style={{fontSize:50,alignSelf:"center"}}>{process}</Text>
      
       </View>
       )
     })}
     </View>
     <Text style={{fontSize:25}}> Previous Answer|{this.array}</Text>
        
     
      </View>
    )
  }
}