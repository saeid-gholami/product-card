import "./Main.css";

function Main() {
    return (
        <main>
            <div className="card">
                <img src="public/images/Three_1-1-768x432.webp" alt="card image" className="card__img" />
                <div className="card_content">
                    <h2 className="card__title">
                        آموزش انیمیشن سازی برای فرانت‌اند با GSAP و Three.js
                    </h2>
                    <p className="card__text">
                        دوره Three.js سبزلرن به شما یاد می‌دهد چطور گرافیک‌های سه‌بعدی جذاب با استفاده از این ...
                    </p>
                    <div className="card__infos">
                        <div className="card__teacher">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                            <span className="card__teacher-teacher">سعید غلامی سلطانمرادی</span>
                        </div>
                        <div className="card__score">
                            <p className="card__score-text">5.0</p>
                            <img src="public/images/star.svg" alt="score image" />
                        </div>
                    </div>
                    <div className="card__registers-price">
                        <div className="card_registers">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                            </svg>
                            <span className="card__registers-count">68</span>
                        </div>
                        <div className="card_registers-text">
                            <span>1،400،000</span>
                            <span>تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main