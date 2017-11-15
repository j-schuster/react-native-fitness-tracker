import React from 'react'
import AddEntry from './components/AddEntry'
import { View,
         Text,
         StyleSheet,
         TouchableHighlight,
         TouchableNativeFeedback,
         TouchableWithoutFeedback,
         Slider
          } from 'react-native'

export default class App extends React.Component {
  state = {
    value: 0
  }

  render() {
    return (
      <View style={styles.container}>

        <AddEntry/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    alignItems: "stretch",
    justifyContent: "center"
  }
})

/*
<Text>
          value: {this.state.value}
        </Text>  

 <Slider
          minimumValue={0}
          maximumValue={50}
          step={1}
          value={this.state.value}
          onValueChange={(value) => this.setState(() => ({ value }))}
        />

*/