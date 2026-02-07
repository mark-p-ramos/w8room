export default function CreateWorkoutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="fixed inset-0 flex flex-col bg-background">
            <div className="w-full max-w-2xl mx-auto flex-1 flex flex-col overflow-hidden">
                {children}
            </div>
        </div>
    );
}
