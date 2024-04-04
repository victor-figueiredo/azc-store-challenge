import Image from "next/image";

const Logo = () => {
  return (
    <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
      <Image
        src="/assets/images/logo-full-black.png"
        alt="Logo"
        width={90}
        height={33}
      />
    </div>
  );
};

export default Logo;
