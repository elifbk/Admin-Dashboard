import Image from "next/image";
import Input from "./Input";
import { BiSolidBellRing } from "react-icons/bi";
import man from "@/assets/images/man.png";

const Header = () => {
  return (
    <div className="flex justify-between border p-2">
      <Input />

      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer" />

        <div className="flex gap-3">
          <Image
            width={40}
            height={40}
            className="object-contain"
            src={man}
            alt="user"
          />

          <div>
            <p className="font-semibold">Elif Külekçi</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
