import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("welcome");
  };
  return (
    <div className="flex items-center justify-center">
      <div className="border-2 border-black rounded-xl shadow-lg bg-white">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center p-8 space-y-4"
        >
          <h1 className="text-2xl font-bold mb-4">Login</h1>

          {/* Email Input */}
          <input
            className="border-2 border-gray-300 rounded-full px-4 py-2 w-64 focus:outline-none focus:border-blue-500 transition"
            aria-required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Email"
            required
          />

          {/* Password Input (Default dots) */}
          <input
            className="border-2 border-gray-300 rounded-full px-4 py-2 w-64 focus:outline-none focus:border-blue-500 transition"
            type="password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            aria-required
            placeholder="Password"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 bg-black text-white rounded-full px-6 py-2 hover:bg-gray-800 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
