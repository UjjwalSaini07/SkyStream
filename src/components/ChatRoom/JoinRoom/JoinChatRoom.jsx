import { useEffect, useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { cn } from "../../../lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "../../ui/card";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, query, orderBy, limit, addDoc, serverTimestamp, doc, getDoc, } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Auth from "../AuthChecking/Auth";
import ChatMessaging from "../Messaging/ChatMessaging";

const textVariant = (delay) => ({
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", duration: 1.25, delay },
  },
});

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

function JoinChatRoom() {
  const [roomId, setRoomId] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const [currentRoomId, setCurrentRoomId] = useState(null);
  const bottomRef = useRef(null);
  const isConnected = Boolean(currentRoomId);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const room = urlParams.get("room");
    if (room) {
      setRoomId(room);
    }
  }, []);

  const joinRoom = async () => {
    if (!auth.currentUser) {
      toast.error("You must be logged in to join a room.");
      return;
    }

    if (!roomId.trim()) {
      toast.error("Please enter a valid Room ID.");
      return;
    }

    setIsConnecting(true);
    try {
      const roomDoc = await getDoc(doc(firestore, "Groups", roomId.trim()));

      if (!roomDoc.exists()) {
        toast.error("Room does not exist. Please check the Room ID.");
        setIsConnecting(false);
        return;
      }

      setCurrentRoomId(roomId.trim());
      toast.success("Successfully joined the room!");
    } catch (error) {
      console.error("Error joining room:", error);
      toast.error(`Error joining room: ${error.message}`);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {!currentRoomId ? (
        <div className={cn("mx-auto space-y-8 flex-1 p-6 max-w-2xl")}>
          <motion.div
            variants={textVariant(0.9)}
            initial="hidden"
            animate="show"
            className="flex justify-between"
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 rounded-xl shadow-xl"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Button>
          </motion.div>

          <motion.div
            variants={textVariant(0.35)}
            initial="hidden"
            animate="show"
          >
            <Card
              className="bg-gray-900 text-white shadow-xl hover:border-purple-500 rounded-xl p-6"
              style={{ boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)" }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white text-2xl font-extrabold">
                  <Users className="h-7 w-7 text-blue-500 hover:scale-110 transition-transform duration-300" />
                  Join a Chat Room
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm">
                  Enter the room code to join and start chatting.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Input
                    className="p-4 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 border border-gray-600 transition-all duration-300"
                    placeholder="Enter room code"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    disabled={isConnecting}
                  />
                  <Button
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
                    onClick={joinRoom}
                    disabled={isConnecting || !roomId.trim()}
                  >
                    {isConnecting ? "Connecting..." : "Join Room"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      ) : (
        <ChatMessaging />
      )}
    </>
  );
}

function JoinAuthCheck() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {!user ? <Auth /> : <JoinChatRoom />}
    </div>
  );
}

export default JoinAuthCheck;