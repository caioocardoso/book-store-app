import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { createBook, updateBook } from "../config/config";

const AddBookScreen = ({ onCloseIconPress, onCreateSuccess, selectedItem }) => {
  const [bookName, setBookName] = useState(selectedItem?.title ?? "");
  const [authorName, setAuthorName] = useState(selectedItem?.name_of_author ?? "");
  const [coverURL, setCoverURL] = useState(selectedItem?.cover ?? "");
  const [price, setPrice] = useState(selectedItem?.price ?? "");

  const createNewBook = () => {
    createBook({
      body:{
        title: bookName,
        name_of_author: authorName,
        cover: coverURL,
        price: price,
      },
      onSuccess:() => {
        onCloseIconPress()
        onCreateSuccess()
      },
      onError: (err) => {Alert.alert("Error Happen")}
    })
  }
  
  const editBook = () => {
    updateBook({
      id:selectedItem?.id,
      body:{
        title: bookName,
        name_of_author: authorName,
        price: price,
        cover: coverURL
      },
      onSuccess:() => {
        onCloseIconPress()
        onCreateSuccess()
      },
      onError: (err) => {Alert.alert("Error Happen")}
    })
  }
  

  return (
    <View>
      <Ionicons
        name="close-circle"
        size={24}
        color="#B80000"
        onPress={onCloseIconPress}
      />
      <View style={styles.body}>
        <Text style={styles.title}>Book Details</Text>
        <AppTextInput
          value={bookName}
          onChangeText={setBookName}
          placeHolder={"Book Name"}
        />
        <AppTextInput
          value={authorName}
          onChangeText={setAuthorName}
          placeHolder={"Author Name"}
        />
        <AppTextInput
          value={coverURL}
          onChangeText={setCoverURL}
          placeHolder={"Cover Image"}
        />
        <AppTextInput
          value={price}
          onChangeText={setPrice}
          placeHolder={"Book Price"}
          keyboardType={"numeric"}
        />
        <AppButton name={"Save"} onPress={!!selectedItem ? editBook : createNewBook}/>
      </View>
    </View>
  );
};

export default AddBookScreen;

const styles = StyleSheet.create({
  body: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
  },
});
