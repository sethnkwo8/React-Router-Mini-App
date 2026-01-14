

export function Navbar() {
    return (
        <nav
            className="w-full flex items-center justify-between h-16 shadow-sm sticky top-0 bg-white dark:text-black px-6 md:px-12">
            <div className="px-12">
                <p className="text-2xl font-bold">MyBrand</p>
            </div>
            <div className="flex items-center gap-4 ">
                <div className="flex gap-2 items-center">
                    <a className="text-5xl" href="#"><ion-icon name="person-circle-outline"></ion-icon></a>
                    <p className="text-3xl">SethNkwo</p>
                </div>
                <div>
                    <ion-icon className="text-3xl" name="notifications-outline"></ion-icon>
                </div>
            </div>
        </nav>
    )
}
