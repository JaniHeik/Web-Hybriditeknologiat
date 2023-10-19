import { StyleSheet, Button, Text, TextInput, View } from 'react-native';
import { convertFirebaseTimeStampToJS } from './helpers/Functions';
import { MESSAGES, collection, addDoc, serverTimestamp, firestore } from './firebase/Config';
import { useState } from 'react';

export default function App() {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')

  const save = async() => {
    const docRef = await addDoc(collection(firestore,MESSAGES), {
      text: newMessage,
      created: serverTimestamp()
    }).catch (error => console.log(error))

    setNewMessage('')
    console.log('Message saved.')
  }

  useEffect(() => {
    const q = query(collection(firestore,MESSAGES),orderBy('created','desc'))

    const unsubscribe = onSnapshot(q,(querySnapshot) => {
      const tempMessages = []

      querySnapshot.forEach((doc) => {
        // Create and format message object based on data retrieved from database.
        const messageObject = {
          id: doc.id,
          text: doc.data().text,
          created: convertFirebaseTimeStampToJS(doc.data().created)
        }
        tempMessages.push(messageObject)
      })
      setMessages(tempMessages)
    })
  
  return () => {
    unsubscribe()
  }
  }, [])

  return(
    <View style={styles.container}>
      <TextInput placeholder='Enter message...' value={newMessage} onChangeText={text => setNewMessage(text)}/>
      <Button title="Save" type="button" onPress={save}/>
      <ScrollView>
        {
          messages.map((message) =>(
            <View style={styles.message} key={message.id}>
              <Text style={styles.messageInfo}>{message.created}</Text>
              <Text>{message.text}</Text>
              </View>
          ))
        }
      </ScrollView>
    </View>
   )
  }

 const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 10
  },
  messageInfo: {
    fontSize: 12
  }
 });