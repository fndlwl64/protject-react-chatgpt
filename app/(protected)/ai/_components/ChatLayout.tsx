import Sidebar from './Sidebar'
import MessageList from './MessageList'
import PromptInput from './PromptInput'

export default function ChatLayout() {
  return (
    <div className="flex h-full">
      <Sidebar />

      <main className="flex flex-1 flex-col">
        <MessageList />
        <PromptInput />
      </main>
    </div>
  )
}
