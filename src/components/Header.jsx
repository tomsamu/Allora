function Header() {

    return (
        <header className="bg-[#F7F3EB] text-neutral-900 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 min-h-35 px-12 text-center py-5 lg:justify-center lg:relative">
            <h1 className="text-7xl font-bold uppercase font-sans">This is <span class="normal-case italic font-normal font-serif">Allora</span></h1>
            
            <h3 class="text-2xl underline font-sans uppercase font-bold hover:cursor-pointer lg:absolute lg:right-16">Read all</h3>
        </header>
    )
}

export default Header;