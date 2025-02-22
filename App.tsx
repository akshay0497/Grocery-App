import { StyleSheet, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'

const App = () => {
  return (
    <View style={styles.view}>
     <HomeScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
 view:{
  width: '100%',
  height: '100%',
  padding:"4%",
 }
})