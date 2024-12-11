import "./Header.css"

function Header() {
    return (
        <header>
            <div className="header">
                <div className="header__title">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                    <span className="header__text">مرتب سازی بر اساس :</span>
                </div>
                <ul className="header__items">
                    <li><a href="#" className="header__text-link active">همه دوره ها</a></li>
                    <li><a href="#" className="header__text-link">ارزان ترین</a></li>
                    <li><a href="#" className="header__text-link">گران ترین</a></li>
                    <li><a href="#" className="header__text-link">پر مخاطب ها</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header