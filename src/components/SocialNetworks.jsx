import React from "react";

const SocialNetworks = ({ src, alt, loading = "lazy" }) => {
  return <img className="images" src={src} alt={alt} loading={loading} />;
};

export default SocialNetworks;
