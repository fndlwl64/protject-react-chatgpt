type Props = {
  role: 'user' | 'assistant'
  content: string
}

export default function MessageItem({ role, content }: Props) {
  const isUser = role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`
          max-w-2xl whitespace-pre-wrap rounded-lg px-4 py-3 text-sm leading-relaxed
          ${isUser
            ? 'bg-blue-600 text-white'
            : 'bg-gray-800 text-gray-100'}
        `}
      >
        {content}
      </div>
    </div>
  )
}
