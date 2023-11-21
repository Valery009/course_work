import React from 'react';


const About: React.FC = () => {


  return (<section className="relative pt-16 bg-blueGray-50">
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
          <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded-lg bg-orange-500">
            <img alt="..." src="https://defence-ua.com/media/contentimages/02964a408810062a.jpg" className="w-full align-middle rounded-t-lg" />
            <blockquote className="relative p-8 mb-4">

              <h4 className="text-xl font-bold text-white">
                Основним завданням Департаменту є              </h4>
              <p className="text-md font-light mt-2 text-white">
                  здійснення в межах повноважень, передбачених законом, міжнародного співробітництва за воєнно-політичним напрямом з відповідними органами іноземних держав і міжнародними організаціями, координація та контроль організації і здійснення співробітництва за військово-технічним та військовим напрямами в системі Міноборони.

              </p>
            </blockquote>
          </div>
        </div>

        <div className="w-full md:w-6/12 px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
           
              <div className="relative flex flex-col mt-5 min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-wbite p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300">
                    <i className="fas fa-drafting-compass">2</i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold text-black">
                    Про департамент
                  </h6>
                  <p className="mb-4 text-black">
                    Департамент міжнародного оборонного співробітництва Міністерства оборони України (далі — Департамент) є самостійним структурним підрозділом апарату Міністерства оборони України, який призначений для здійснення міжнародного співробітництва за воєнно-політичним напрямом з відповідними органами іноземних держав і міжнародними організаціями з метою зміцнення обороноздатності України, захисту національних інтересів та виконання міжнародних зобов’язань.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300">
                    <i className="fas fa-newspaper">3</i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold text-black">Завдання заступника</h6>
                  <p className="mb-4 text-black">
                    Заступник Міністра оборони України з питань європейської інтеграції спрямовує та координує діяльність Департаменту з питань організації
                    і здійснення міжнародного співробітництва.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-gray-300">
                    <i className="fas fa-file-alt">4</i>
                  </div>
                  <h6 className="text-xl mb-1 font-semibold text-black">                    Структура Департаменту:
                  </h6>
                  <p className="mb-4 text-black">

                    Керівництво;<br />
                    Управління європейської та євроатлантичної інтеграції;<br />
                    Управління регіонального співробітництва;<br />
                    Управління організації міжнародного оборонного співробітництва
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  );

}


export default About;
