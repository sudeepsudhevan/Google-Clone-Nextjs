import Image from "next/image";
import Link from "next/link";
import { TbGridDots } from 'react-icons/tb';

export default function HomeHeader() {
    return (
        <header className="flex justify-end p-5 text-sm">
            <div className="flex space-x-4 items-center">
                <Link href={"https://mail.google.com"}
                    className="hover:underline">
                    Gmail
                </Link>
                <Link href={"https://image.google.com"}
                    className="hover:underline">
                    Images
                </Link>
                <Image src="https://icon-library.com/images/laboratory-icon/laboratory-icon-5.jpg"
                    alt="Search Lab"
                    width={45} height={35} style={{ height: "auto", width: "auto" }}
                    className="bg-transparent hover:bg-gray-200 rounded-full p-0"
                />
                <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl" />
                <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md 
                hover:brightness-105 hover:shadow-md transition-shadow">Sign in</button>
            </div>
        </header>
    )
}
