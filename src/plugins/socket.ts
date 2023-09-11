import { io, Socket } from "socket.io-client";

export const useSocketIO = () => {
  const socket: Socket = io("ws://localhost:3001");
  return {
    socket,
  };
};