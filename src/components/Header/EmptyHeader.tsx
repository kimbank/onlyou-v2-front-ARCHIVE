import Link from "next/link";
import Image from "next/image";
import LogoIcon from "public/icons/logo.svg";

import HeaderRoot from "./HeaderRoot";


export const EmptyHeader = () => {

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
        </header>
      </div>
    </HeaderRoot>
  );
};

export default EmptyHeader;
