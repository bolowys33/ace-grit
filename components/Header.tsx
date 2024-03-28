
import Link from "next/link";
import { links } from "@/constants/links";


const Header = () => {
    return ( 
        <header className="bg-white shadow text-emerald-950">
            <nav className="container mx-auto flex justify-between items-center px-4 py-10">
                <div>
                    logo
                </div>
                <ul className="flex space-x-8 items-center" >
                    {links.map(link => (
                        <li key={link.path}>
                            <Link href={link.path} >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                <li>
                <button className="bg-red-600 text-white py-2 px-4 rounded uppercase">
                    request an appointment
                </button>
                </li>
                </ul>
            </nav>
        </header>
     );
}
 
export default Header;