import { ReactNode } from "react";
import ChatSidebar from "@/components/sidebar/ChatSidebar";

export default function ChatLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen">
        <aside className="hidden lg:block w-64 border-r border-zinc-800">
            <ChatSidebar />
        </aside>
        <main className="flex-1 flex flex-col"></main>
    </div>
  );
}