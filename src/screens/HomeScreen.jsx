import { Pressable, StyleSheet, Text, View, Dimensions } from 'react-native';
import React, { useState } from 'react';
import AllItemsScreen from './AllItemsScreen';
import CreateItemsScreen from './CreateItemsScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window'); 

const HomeScreen = () => {
    const [view, setView] = useState(0)
    const getFilteredData = () => {
        const filteredItems = groceryData.filter(item => item?.price <= 5);
        return filteredItems;
    };

    const [groceryData, setGroceryData] = useState([
        {
          id: 1,
          name: "Rice",
          quantity: 10,
          unit: "kg",
          price: 20,
          supplier: "Rice Co.",
        },
        {
          id: 2,
          name: "Sugar",
          quantity: 50,
          unit: "kg",
          price: 15,
          supplier: "Sugar Ltd.",
        },
        {
          id: 3,
          name: "Milk",
          quantity: 240,
          unit: "litr",
          price: 1.5,
          supplier: "Dairy Fresh",
        },
        {
          id: 4,
          name: "Flour",
          quantity: 70,
          unit: "kg",
          price: 12,
          supplier: "Flour Mills",
        },
        {
          id: 5,
          name: "Salt",
          quantity: 50,
          unit: "kg",
          price: 5,
          supplier: "Salt Works",
        },
        {
          id: 6,
          name: "Cooking Oil",
          quantity: 2,
          unit: "litr",
          price: 3.75,
          supplier: "Oil Co.",
        },
        {
          id: 7,
          name: "Lentils",
          quantity: 10,
          unit: "kg",
          price: 8,
          supplier: "Pulse Traders",
        },
        {
          id: 8,
          name: "Coffee Powder",
          quantity: 100,
          unit: "kg",
          price: 25,
          supplier: "Coffee Co.",
        },
        {
          id: 9,
          name: "Tomatoes",
          quantity: 40,
          unit: "kg",
          price: 5,
          supplier: "Fresh Veggies",
        },
        {
          id: 10,
          name: "Onions",
          quantity: 30,
          unit: "kg",
          price: 4,
          supplier: "Veggie Mart",
        },
        {
          id: 11,
          name: "Garlic",
          quantity: 10,
          unit: "kg",
          price: 15,
          supplier: "Herb World",
        },
        {
          id: 12,
          name: "Potatoes",
          quantity: 100,
          unit: "kg",
          price: 7,
          supplier: "Root Growers",
        },
        {
          id: 13,
          name: "Carrots",
          quantity: 50,
          unit: "kg",
          price: 6,
          supplier: "Fresh Harvest",
        },
        {
          id: 14,
          name: "Cucumber",
          quantity: 30,
          unit: "kg",
          price: 4.5,
          supplier: "Veggie Land",
        },
        {
          id: 15,
          name: "Bananas",
          quantity: 20,
          unit: "kg",
          price: 2.8,
          supplier: "Tropical Fruits",
        },
        {
          id: 16,
          name: "Apples",
          quantity: 25,
          unit: "kg",
          price: 6,
          supplier: "Apple Farms",
        },
        {
          id: 17,
          name: "Chickpeas",
          quantity: 15,
          unit: "kg",
          price: 10,
          supplier: "Pulse Traders",
        },
        {
          id: 18,
          name: "Tomato Sauce",
          quantity: 30,
          unit: "liters",
          price: 12,
          supplier: "Sauce Masters",
        },
        {
          id: 19,
          name: "Cheese",
          quantity: 10,
          unit: "kg",
          price: 18,
          supplier: "Dairy Products Co.",
        },
        {
          id: 20,
          name: "Butter",
          quantity: 5,
          unit: "kg",
          price: 12,
          supplier: "Butter Makers",
        }
      ]);
      

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Grocery App</Text>
            <Text style={styles.subtitle}>Manage your grocery inventory</Text>

            <View style={styles.btnContainer}>
                <Pressable 
                    style={[styles.button, view === 0 && styles.activeButton]}
                    onPress={() => setView(0)}
                >
                    <Text style={[styles.buttonText, view === 0 && styles.activeButtonText]}>
                        All Products
                    </Text>
                </Pressable>

                <Pressable 
                    style={[styles.button, view === 1 && styles.activeButton]}
                    onPress={() => setView(1)}
                >
                    <Text style={[styles.buttonText, view === 1 && styles.activeButtonText]}>
                        FMCG Products
                    </Text>
                </Pressable>

                <Pressable 
                    style={[styles.button, view === 2 && styles.activeButton]}
                    onPress={() => setView(2)}
                >
                    <Text style={[styles.buttonText, view === 2 && styles.activeButtonText]}>
                        Add Products
                    </Text>
                </Pressable>
            </View>

            {/* Conditional Rendering for Screens */}
            {view === 0 && <AllItemsScreen groceryData={groceryData} />}
            {view === 1 && <AllItemsScreen groceryData={getFilteredData()} />}
            {view === 2 && <CreateItemsScreen groceryData={groceryData} setgroceryData={setGroceryData} />}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f9',
        padding: width * 0.01, 
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: width * 0.07, 
        fontWeight: '700',
        color: '#333',
        textAlign: 'center',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: width * 0.05,
        color: '#777',
        textAlign: 'center',
        marginBottom: 30,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 30,
        width: '100%',
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: height * 0.02, 
        paddingHorizontal: width * 0.05,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#28a745',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 5,
    },
    buttonText: {
        color: '#28a745',
        fontWeight: '600',
        fontSize: width * 0.03, 
        marginLeft: 8,
    },
    activeButton: {
        backgroundColor: '#28a745',
    },
    activeButtonText: {
        color: 'white',
    },
});
