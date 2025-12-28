// app/(protected)/ai/_components/MessageList.tsx
'use client'

import { useChatStore } from '@/store/chat.store'
import MessageItem from './MessageItem'

export default function MessageList() {
  const messages = useChatStore((s) => s.messages)

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 bg-gray-500/10">
      {messages.length === 0 && (
        <div className="text-center text-sm text-gray-500">
          메시지를 입력해 대화를 시작하세요.
        </div>
      )}

      {messages.map((m) => (
        <MessageItem key={m.id} role={m.role} content={m.content} />
      ))}
    </div>
  )
}
