import { Sun, Moon } from "lucide-react";

interface DarkModeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const DarkModeToggle = ({ isDark, onToggle }: DarkModeToggleProps) => (
  <button
    onClick={onToggle}
    className="fixed bottom-4 right-4 z-50 p-3 rounded-lg bg-secondary text-secondary-foreground border border-border shadow-lg hover:bg-muted transition-colors"
    aria-label="Toggle dark mode"
  >
    {isDark ? <Sun size={24} /> : <Moon size={24} />}
  </button>
);

export default DarkModeToggle;
