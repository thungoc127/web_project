import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
  
    export const addUser = async (user, userId) => {
      try {
        // Make sure to use the correct Firestore collection path
        const itemCollection = collection(db, "users", userId, "items1");
        const docRef = await addDoc(itemCollection, user);
        console.log("User added successfully with ID: ", docRef.id);
        return docRef.id;
      } catch (error) {
        console.error("Error in addUser:", error);
      }
    };