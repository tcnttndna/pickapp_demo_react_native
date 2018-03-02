import React from 'react';
import { Button, View, Text,TextInput,StyleSheet,TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Autocomplete from 'react-native-autocomplete-input';

export class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '',
      password:"",
      data:[],
      changeText: true
    };
  }

  render() {
    let db = this.filterItems(this.state.name)
    return (      
      <View style={styles.viewmain} >
        <View style={styles.viewForm}> 
          <Autocomplete
          placeholder = "Username"
          underlineColorAndroid='transparent'
          hideResults={this.state.changeText}
          data = {db}
          listContainerStyle={styles.autocomplete}
          listStyle={styles.autocompletecontent}
          style={styles.TextInput}
          defaultValue={this.state.name}
          onChangeText={(text)=>{
            this.setState({name:text,
              changeText:false,           
              })
            
          }}
          value={this.state.name}
          renderItem={item => (
            <TouchableOpacity onPress={() => this.setState({ name: item, changeText:true })}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          />
          <TextInput
          placeholder="Password"
          underlineColorAndroid='transparent'
          style={styles.TextInput}
          onChangeText={(password)=>this.setState({password})} 
          value={this.state.password}
          secureTextEntry={true}
          editable={true}
          />          
          <TouchableOpacity 
            onPress={this.login}>
            <View style={styles.button} >
              <Text style={{color:"#fff",fontSize:18,opacity:1}} >Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  componentDidMount =()=>{
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((respose)=>respose.json())
    .then((resposejson)=>{
        this.setState({
          data: resposejson.movies
        })
    })
  }

  filterItems = (query) => {
     let data = []
    for(let i = 0;i<this.state.data.length;i++){
      data.push(this.state.data[i].title)
    }
    return data.filter((el) =>
      el.indexOf(query) > -1
    );
  }

  login = ()=>{   
    this.props.navigation.navigate('Home')   
  }
}

const styles = StyleSheet.create({
  viewmain:{
    backgroundColor: "#29b6f6",
    flex: 1,
    paddingVertical: 205,
    paddingHorizontal: 50,
  },
  viewForm:{
    backgroundColor: "#ffffff",
    opacity: 0.7,
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 5,
  },
  TextInput:{
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#000",
    width: 250,
    backgroundColor: "#ffffff",
    height: 40,
    fontSize: 18,
    fontStyle: 'normal',
    marginTop: 10,
    marginBottom: 5,
    zIndex: 0,
  },
  autocomplete:{
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#000000",
    width: 250,
    backgroundColor: "#ffffff",
    height: 80,
    marginTop: 10,
    marginBottom: 5,
    zIndex: 1000,
    opacity: 1.5,
  },
  autocompletecontent:{
    width: 250,
    backgroundColor: "#ffffff",
    height: 80,
    marginTop: 10,
    marginBottom: 5,
    zIndex: 1000,
    opacity: 1.5,
  },
  button:{
    backgroundColor: "#0086c3",
    borderRadius: 2,
    borderColor: "#000",
    borderWidth:1,
    margin: 5,
    height: 30,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
})


