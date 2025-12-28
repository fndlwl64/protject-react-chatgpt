export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="h-screen bg-gray-900 text-gray-100">
            {children}
        </div>
    );
} 
