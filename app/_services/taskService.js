import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
  
    // Add a new event
    export const addTask = async (task, userId) => {
      try {
        // Make sure to use the correct Firestore collection path
        const itemCollection = collection(db, "tasks", userId,"item");
        const docRef = await addDoc(itemCollection, task);
        console.log("Task added successfully with ID: ", docRef.id);
        return docRef.id;
      } catch (error) {
        console.error("Error in addTask:", error);
      }
    };