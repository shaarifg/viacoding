import { useAuth } from "@/hooks/useAuth";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    // fake login
    login("fake-jwt-token", { name: "Mohd Sharif" });
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl mb-4 font-bold">Login Page</h2>
      <button
        onClick={handleLogin}
        className="bg-primary-600 text-white px-4 py-2 rounded"
      >
        Sign In
      </button>
    </div>
  );
};

export default Login;
