
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from "../ui/dropdown-menu"
import { Button } from "../ui/button"

import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet"
import { Link, useNavigate } from "react-router-dom"
import { Hospital, LogIn, LogOut } from "lucide-react"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/slicers/userSlice"
import { AppDispatch } from "../../redux/store"

export default function Navbar() {

    const dispatch: AppDispatch = useDispatch()
    const user = JSON.parse(localStorage.getItem("user") || "null");


    const navigator = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950 shadow-md">
            <div className="flex justify-between items-center h-16 ">
                <Link to="/" className="flex items-center ml-10 " >
                    <Hospital className="h-10 w-10" />

                </Link>
                <nav className="hidden  gap-8 text-sm font-medium md:flex ml-12">
                    <Link
                        to="/doctors"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"

                    >
                        Doctors
                    </Link>
                    <Link
                        to="/appointments"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                        Appointments
                    </Link>
                    <Link
                        to="#"
                        className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    >
                        Contact
                    </Link>
                </nav>
                <div className="flex ">
                    {
                        user?.user?.email ? (
                            <div className="grid grid-cols-2 gap-2">
                                <Button onClick={() => navigator('/patient')} variant="secondary" className="flex items-center">
                                    <img src="https://static.thenounproject.com/png/516749-200.png" className="w-8 h-8" />
                                </Button>
                                <Button onClick={() => handleLogout()} variant="destructive">
                                    Sign Out <LogOut />
                                </Button>
                            </div>
                        ) : (
                            <Button onClick={() => navigator('/signIn')}>
                                Sign In <LogIn />
                            </Button>
                        )
                    }
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[300px] p-4">

                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full md:hidden">
                                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                                <span className="sr-only">Toggle navigation menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="md:hidden">
                            <div className="grid gap-4 p-4">
                                <Link
                                    to="#"
                                    className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"

                                >
                                    Home
                                </Link>
                                <Link
                                    to="#"
                                    className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"

                                >
                                    About
                                </Link>
                                <Link
                                    to="#"
                                    className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"

                                >
                                    Services
                                </Link>
                                <Link
                                    to="#"
                                    className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"

                                >
                                    Contact
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}


