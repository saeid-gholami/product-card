import "./App.css"
import Header from "./Header/Header";
import Main from "./Main/Mian";


function App() {
    return (
        <div className="container">
            <Header />
            <div className="Card__wrapper">
                <Main
                    image="images/Three_1-1-768x432.webp"
                    name="آموزش انیمیشن سازی برای فرانت‌اند با GSAP و Three.js"
                    desc="دوره Three.js سبزلرن به شما یاد می‌دهد چطور گرافیک‌های سه‌بعدی جذاب با استفاده از این..."
                    teacher="سعید غلامی سلطانمرادی"
                    score="4.0"
                    registers="68"
                    price="1،400،000"
                />
                <Main
                    image="images/Leaf-1-768x432.webp"
                    name="نمایش نقشه‌های تعاملی با Leaflet.js"
                    desc="دوره Leaflet.JS به شما یاد می‌دهد چگونه نقشه‌های تعاملی سبک و جذاب بسازید. این ..."
                    teacher="مهرشاد براتی"
                    score="5.0"
                    registers="44"
                    price="900،000"
                />
                <Main
                    image="images/webpack-1-768x432.webp"
                    name="آموزش جامع webpack"
                    desc="فرقی نمی‌کند که شما یک برنامه نویس تازه کار و یا حرفه‌ای باشید؛ در هرصورت به وب‌پک نیاز خواهید داشت ..."
                    teacher="آرمین هوشمند"
                    score="5.0"
                    registers="172"
                    price="850،000"
                />
                <Main
                    image="images/1402-10-20-17.40.16_11zon-768x432.webp"
                    name="توسعه کتابخانه با جاوااسکریپت"
                    desc="توسعه کتابخانه، نمونه کاری قوی برای رزومه شما است و این دوره آموزشی یادگیری چنین ..."
                    teacher="مهرشاد براتی"
                    score="5.0"
                    registers="97"
                    price="1،850،000"
                />
                <Main
                    image="images/webextn-768x432.webp"
                    name="توسعه افزونه مرورگر با جاوااسکریپت"
                    desc="ما در این دوره، توسعه افزونه های مرورگر رو با پیاده سازی پروژه های کاربردی با دانش فرانت ..."
                    teacher="مهرشاد براتی"
                    score="5.0"
                    registers="127"
                    price="1،490،000"
                />
                <Main
                    image="images/Course-thumbnail-Dashboard2-1-768x432.webp"
                    name="پیاده سازی داشبورد های حرفه ای با CSS و JS"
                    desc="این دوره فرصتی فوق‌العاده برای ارتقاء مهارت‌های فرانت اند شماست. با یادگیری از ..."
                    teacher="مهرشاد براتی"
                    score="5.0"
                    registers="479"
                    price="1،400،000"
                />
                <Main
                    image="images/ezgif.com-jpg-to-webp-converted-32-1-768x432.webp"
                    name="مینی پروژه های تخصصی با Html، Css + دیزاین اختصاصی"
                    desc="عنوان دوره گویای همه چی هست اما نیازه برخی موارد گفته بشه تا بتونید با دید بهتری تو این ..."
                    teacher="حمیدرضا عبادی"
                    score="5.0"
                    registers="753"
                    price="720،000"
                />
                <Main
                    image="images/ezgif.com-jpg-to-webp-converted-30-1-768x432.webp"
                    name="آموزش جامع و پروژه محور Tailwind Css + دیزاین فروشگاه قهوه"
                    desc="tailwind css یک فریمورک Utility First هست، این فریمورک متشکل از یکسری کلاس های ..."
                    teacher="حمیدرضا عبادی"
                    score="5.0"
                    registers="1841"
                    price="899،000"
                />
            </div>
        </div>
    )
}

export default App;