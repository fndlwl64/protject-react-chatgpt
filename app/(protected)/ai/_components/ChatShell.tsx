import Sidebar from './Sidebar'
import ChatMain from './ChatMain'

export default function ChatShell() {
  return (
    <div className="flex h-svh w-screen flex-col">
      <div className="relative z-0 flex min-h-0 w-full flex-1">
        <div className="relative flex min-h-0 w-full flex-1">
          <Sidebar />
          <ChatMain />
        </div>
      </div>
    </div>
  )
}
