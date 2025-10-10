import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://extensive-heddie-michelefamoso-b2708d46.koyeb.app/auth/login", {
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
    <div className="flex justify-center h-dvh  bg-panna ">
      <form
        onSubmit={handleSubmit}
        className=" h-fit px-8 py-6 mt-50   "
      >
        <h1 className=" text-center mb-10 text-2xl font-bold font-kosugi text-gray-extraBold">Login</h1>
        <div className="flex flex-col">
          <label htmlFor="email" className=" ml-4 mb-2 font-kosugi text-gray-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            className="border inset-shadow-sm font-kosugi text-gray-bold pl-4 border-panna-medium/80 bg-panna-medium p-1 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-gray-mediumBold"
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
            className="border inset-shadow-sm font-kosugi text-gray-bold pl-4 border-panna-medium/80 bg-panna-medium p-1 rounded-2xl focus:outline-hidden focus:ring-2 focus:ring-gray-mediumBold"
          />
        </div>
        {Error && (
            <p className="mt-2 text-center font-bold text-red-600 text-shadow-2xs">{error}</p>
        )}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-gray-mediumBold/60 px-10 py-2 rounded-3xl inset-shadow-sm font-bold text-xl text-gray-extraBold hover:bg-gray-mediumBold hover:text-white font-kosugi"
          >
            Accedi
          </button>
        </div>
      </form>
    </div>
  );
};
export default AdminLogin;
