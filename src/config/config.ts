import axios from "axios"
import { Alert } from "react-native"

 const endpointURL = "https://6a1ef04ab79eec0d6cf05198.mockapi.io/books"


  export const getListOfBooks = async({onSuccess, onFailure}) => {
    try{
      const response = await axios.get(endpointURL)
      onSuccess && onSuccess(response.data)
    }catch(error) {
      console.log(error)
      onFailure && onFailure(error)
    } 
  }

  export const getBookById = async({onSuccess, onFailure}) => {
    try{
      const response = await axios.get(endpointURL + "/4")
      console.log(JSON.stringify(response.data, null, 3))
      onSuccess && onSuccess(response.data)
    }catch(error){
      console.log(error)
      onFailure && onFailure(error)
    }
  }

  export const deleteBookById = async({onSuccess, onFailure, itemID}) => {
    try{
      const response = await axios.delete(`${endpointURL}/${itemID}`)
      Alert.alert("Book is deleted successfully")
      onSuccess && onSuccess(response.data);
    } catch(error){
      console.log(error)
      onFailure && onFailure(error);
    }
  }

  export const createBook = async({onSuccess, onError, body}) => {
    try{
      const response = await axios.post(endpointURL, body)

      Alert.alert("Book has been created!")
      onSuccess && onSuccess(response.data)
    }catch(error) {
      onError && onError(error)
      console.log(error)
    }
  }

  export const updateBook = async({onSuccess, onError, body, id}) => {
    try{
      const response = await axios.put(`${endpointURL}/${id}`, body)

      Alert.alert("Book has been updated!")
      onSuccess && onSuccess(response.data)
    }catch(error) {
      onError && onError(error)
      console.log(error)
    }
  }
