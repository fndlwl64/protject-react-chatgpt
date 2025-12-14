import ChatLayout from "@/components/layout/ChatLayout";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";

export default function ChatPage() {
return (
        <ChatLayout>
        <ChatMessages />
        <ChatInput />
        </ChatLayout>
    )
}   