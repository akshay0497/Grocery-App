import { FlatList, StyleSheet, Text, View } from 'react-native'

const AllItemsScreen = ({groceryData}) => {
  return (
    <View style={styles.screens}>
   
      <View style={styles.headingContainer}>
        <Text style={[styles.headingTxt, styles.column]}>Items</Text>
        <Text style={[styles.headingTxt, styles.column]}>Qty</Text>
        <Text style={[styles.headingTxt, styles.column]}>Units</Text>
        <Text style={[styles.headingTxt, styles.column]}>Price</Text>
        <Text style={[styles.headingTxt, styles.column]}>Supplier</Text>
      </View>
      <FlatList
        data={groceryData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, {backgroundColor: item.price <= 5 ? "#FFCCCC" : "#D7F6BF"}]}>
            <Text style={[styles.itemText, styles.column]}>{item.name}</Text>
            <Text style={[styles.itemText, styles.column]}>{item.quantity}</Text>
            <Text style={[styles.itemText, styles.column]}>{item.unit}</Text>
            <Text style={[styles.itemText, styles.column]}>{item.price}</Text>
            <Text style={[styles.itemText, styles.column]}>{item.supplier}</Text>
          </View>
        )}
        contentContainerStyle={{gap: 15}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screens :{
    flex:1,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingTxt:{
    fontWeight:"700",
    fontSize: 16,
    textAlign: 'center',
  },
  itemContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 7,
    borderRadius: 10,
  },
  itemText:{
    fontWeight:"400",
    fontSize: 15,
    textAlign: 'center',
  },
  column: {
    width: '17%',
  }
})

export default AllItemsScreen