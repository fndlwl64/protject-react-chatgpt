'use client'

export default function Sidebar() {
  return (
    <nav
      id="stage-slideover-sidebar"
      className="
        relative z-20
        h-full shrink-0 overflow-hidden
        bg-gray-400/10
        max-md:hidden
        print:hidden
      "
    >
      <div className="flex h-full flex-col p-3">
        <button className="mb-3 rounded-md border border-gray-600 px-3 py-2 text-sm hover:bg-gray-700">
          + New Chat
        </button>

        <div className="flex-1 overflow-y-auto space-y-1 text-sm text-gray-300">
          <div className="truncate rounded-md px-3 py-2 hover:bg-gray-700 cursor-pointer">
            Chat 1
          </div>
          <div className="truncate rounded-md px-3 py-2 hover:bg-gray-700 cursor-pointer">
            Chat 2
          </div>
        </div>
      </div>
    </nav>
  )
}
