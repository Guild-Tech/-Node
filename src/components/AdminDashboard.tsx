import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:4000/admin/dashboard", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          setMessage(data.message);
        } else {
          navigate("/admin/login");
        }
      } catch (error) {
        navigate("/admin/login");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = async () => {
    await fetch("http://localhost:4000/admin/logout", {
      method: "POST",
      credentials: "include",
    });
    navigate("/admin/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 animate-fade-in">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg text-center animate-scale-in">
        <h1 className="text-3xl font-bold text-gray-700">{message}</h1>
        <p className="text-gray-500 mt-2">Welcome to the Admin Dashboard!</p>

        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
