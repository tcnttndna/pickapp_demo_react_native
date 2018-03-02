import React, { Component } from 'react';
import { View,Text,Picker,StyleSheet,TextInput, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class AddPark extends Component{
    constructor(props){
        super(props)
        this.state = {
            idwarehouse: "",
            Reason:"",
            Qty:"",
            Location:"",
            qrscan:""
        }
    }

    render(){
        return(
            <View style={styles.viewmain} >
                <View style={styles.viewrow} >
                    <View style={styles.viewframeleft} >
                        <Text style={styles.text} >Warehouse</Text>
                    </View>
                    <View style={styles.viewframeright} >
                        <Picker
                        selectedValue={this.state.idwarehouse}
                        onValueChange={(itemValue, itemIndex) => this.setState({idwarehouse: itemValue})}>
                            <Picker.Item label="London" value="1" />
                            <Picker.Item label="Newyork" value="2" />
                            <Picker.Item label="Hanoi" value="3" />
                            <Picker.Item label="Backinh" value="4" />
                        </Picker>
                    </View>               
                </View>

                <View style={styles.viewrow} >
                    <View style={styles.viewframeleft} >
                        <Text style={styles.text} >Reason</Text>
                    </View>
                    <View style={styles.viewframeright} >
                        <TextInput
                        style={{marginLeft:5}}
                        value={this.state.Reason}
                        onChangeText={(text)=>this.setState({Reason:text})}
                        underlineColorAndroid='transparent'
                        
                        />
                    </View>               
                </View>

                <View style={styles.viewrow} >
                    <View style={styles.viewframeleft} >
                        <Text style={styles.text} >Qty</Text>
                    </View>
                    <View style={styles.viewframeright} >
                        <TextInput
                        style={{marginLeft:5}}
                        value={this.state.Qty}
                        onChangeText={(text)=>this.setState({Qty:text})}
                        underlineColorAndroid='transparent'
                        />
                    </View>               
                </View>

                <View style={styles.viewrow} >
                    <View style={styles.viewframeleft} >
                        <Text style={styles.text} >Location</Text>
                    </View>
                    <View style={styles.viewframeright} >
                        <Picker
                        selectedValue={this.state.Location}
                        onValueChange={(itemValue, itemIndex) => this.setState({Location: itemValue})}>
                            <Picker.Item label="987512" value="1" />
                            <Picker.Item label="653489" value="2" />
                            <Picker.Item label="893762" value="3" />
                            <Picker.Item label="253417" value="4" />
                        </Picker>
                    </View>               
                </View>

                <View style={{width: "95%", marginTop: 10,height: 48}}>
                    <TextInput
                        style={styles.textinput}
                        value={this.state.qrscan}
                        onChangeText={(text)=>this.setState({qrscan:text})}
                        underlineColorAndroid='transparent'
                        placeholder="Tap to scan"
                        />
                </View>

                <View style={styles.viewrow} >
                    <TouchableHighlight style={styles.button} 
                    onPress={()=>this.props.navigation.navigate("StockControl")}
                    >
                        <View>
                            <Text style={styles.textbutton}>Scan</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button}>
                        <View>
                            <Text style={{fontSize:25,color:"#fff"}}>+</Text>
                        </View>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.button}>
                        <View>
                            <Text style={styles.textbutton}>Add Part</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewmain:{
        alignItems: 'center',
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
       
    },
    viewrow:{
        width: "95%",
        marginTop: 10,
        flexDirection: 'row',
        height: 48,
        
    },
    viewframeleft:{
        borderColor: "#0086c3",
        borderWidth: 1,
        height: 48,
        alignItems: 'center',
        width: "30%",
        justifyContent: 'center',
    },
    viewframeright:{
        borderColor: "#0086c3",
        borderWidth: 1,
        height: 48,
        width: "70%",
    },
    text:{
        fontSize: 14,
        color:"#000",
        
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: 112,
        backgroundColor: "#0086c3",
        margin: 4,
        borderRadius: 5,
    },
    textbutton:{
        fontSize:18,
        color:"#fff"
    },
    textinput:{
        borderColor: "#0086c3",
        borderWidth: 1,
        borderRadius:5,
        height: 48,
        alignItems: 'center',
        width: "100%",
        justifyContent: 'center',
        textAlign: 'center',
    }
    
})