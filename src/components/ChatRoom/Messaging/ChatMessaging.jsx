import React, { useRef, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getFirestore, collection, query, orderBy, limit, addDoc, doc, serverTimestamp } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import UserProfile from "../../../assets/UserProfile.png";
import EmojiPicker from 'emoji-picker-react';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const firestore = getFirestore(app);

function ChatRoom({ roomId }) {
  const [user] = useAuthState(auth);
  const [formValue, setFormValue] = useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const bottomRef = useRef(null);

  const messagesRef = roomId
    ? collection(firestore, "Groups", roomId, "messages")
    : null;

  const messagesQuery = messagesRef
    ? query(messagesRef, orderBy("createdAt"), limit(500))
    : null;

  const [messages] = useCollectionData(messagesQuery, { idField: "id" });

  useEffect(() => {
    if (!roomId) {
      toast.error("Room ID is not available.");
    }
  }, [roomId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!formValue.trim()) return;

    try {
      const user = auth.currentUser;
      const roomRef = doc(firestore, "Groups", roomId);
      const messagesRef = collection(roomRef, "messages");

      await addDoc(messagesRef, {
        text: formValue,
        createdAt: serverTimestamp(),
        uid: user.uid,
        photoURL: user.photoURL || UserProfile,
      });

      setFormValue("");
    } catch (err) {
      toast.error("Error sending message: " + err.message);
    }
  };

  const handleEmojiSelect = (emoji) => {
    setFormValue((prevValue) => prevValue + emoji.emoji);
    // setEmojiPickerVisible(false);
  };

  const toggleEmojiPicker = () => setEmojiPickerVisible((prev) => !prev);

  const handleInputClick = () => {
    setEmojiPickerVisible(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage(e);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!roomId) return null;

  return (
    <div className="flex flex-col w-full h-full px-4 overflow-hidden">
      <div className="flex-1 flex flex-col justify-end overflow-auto pb-20">
        {messages && messages.length > 0 ? (
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)
        ) : (
          <div className="flex flex-col items-center justify-center py-10 mt-12 text-gray-500">
            <svg
              width="80px"
              height="80px"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11.6C2 8.23969 2 6.55953 2.65396 5.27606C3.2292 4.14708 4.14708 3.2292 5.27606 2.65396C6.55953 2 8.23969 2 11.6 2H20.4C23.7603 2 25.4405 2 26.7239 2.65396C27.8529 3.2292 28.7708 4.14708 29.346 5.27606C30 6.55953 30 8.23969 30 11.6V20.4C30 23.7603 30 25.4405 29.346 26.7239C28.7708 27.8529 27.8529 28.7708 26.7239 29.346C25.4405 30 23.7603 30 20.4 30H11.6C8.23969 30 6.55953 30 5.27606 29.346C4.14708 28.7708 3.2292 27.8529 2.65396 26.7239C2 25.4405 2 23.7603 2 20.4V11.6Z"
                fill="url(#paint0_linear_87_7269)"
              />
              <path
                d="M16 23C20.9706 23 25 19.6421 25 15.5C25 11.3579 20.9706 8 16 8C11.0294 8 7 11.3579 7 15.5C7 18.1255 8.61889 20.4359 11.0702 21.7758C10.9881 22.4427 10.7415 23.3327 10 24C11.4021 23.7476 12.5211 23.2405 13.3571 22.6714C14.1928 22.885 15.0803 23 16 23Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_87_7269"
                  x1="16"
                  y1="2"
                  x2="16"
                  y2="30"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5AF575" />
                  <stop offset="1" stop-color="#13BD2C" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex flex-col items-center justify-center h-full text-center space-y-2">
              <p className="text-2xl font-semibold text-gray-700">No messages yet</p>
              <p className="text-sm text-gray-500">Start a conversation to see messages here.</p>
            </div>
            <button className="px-4 py-2 mt-4 text-sm font-medium text-white bg-blue-500 rounded-lg shadow hover:bg-blue-600">
              Start a Conversation
            </button>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={sendMessage}
        className="fixed bottom-0 left-0 w-full px-4 py-3 backdrop-blur-lg bg-gray-800 bg-opacity-50 shadow-md flex items-center justify-between"
      >
        <button
          type="button"
          onClick={toggleEmojiPicker}
          className="mr-2 px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
          😊
        </button>

        <input
          className="flex-1 px-4 py-2 bg-gray-700 bg-opacity-40 text-gray-200 rounded-lg focus:outline-none placeholder-gray-400"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type your message..."
          onClick={handleInputClick}
          onKeyDown={handleKeyDown}
        />
        <button
          type="submit"
          disabled={!formValue}
          className="ml-2 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          Send
        </button>
        
        {emojiPickerVisible && (
          <div className="absolute bottom-16 left-4 z-50">
            <EmojiPicker
              onEmojiClick={handleEmojiSelect}
              pickerStyle={{
                position: "absolute",
                bottom: "0",
                left: "0",
                zIndex: 1000,
              }}
            />
          </div>
        )}
      </form>
    </div>
  );
}

function ChatMessage({ message }) {
  const { text, uid, photoURL } = message;
  const isUser = uid === auth.currentUser?.uid;

  return (
    <div className={`flex items-end px-4 mb-4 ${isUser ? "flex-row-reverse" : ""}`}>
      <img
        src={photoURL || UserProfile}
        alt="User-Avatar"
        className="w-10 h-10 rounded-full shadow-md mx-3 border-2 border-white ring-2 ring-blue-400"
      />
      <div
        className={`px-6 py-2 rounded-2xl max-w-md ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-200 text-gray-900 rounded-bl-none"
        }`}
      >
        <span>{text}</span>
      </div>
    </div>
  );
}

export default ChatRoom;
