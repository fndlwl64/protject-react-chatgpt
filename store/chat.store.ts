import { create } from 'zustand'

/**
 * 메시지 역할
 * - user: 사용자 입력
 * - assistant: AI 응답
 */
export type ChatRole = 'user' | 'assistant'

/**
 * 단일 메시지 타입
 */
export interface ChatMessage {
  id: string
  role: ChatRole
  content: string
}

/**
 * 채팅 상태
 */
interface ChatState {
  messages: ChatMessage[]

  /** 메시지 추가 */
  addMessage: (message: ChatMessage) => void

  /** 마지막 메시지 내용 갱신 (스트리밍 대비) */
  updateLastMessage: (content: string) => void

  /** 전체 초기화 (New Chat) */
  clearMessages: () => void
}

/**
 * Chat Store
 */
export const useChatStore = create<ChatState>((set) => ({
  messages: [],

  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),

  updateLastMessage: (content) =>
    set((state) => {
      if (state.messages.length === 0) return state

      const updated = [...state.messages]
      const lastIndex = updated.length - 1

      updated[lastIndex] = {
        ...updated[lastIndex],
        content,
      }

      return { messages: updated }
    }),

  clearMessages: () => set({ messages: [] }),
}))
