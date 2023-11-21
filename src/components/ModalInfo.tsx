import { useEffect, useState, MutableRefObject } from 'react';
import { Post } from '../types';



interface ModalInfo {
    modalRef: MutableRefObject<HTMLDivElement | null>;
    post:Post;
    onClick: (value: string) => void;
}

const ModalInfo: React.FC<ModalInfo> = ({ onClick, modalRef, post}) => {

    const [content, setContent] = useState(post.content);
    const [title, setTitle] = useState(post.title);
    const [pubDate, setPubDate] = useState(post.pubDate);
    const [url, setUrl] = useState(post.image_url);
    const [description, setDescription] = useState(post.description);


    const handlerClick = (event: React.ChangeEvent<HTMLInputElement>) => {

        console.log('in child ' + event.currentTarget.id)
        console.log('postText: ' + post.content)

        switch (event?.currentTarget.id) {
            case 'close' || 'close2':
                onClick('close');
                break;
            default:
                break;
        }
    }

    useEffect(() => { setContent(post.content) }, [post.content]);
    useEffect(() => { setTitle(post.title) }, [post.title]);
    useEffect(() => { setPubDate(post.pubDate) }, [post.pubDate]);
    useEffect(() => { setUrl(post.image_url) }, [post.image_url]);
    useEffect(() => { setDescription(post.description) }, [post.description]);


    return <div ref={modalRef}  className=" py-12 bg-transparent transition duration-150 ease-in-out z-10 fixed top-[1%] right-0 bottom-0 left-0" id="modal">
        <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div className="w-full flex justify-start text-gray-600 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 29 25" fill="none">
                        <path d="M13.6489 20.0544C13.3967 20.0544 13.1446 19.9728 12.9554 19.837C12.6402 19.6196 12.4826 19.2663 12.5772 18.913L14.1217 12.1196L13.2707 12.5272C12.7348 12.7717 12.0728 12.6359 11.7576 12.1739C11.4739 11.712 11.6315 11.1413 12.1674 10.8696L15.0989 9.42935C15.4772 9.23913 15.95 9.26631 16.2967 9.4837C16.6435 9.70109 16.8011 10.0815 16.738 10.4348L15.1304 17.5L16.4543 17.0109C17.0217 16.7935 17.6522 17.0109 17.9043 17.5C18.1565 17.9891 17.9043 18.5326 17.337 18.75L14.0902 19.9728C13.9641 20.0272 13.8065 20.0544 13.6489 20.0544ZM16.7696 7.06522C17.0533 6.82065 17.2424 6.46739 17.2424 6.11413C17.2424 5.76087 17.0848 5.40761 16.7696 5.16304C16.4859 4.91848 16.0761 4.75544 15.6663 4.75544C15.2565 4.75544 14.8467 4.8913 14.563 5.16304C14.2793 5.40761 14.0902 5.76087 14.0902 6.11413C14.0902 6.46739 14.2478 6.82065 14.563 7.06522C14.8467 7.30978 15.2565 7.47283 15.6663 7.47283C16.0761 7.47283 16.4859 7.33696 16.7696 7.06522ZM29 12.5C29 5.59783 22.5065 0 14.5 0C6.49348 0 0 5.59783 0 12.5C0 19.4022 6.49348 25 14.5 25C22.5065 25 29 19.4022 29 12.5ZM26.4783 12.5C26.4783 18.2065 21.1196 22.8261 14.5 22.8261C7.88044 22.8261 2.52174 18.2065 2.52174 12.5C2.52174 6.79348 7.88044 2.17391 14.5 2.17391C21.1196 2.17391 26.4783 6.79348 26.4783 12.5Z" fill="black" />
                    </svg>
                </div>
                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">Введіть деталі публікації</h1>
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Назва</label>
                <input onChange={(event) => setTitle(event?.currentTarget.value)} value={title} id="name" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Назва" />
                <label htmlFor="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Опис</label>
                <div className="relative mb-5 mt-2">
                    <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"></path>
                        </svg>
                    </div>
                    <input onChange={(event) => setDescription(event?.currentTarget.value)} value={description} id="email2" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="Опис" />
                </div>
                <label htmlFor="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Посилання на зображення</label>
                <div className="relative mb-5 mt-2">
                    <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"></path>
                        </svg>
                    </div>
                    <input onChange={(event) => setUrl(event?.currentTarget.value)} value={url} id="email2" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="URL" />

                </div>




                <label htmlFor="expiry" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Дата</label>
                <div className="relative mb-5 mt-2">
                    <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x="4" y="5" width="16" height="16" rx="2" />
                            <line x1="16" y1="3" x2="16" y2="7" />
                            <line x1="8" y1="3" x2="8" y2="7" />
                            <line x1="4" y1="11" x2="20" y2="11" />
                            <rect x="8" y="15" width="2" height="2" />
                        </svg>
                    </div>
                    <input onChange={(event) => setPubDate(event?.currentTarget.value)} value={pubDate} id="expiry" className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="MM/YY" />
                </div>
                <label htmlFor="cvc" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Контент</label>
                <div className="relative mb-5 mt-2">
                    <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-info-circle" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <circle cx="12" cy="12" r="9"></circle>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            <polyline points="11 12 12 12 12 16 13 16"></polyline>
                        </svg>
                    </div>
                    <textarea onChange={(event) => setContent(event?.currentTarget.value)}
                        className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-20 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Контент" value={content}></textarea>
                </div>
                <div className="flex items-center justify-start w-full">
                    <button id='submit' className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm" onClick={(event) => handlerClick(event)}>Підтвердити</button>
                    <button id='close2' className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={(event) => handlerClick(event)}>Скасувати</button>
                </div>
                <button id='close' className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal" role="button" onClick={(event) => handlerClick(event)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>
        </div>
    </div>





}
export default ModalInfo;




