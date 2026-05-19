import { useContext } from "react";
import CertificatesContext from "./CertificatesContext";

const useCertificates = () => {
  return useContext(CertificatesContext);
};

export default useCertificates;
