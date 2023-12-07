import { useState } from 'react'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      // Call the login function from context
      console.log(username, password)

    };
  
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-[#d8c3a5] p-8 rounded-md shadow-md text-center max-w-sm py-20">
          <h2 className="text-3xl font-bold mb-4 text-gray-700">Sign in</h2>
          <label className="text-left block mb-2 text-gray-700">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="mb-4 p-2 border rounded w-full bg-[#eae7dc] text-gray-700"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="text-left block mb-2 text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="mb-4 p-2 border rounded w-full bg-[#eae7dc] text-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-[#e98074] text-white px-8 py-2 font-bold rounded text-gray-700 hover:bg-[#e85a4f] transition ease-out 500ms rounded-lg" onClick={handleLogin}>
            Log In
          </button>
        </div>
      </div>
    )
  }
export default LoginForm