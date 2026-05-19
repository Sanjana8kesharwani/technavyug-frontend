import { useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import toast from "react-hot-toast";
import { verifyCertificateApi } from "../../services/api";

const Verify = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!input) {
      toast.error("Please enter Certificate ID");
      return;
    }

    try {
      setLoading(true);
      setResult(null);
      
      // Use the centralized api service
      const res = await verifyCertificateApi(input);
      setResult(res.data);
      toast.success("Certificate Verified");
    } catch (err) {
      setResult("invalid");
      toast.error(err.message || "Invalid Certificate");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Verify Certificate
        </h1>

        <input
          type="text"
          placeholder="Enter Certificate ID"
          className="px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white mb-4 w-80 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleVerify}
          disabled={loading}
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-xl hover:scale-105 transition shadow-lg text-white"
        >
          {" "}
          {loading ? "Verifying..." : "Verify"}{" "}
        </button>

        <div className="mt-8 text-center">
          {result === "invalid" && (
            <p className="text-red-500 font-semibold">Invalid Certificate</p>
          )}

          {result && result !== "invalid" && (
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 shadow-lg">
              <p className="text-green-400 font-semibold mb-2">
                Valid Certificate
              </p>

              <p className="text-white font-bold text-lg">{result.certificateTitle || result.name}</p>

              <p className="text-gray-400">{result.issuingOrganization || result.course}</p>

              <p className="text-sm text-gray-500 mt-2">ID: {result.certificateId || result.id}</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Verify;
