import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel login");
        }
        return response.text();
      })
      .then((response) => {
        console.log("Token ricevuto");
        localStorage.setItem("token", response);
        setError("");
        navigate("/Admin");
      })
      .catch((error) => {
        console.error("Errore :", error.message);
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center h-dvh  bg-gray-50 ">
      <form
        onSubmit={handleSubmit}
        className="bg-purple-200 h-fit px-8 py-6 mt-50 rounded-2xl  shadow-xl shadow-purple-50 border-2 border-purple-300"
      >
        <h1 className=" text-center mb-10 text-xl font-bold">Login</h1>
        <div className="flex flex-col">
          <label htmlFor="email" className=" ml-4 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="border inset-shadow-sm   border-purple-100 bg-purple-100/80 p-1 rounded-2xl focus:outline-hidden focus:border-2 focus:border-purple-400"
          />
        </div>
        <div className="flex flex-col mt-6">
          <label htmlFor="password" className=" ml-4 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            className="border inset-shadow-sm   border-purple-100 bg-purple-100/80 p-1 rounded-2xl focus:outline-hidden focus:border-2 focus:border-purple-400"
          />
        </div>
        {Error && (
            <p className="mt-2 text-center font-bold text-red-600 text-shadow-2xs">{error}</p>
        )}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-purple-300 px-8 py-2 rounded-2xl inset-shadow-sm font-black hover:bg-purple-600 hover:text-white"
          >
            Accedi
          </button>
        </div>
      </form>
    </div>
  );
};
export default AdminLogin;
