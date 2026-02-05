import { HugeiconsIcon } from "@hugeicons/react";
import { Dumbbell02Icon, EquipmentGym03Icon } from "@hugeicons/core-free-icons";

export function NavBar({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border backdrop-blur-lg bg-opacity-95 z-50">
            <div className="max-w-screen-sm mx-auto px-4 py-3 flex items-center gap-3">
                <div className="flex items-center justify-center w-1/4">
                    <HugeiconsIcon icon={EquipmentGym03Icon} strokeWidth={2} className="w-9 h-9" />
                    <span>w8room</span>
                </div>
                <div className="flex-1 text-right">
                    {children}
                </div>
            </div>
        </nav>
    );
}