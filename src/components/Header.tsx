
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Bot, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="w-full py-4 px-6 border-b">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-xl font-spacegrotesk font-bold">
            <span className="gradient-text">Accessibility</span> Analyzer
          </h1>
        </Link>
        <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
          <Link to="/documentation">
            <Button variant="ghost" className="font-medium text-sm md:text-base">
              Documentation
            </Button>
          </Link>
          <Link to="/resources">
            <Button variant="ghost" className="font-medium text-sm md:text-base">
              Resources
            </Button>
          </Link>
          
          {isAuthenticated ? (
            <>
              <div className="text-sm font-medium px-3">
                Welcome, {user?.name}
              </div>
              <Button 
                variant="outline" 
                className="font-medium text-sm md:text-base"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Log Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="font-medium text-sm md:text-base">
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="font-medium text-sm md:text-base">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
          
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
