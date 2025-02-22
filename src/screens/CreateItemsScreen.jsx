import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const CreateItemsScreen = ({ groceryData, setgroceryData }) => {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [prices, setPrices] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [itemId, setitemId] = useState(null);

  const addgroceryhandler = () => {
    const newitem = {
      id: Date.now(),
      name: item,
      quantity: quantity,
      unit: unit,
      prices: prices,
      supplierName: supplierName
    }
    setgroceryData([...groceryData, newitem])
    setItem('')
    setQuantity('')
    setUnit('')
    setSupplierName('')
    setPrices('')
    setIsEdit(false)
  }

  const handleDelete = (id) => {
    setgroceryData(groceryData.filter(item => item.id !== id));
  };

  const handleEdit = (id) => {
    setIsEdit(true)
    setitemId(itemId)
    setItem(groceryData.find(item => item.id === id).name)
    setQuantity(groceryData.find(item => item.id === id).quantity)
    setUnit(groceryData.find(item => item.id === id).unit)
    setPrices(groceryData.find(item => item.id === id).price)
    setSupplierName(groceryData.find(item => item.id === id).supplier)
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='Enter Item Name ...'
        style={styles.input}
        value={item}
        onChangeText={(item) => setItem(item)}
      />
      <TextInput
        placeholder='Enter Price ...'
        style={styles.input}
        value={prices}
        keyboardType='numeric'
        onChangeText={(price) => setPrices(price)}
      />
      <TextInput
        placeholder='Enter Quantity ...'
        style={styles.input}
        value={quantity}
        keyboardType='numeric'
        onChangeText={(quantity) => setQuantity(quantity)}
      />
      <TextInput
        placeholder='Enter units (e.g., kg or liters)'
        style={styles.input}
        value={unit}
        onChangeText={(unit) => setUnit(unit)}
      />
      <TextInput
        placeholder="Enter supplier's name"
        style={styles.input}
        value={supplierName}
        onChangeText={(supname) => setSupplierName(supname)}
      />
     
      <Pressable style={styles.btn} onPress={() => isEdit ? updateItemHandler() : addgroceryhandler()}>
        <Text style={styles.btnText}>{isEdit ? 'Edit Item' : 'Add Item'}</Text>
      </Pressable>
      
      <View style={{ marginTop: 10,  marginBottom: 10 }}>
        <View style={styles.headingContainer}>
          <Text style={[styles.headingTxt, styles.column]}>Item</Text>
          <Text style={[styles.headingTxt, styles.column]}>Quantity</Text>
          <Text style={[styles.headingTxt, styles.column]}>Supplier</Text>
          <Text style={[styles.headingTxt, styles.column]}>Actions</Text>
        </View>
        <FlatList
          data={groceryData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemWrapper}>
              <View style={[styles.itemContainer, { backgroundColor: item.quantity <= 50 ? "#FFCCCC" : "#D7F6BF" }]}>
                <Text style={[styles.itemText, styles.column]}>{item.name}</Text>
                <Text style={[styles.itemText, styles.column]}>{item.quantity}</Text>
                <Text style={[styles.itemText, styles.column]}>{item.supplier}</Text>
                <View style={styles.actionContainer}>
                  <Pressable
                    onPress={() => handleEdit(item.id)}
                  >
                    <Text style={styles.actionbtn}>Edit</Text>
                  </Pressable>

                  <Pressable onPress={() => handleDelete(item.id)}>
                    <Text style={styles.actionbtn}>Delete</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 15 }}
        />
      </View>
    </View>
  )
}

export default CreateItemsScreen

const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: 'row',
    gap: 10,
    width: '33%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingVertical: "4%",
    gap: 15,
    backgroundColor: '#F4F4F4', 
    paddingHorizontal: 15,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",  
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: '#FFFFFF', 
  },
  btn: {
    backgroundColor: "#1E2A47",  
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 15,
  },
  btnText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  headingContainer: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#E0E0E0", 
    borderRadius: 5,
  },
  headingTxt: {
    fontWeight: "700",
    fontSize: 16,
    textAlign: 'center',
    color: "#333",  
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    // marginBottom: 8,
    backgroundColor: "#FFFFFF",  
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 3,
  },
  itemText: {
    fontWeight: "500",
    fontSize: 15,
    textAlign: 'center',
    color: '#555',
  },
  column: {
    width: '21%',
  },
  actionbtn: {
    fontWeight: "600",
    fontSize: 14,
    color: "#1E2A47",
    textDecorationLine: 'underline',
  },
  itemWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
})
