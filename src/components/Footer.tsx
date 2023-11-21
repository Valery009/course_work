const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto flex flex-wrap">
                <div className="w-full md:w-1/4 lg:w-1/6 mb-8">
                    <h2 className="text-2xl font-bold text-orange-500 mb-4">2020—2023 Інформаційний портал МОУ</h2>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia temporibus totam necessitatibus consectetur dolorem, libero cum at porro eveniet doloremque.</p>
                    <p>© 2023 VITI, Всі права захищені</p>
                </div>
                <div className="w-full md:w-3/4 px-10 lg:w-1/3 mb-8 md:flex">
                    <div className="md:w-1/2">
                        <h4 className="text-xl font-bold text-orange-500 pr-10 mb-4">Меню —</h4>
                        <ul className="pages">
                            <li><a href="#">Lorem, ipsum.</a></li>
                            <li><a href="#">Lorem, ipsum dolor.</a></li>
                            <li><a href="#">Lorem, ipsum.</a></li>
                            <li><a href="#">Lorem ipsum dolor sit amet consectetur.</a></li>
                            <li><a href="#">Рекомендації</a></li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0">
                        <h4 className="text-xl font-bold text-orange-500 mb-4">Посилання</h4>
                        <ul className="list">
                            <li><a href="#">Про нас</a></li>
                            <li><a href="#">Контакти</a></li>
                            <li><a href="#">Умови та положення</a></li>
                            <li><a href="#">Політика конфіденційності</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/6 mb-8">
                    <h4 className="text-xl font-bold text-orange-500 mb-4">Слідкуйте за нами</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">RSS</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/4 mb-8">
                    <h4 className="text-xl font-bold text-orange-500 mb-4">Розсилка</h4>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, iste.</p>
                    <div className="input-group">
                        <input type="text" className="form-input rounded-l-md" placeholder="Пошук..." />
                        <span className="input-group-btn">
                            <button className="btn bg-blue-500 text-white rounded-r-md" type="button">
                                <span className="glyphicon glyphicon-envelope"></span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
