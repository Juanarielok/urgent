import { doc, onSnapshot } from "firebase/firestore";
import db from "../config/firebaseConfig";

function getAllPosts(callback: (posts: any[]) => void) {
  const participantsDocRef = doc(db, "waitlist", "updates");

  return onSnapshot(participantsDocRef, (docSnap) => {
    if (docSnap.exists()) {
      callback(docSnap.data().members || []);
    } else {
      console.log("No such document!");
      callback([]);
    }
  });
}

export default getAllPosts;
