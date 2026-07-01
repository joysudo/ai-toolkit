import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./config";

export async function registerUser(email: string, password: string, name: string, role: "student" | "teacher") {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        role,
        createdAt: new Date(), // this is just in case we retrospectively need to inspect db/delete ppl, shouldn't ever be accessed by program
    });
    return userCredential.user;
}

export async function loginUser(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
}