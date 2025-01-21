import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

import dayjs from "dayjs";

export default function Dashboard() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await fetch("http://localhost:8080/logs");
        if (!response.ok) {
          throw new Error("Failed to fetch logs");
        }
        const data = await response.json();
        setLogs(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  if (loading) return <div>Loading logs...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Navbar />

      <div className="p-8 space-y-8">
        <h1 className="text-3xl font-bold mb-6">Logs Dashboard</h1>
        {logs.length === 0 ? (
          <div>No logs available.</div>
        ) : (
          <table className="table-auto border-collapse w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="px-4 py-2 border">Timestamp</th>
                <th className="px-4 py-2 border">User IP</th>
                <th className="px-4 py-2 border">Question</th>
                <th className="px-4 py-2 border">Full Response</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr key={logs.userIP} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">
                    {dayjs(log.timestamp).format("DD-MM-YYYY HH:mm:ss")}
                  </td>
                  <td className="px-4 py-2 border">
                    {log.userIP || "Unknown"}
                  </td>
                  <td className="px-4 py-2 border">{log.question}</td>
                  <td className="px-4 py-2 border">{log.fullResponse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <Footer />
    </div>
  );
}
