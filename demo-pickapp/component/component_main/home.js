import React from 'react';
import { Button, View, Text,TouchableHighlight,StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.27

export class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.viewMain}>
        <TouchableHighlight style={styles.viewButton}
        onPress={()=>this.props.navigation.navigate("StockControl")}
        underlayColor="#73e8ff"
        >
            <View >
                <Text style={styles.text} >Stock Control</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.viewButton}
        onPress={()=>this.props.navigation.navigate("QRCodeScanner")}
        underlayColor="#73e8ff" >
            <View >
                <Text style={styles.text} >Oder Picking</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.viewButton}
        underlayColor="#73e8ff">
            <View >
                <Text style={styles.text} >Return Load</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.viewButton} 
        underlayColor="#73e8ff">
            <View >
                <Text style={styles.text} >Take Van Photo</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.viewButton}
        underlayColor="#73e8ff">
            <View >
                <Text style={styles.text} >Localtion Park</Text>
            </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.viewButton} 
        underlayColor="#73e8ff">
            <View >
                <Text style={styles.text} >Scan Timber Park</Text>
            </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    viewMain:{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fafafa",
    },
    viewButton:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        width: "90%",
        backgroundColor: "#0086c3",
        margin: 4,
        borderRadius: 5,
    },
    text:{
        color:"#fff",
        fontSize: 20,       
    }
});