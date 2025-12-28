// app/(protected)/ai/_components/PromptInput.tsx
'use client'

import { useState } from 'react'
import { useChatStore } from '@/store/chat.store'

export default function PromptInput() {
  const [value, setValue] = useState('')
  const addMessage = useChatStore((s) => s.addMessage)

  const send = () => {
    if (!value.trim()) return

    addMessage({
      id: crypto.randomUUID(),
      role: 'user',
      content: value,
    })

    setValue('')
  }

  return (
    <div className="p-4">
      <div className="flex justify-center items-end gap-2">
        <textarea
          rows={1}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              send()
            }
          }}
          placeholder="메시지를 입력하세요..."
          className="
            flex-1 resize-none rounded-md 
            p-3 text-sm
            outline-none focus:ring-1 focus:ring-blue-500
          "
        />
        <button
          onClick={send}
          disabled={!value.trim()}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
        >
          전송
        </button>
      </div>
    </div>
  )
}
