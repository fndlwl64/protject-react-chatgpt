import MessageList from './MessageList'
import PromptInput from './PromptInput'

export default function ChatMain() {
  return (
    <div
      className="
        relative flex min-w-0 flex-1 flex-col
        -translate-y-[calc(env(safe-area-inset-bottom,0px)/2)]
        pt-[calc(env(safe-area-inset-bottom,0px)/2)]
      "
    >
      <MessageList />
      <PromptInput />
    </div>
  )
}
