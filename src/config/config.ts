import axios from "axios"
import { Alert } from "react-native"

 const endpointURL = "https://6a1ef04ab79eec0d6cf05198.mockapi.io/books"


  const getListOfBooks = async() => {
    try{
      const response = await axios.get(endpointURL)
      setBookList(response.data)
    }catch(error) {
      console.log(error)
    } 
  }

  const getBookById = async() => {
    try{
      const response = await axios.get(endpointURL + "/4")
      console.log(JSON.stringify(response.data, null, 3))
      setBookList(response.data)
    }catch(error){
      console.log(error)
    }
  }

  const deleteBookById = async() => {
    try{
      const response = await axios.delete(endpointURL + "/4")
      Alert.alert("Book is deleted successfully")
    } catch(error){
      console.log(error)
    }
  }

