import { create } from "zustand";
import { Message } from "@/types/chat";

interface ChatState {
    messages: Message[];
    addMessage: (message: Message) => void;
}

export const useChatStore = create<ChatState>((set) => ({
    messages: [],
    addMessage: (message: Message) =>
        set((state) => ({ messages: [...state.messages, message] })),
}));