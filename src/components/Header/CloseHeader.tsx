import Link from "next/link";
import Image from "next/image";

import LogoIcon from "public/icons/logo.svg";
import CloseIcon from "@mui/icons-material/CloseRounded";

import HeaderRoot from "./HeaderRoot";


export const CloseHeader = ({ href = "/" }: { href: string }) => {

  return (
    <HeaderRoot>
      <div className="header-container">
        <header className="header">
          <Link href="/">
            <Image
              src={LogoIcon}
              alt="logo"
              width={24}
              height={24}
              priority={true}
              style={{ verticalAlign: "middle" }}
            />
          </Link>
          <Link href={href} style={{ fontSize: "28px" }}>
            <CloseIcon fontSize="inherit" />
          </Link>
        </header>
      </div>
    </HeaderRoot>
  );
};

export default CloseHeader;
