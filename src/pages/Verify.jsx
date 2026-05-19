import { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { Html5QrcodeScanner } from "html5-qrcode";
import toast from "react-hot-toast";
import { verifyCertificateApi } from "../services/api";

export default function Verify() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scanOpen, setScanOpen] = useState(false);

  // VERIFY — calls backend API
  const handleVerify = async (id = certId) => {
    if (!id) {
      toast.error("Please enter Certificate ID");
      return;
    }

    setLoading(true);
    try {
      const res = await verifyCertificateApi(id);
      if (res.data?.valid) {
        setResult({
          valid: true,
          name: res.data.certificate?.user?.fullName || "N/A",
          course: res.data.certificate?.title || "N/A",
          date: res.data.certificate?.issueDate ? new Date(res.data.certificate.issueDate).getFullYear().toString() : "N/A",
          issuer: res.data.certificate?.organization || "Technavyug",
          certificateUrl: res.data.certificate?.preview || "",
        });
        toast.success("Certificate Verified Successfully");
      } else {
        setResult({ valid: false });
        toast.error("Invalid Certificate ID");
      }
    } catch {
      setResult({ valid: false });
      toast.error("Invalid Certificate ID");
    }
    setLoading(false);
  };

  // QR SCANNER
  useEffect(() => {
    if (scanOpen) {
      const scanner = new Html5QrcodeScanner(
        "qr-reader",
        { fps: 10, qrbox: 250 },
        false,
      );

      scanner.render(
        (decodedText) => {
          toast.success("QR scanned successfully");
          setCertId(decodedText);
          setScanOpen(false);
          handleVerify(decodedText);
          scanner.clear();
        },
        () => {},
      );

      return () => scanner.clear().catch(() => {});
    }
  }, [scanOpen]);

  // DOWNLOAD
  const handleDownload = () => {
    if (!result?.certificateUrl) return;
    const link = document.createElement("a");
    link.href = result.certificateUrl;
    link.download = "certificate.jpg";
    link.click();
  };

  return (
    <MainLayout>
      <div className="pt-28 px-6 max-w-5xl mx-auto pb-16">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Verify <span className="text-cyan-500">Certificate</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Enter Certificate ID or scan QR to validate authenticity
          </p>
        </div>

        {/* INPUT */}
        <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter Certificate ID..."
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-cyan-400 outline-none"
            />

            <button
              onClick={() => handleVerify()}
              className="bg-cyan-500 text-white px-6 rounded-xl font-semibold hover:bg-cyan-600 transition"
            >
              {loading ? "Verifying..." : "Verify"}
            </button>

            <button
              onClick={() => setScanOpen(!scanOpen)}
              className="border border-gray-200 px-5 rounded-xl text-gray-600 hover:bg-gray-50"
            >
              {scanOpen ? "Close Scanner" : "Scan QR"}
            </button>
          </div>

          {/* QR */}
          {scanOpen && (
            <div className="mt-3 border rounded-xl p-3">
              <div id="qr-reader"></div>
            </div>
          )}
        </div>

        {/* RESULT */}
        {result && (
          <div className="mt-10">
            {/*  INVALID */}
            {!result.valid ? (
              <div className="bg-white border border-red-100 rounded-2xl p-6 text-center shadow-sm">
                <p className="text-red-500 font-semibold text-lg">
                  ❌ Invalid Certificate
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  No record found. Please check your ID.
                </p>
              </div>
            ) : (
              <div className="bg-white border border-gray-100 rounded-2xl shadow-md overflow-hidden">
                {/* STATUS */}
                <div className="bg-green-50 text-green-600 text-center py-3 font-semibold text-sm">
                  ✔ Certificate Verified Successfully
                </div>

                <div className="p-6 grid md:grid-cols-2 gap-6 items-start">
                  {/* LEFT DETAILS */}
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-gray-400">Name</p>
                      <p className="font-semibold text-gray-900">
                        {result.name}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Course</p>
                      <p className="font-semibold text-gray-900">
                        {result.course}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Issued By</p>
                      <p className="font-semibold text-gray-900">
                        {result.issuer}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">Date</p>
                      <p className="font-semibold text-gray-900">
                        {result.date}
                      </p>
                    </div>

                    {/* DOWNLOAD */}
                    <button
                      onClick={handleDownload}
                      className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2.5 rounded-xl font-semibold shadow-md hover:scale-[1.02] transition"
                    >
                      ⬇ Download Certificate
                    </button>

                    {/* TRUST TEXT */}
                    <p className="text-[11px] text-gray-400 text-center">
                      Verified and issued by Technavyug
                    </p>
                  </div>

                  {/* RIGHT PREVIEW */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-2">
                      Certificate Preview
                    </p>

                    <img
                      src={result.certificateUrl}
                      alt="certificate"
                      className="rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
