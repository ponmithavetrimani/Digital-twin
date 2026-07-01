"use client";

import { useEffect, useRef, useState } from "react";
import { socket, connectSocket, disconnectSocket } from "@/services/socket";

export function useSocket() {
  const [connected, setConnected] = useState(false);
  const socketRef = useRef(socket);

  useEffect(() => {
    connectSocket();

    socketRef.current.on("connect", () => {
      setConnected(true);
    });

    socketRef.current.on("disconnect", () => {
      setConnected(false);
    });

    return () => {
      disconnectSocket();
    };
  }, []);

  return {
    socket: socketRef.current,
    connected,
  };
}