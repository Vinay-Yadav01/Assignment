import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, User } from "lucide-react";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all fields",
      });
      return;
    }

    login(name, email);
    toast({
      title: "Success",
      description: "You have successfully logged in",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel - Login Form */}
      <div className="flex-1 p-8 flex flex-col justify-center items-center md:items-start">
        <div className="w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-[#2d4175]">Login</h1>
            <p className="text-gray-500">Login to your account.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="pl-10"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="rounded text-[#2d4175] focus:ring-[#2d4175]"
                />
                <Label htmlFor="remember" className="text-sm cursor-pointer">
                  Remember me
                </Label>
              </div>
              <a href="#" className="text-sm text-[#2d4175] hover:underline">
                Reset Password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#2d4175] hover:bg-[#1a2a4f]"
            >
              Sign In
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500">
            Don't have an account yet?{" "}
            <a href="#" className="text-[#2d4175] hover:underline font-medium">
              Join KRIS today
            </a>
            .
          </p>
        </div>
      </div>

      {/* Right Panel - Image and Text */}
      <div className="flex-1 bg-[#2d4175] text-white p-8 flex items-center justify-center relative hidden md:flex">
        <div className="max-w-md p-6 z-10">
          <h2 className="text-3xl font-bold mb-4">
            Manage all <span className="text-yellow-400">HR Operations</span>{" "}
            from the comfort of your home.
          </h2>

          {/* Indicators/Dots */}
          <div className="flex space-x-2 mt-12">
            <div className="w-8 h-2 bg-yellow-400 rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Semi-transparent overlay with image - we'd add image if provided or available */}
        <div
          className="absolute inset-0 bg-black bg-opacity-30 z-0"
          style={{
            backgroundImage: "url('/images/hr-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
