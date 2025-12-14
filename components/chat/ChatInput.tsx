export default function ChatInput () {
    return (
        <div className="p-4 border-t border-zinc-800">
            <form className="flex space-x-4">
                <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 p-2 border border-zinc-700 rounded bg-zinc-900 text-white"
                />
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Send
                </button>
            </form>
        </div>
    );
}