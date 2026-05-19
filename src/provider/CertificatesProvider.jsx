import { useState, useEffect, useCallback } from "react";
import CertificatesContext from "../context/CertificatesContext";
import { fetchCertificates, createCertificate, updateCertificateApi, deleteCertificateApi } from "../services/api";
import toast from "react-hot-toast";

const CertificatesProvider = ({ children }) => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadCertificates = useCallback(async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const res = await fetchCertificates();
      setCertificates(res.data || []);
    } catch (err) {
      console.error("Failed to load certificates from backend:", err);
      toast.error("Failed to load certificates from server");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadCertificates(); }, [loadCertificates]);

  const addCertificate = async (certificate) => {
    try {
      const fd = new FormData();
      fd.append("certificateTitle", certificate.title || certificate.certificateTitle || "");
      fd.append("issuingOrganization", certificate.organization || certificate.issuingOrganization || "");
      fd.append("issueDate", certificate.issueDate || "");
      if (certificate.certificateId) fd.append("certificateId", certificate.certificateId);
      if (certificate.verificationUrl) fd.append("verificationUrl", certificate.verificationUrl);
      if (certificate.category) fd.append("category", certificate.category);
      if (certificate.verified !== undefined) fd.append("verified", certificate.verified);
      if (certificate.image instanceof File) fd.append("certificateFile", certificate.image);

      const res = await createCertificate(fd);
      setCertificates((prev) => [...prev, res.data]);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to add certificate");
    }
  };

  const deleteCertificate = async (id) => {
    try {
      await deleteCertificateApi(id);
      setCertificates((prev) => prev.filter((c) => (c._id || c.id)?.toString() !== id?.toString()));
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to delete certificate");
    }
  };

  const updateCertificate = async (updatedCertificate) => {
    const id = updatedCertificate._id || updatedCertificate.id;
    try {
      const fd = new FormData();
      if (updatedCertificate.title || updatedCertificate.certificateTitle) fd.append("certificateTitle", updatedCertificate.title || updatedCertificate.certificateTitle);
      if (updatedCertificate.organization || updatedCertificate.issuingOrganization) fd.append("issuingOrganization", updatedCertificate.organization || updatedCertificate.issuingOrganization);
      if (updatedCertificate.issueDate) fd.append("issueDate", updatedCertificate.issueDate);
      if (updatedCertificate.category) fd.append("category", updatedCertificate.category);
      if (updatedCertificate.verified !== undefined) fd.append("verified", updatedCertificate.verified);
      if (updatedCertificate.image instanceof File) fd.append("certificateFile", updatedCertificate.image);

      const res = await updateCertificateApi(id, fd);
      setCertificates((prev) => prev.map((c) => ((c._id || c.id)?.toString() === id?.toString() ? res.data : c)));
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to update certificate");
    }
  };

  return (
    <CertificatesContext.Provider value={{ certificates, loading, addCertificate, deleteCertificate, updateCertificate, loadCertificates }}>
      {children}
    </CertificatesContext.Provider>
  );
};

export default CertificatesProvider;
