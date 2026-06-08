import { View, Text, FlatList, SafeAreaViewBase, Modal } from "react-native";
import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { deleteBookById, getListOfBooks } from "../config/config";
import AddButton from "../components/AddButton";
import AddBookScreen from "./AddBookScreen";

const HomeScreen = () => {
  const [bookList, setBookList] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    getListOfBooks({
      onSuccess: (books) => setBookList(books),
      onFailure: (err) => console.log(err),
    });
  }, []);

  const onDeleteItem = (item) => {
    console.log(item.id);
    deleteBookById({
      onSuccess: () => {
        getListOfBooks({
          onSuccess: (books) => setBookList(books),
          onFailure: (err) => console.log(err),
        });
      },
      onFailure: (error) => console.log(error),
      itemID: item.id,
    });
  };

  const onEditItem = (item) => {
    setModalVisible(true);
    setSelectedItem(item);
    console.log(item.id);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={bookList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookCard
            title={item.title}
            authorName={item.name_of_author}
            price={item.price}
            imageURI={item.cover}
            onDeleteItem={() => onDeleteItem(item)}
            onEditItem={() => onEditItem(item)}
          />
        )}
      ></FlatList>
      <AddButton
        onPress={() => {
          setSelectedItem(null);
          setModalVisible(true);
        }}
      />
      <Modal visible={modalVisible} animationType="slide">
        <AddBookScreen
          onCloseIconPress={() => setModalVisible(false)}
          onCreateSuccess={() =>
            getListOfBooks({
              onSuccess: (books) => setBookList(books),
              onFailure: (err) => console.log(err),
            })
          }
          selectedItem={selectedItem}
        ></AddBookScreen>
      </Modal>
    </View>
  );
};

export default HomeScreen;
