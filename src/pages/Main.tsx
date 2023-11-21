import axios from 'axios';
import Slider from "../components/Slider";
import { getPosts } from '../features/post/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, useEffect, useRef, useState, MutableRefObject } from 'react';
import Pagination from '../components/Pagination';
import LineHead from '../components/LineHead';
import { Post } from '../types';
import ModalInfo from '../components/ModalInfo';

const News = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const posts = useSelector((state: any) => state.post.posts);
    const modalRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const [openModal, setOpenModal] = useState(false);
    const [post, setPost] = useState({});




    useEffect(() => {
        dispatch(getPosts());

    }, [openModal]);


    useEffect(() => {

    },[post])


    const fadeOut = (el: HTMLDivElement | null) => {
        if (el) {
            el.style.opacity = '1';
            (function fade() {
                if ((el.style.opacity = `${parseFloat(el.style.opacity) - 0.1}`) < '0') {
                    el.style.display = 'none';
                } else {
                    requestAnimationFrame(fade);
                }
            })();
        }
    };

    const fadeIn = (el: HTMLDivElement | null, display: string = 'flex') => {
        console.log(el?.id);
        if (el) {
            el.style.opacity = '0';
            el.style.display = display;
            (function fade() {
                let val = parseFloat(el.style.opacity);
                if (!((val += 0.2) > 1)) {
                    el.style.opacity = val.toString();
                    requestAnimationFrame(fade);
                }
            })();
        }
    };

    const modalHandler = (val: boolean) => {
        if (modalRef.current) {
            if (val) {

                fadeIn(modalRef.current);
            } else {
                fadeOut(modalRef.current);
            }
        }
        setOpenModal(!openModal);

        console.log(openModal)
    };


    const handlerClick = (id: string) => {
        console.log('in parent ' + id)
        switch (id) {
            case 'close':
                modalHandler(openModal);
                break;

            default:
                break;
        }
    }


    return (
        <div className="w-full">
            <Slider posts={posts} />

            {/* <h2 classNameName="w-[100%] mb-12 text-3xl font-bold" ref={news}>Всі новини</h2> */}

            <div className='flex flex-col flex-wrap w-[100%] md:w-[100%] text-black '>
                <LineHead text='Всі новини' color="0000" />

                <div className="flex flex-col items-center">
                    {posts.map((post: Post, idx: number) => (
                        <div
                            className="relative flex w-full flex-col rounded-[10px] bg-white bg-clip-border shadow-md shadow-[#F3F3F3] dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none"
                            key={idx}
                        >
                            <div className="!z-5 relative flex h-full w-full flex-col rounded-[20px] bg-white bg-clip-border p-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none">
                                <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                                    <div className="flex items-center">
                                        <div className="">
                                            <img
                                                className="h-[200px] w-[200px] rounded-lg"
                                                src={post.image_url}
                                                alt={`Post ${idx + 1}`}
                                            />
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-base font-medium text-navy-700 dark:text-white">
                                                {post.title}
                                            </p>
                                            <p className="mt-2 text-sm text-gray-600">
                                                {post.description} <br />
                                                <a
                                                    className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                                                    href={post.link}
                                                >
                                                    Дивитися деталі
                                                </a><br />
                                                <a
                                                    className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white"
                                                    onClick={() => { event?.preventDefault(); setPost(post); setOpenModal(true); modalHandler(openModal); }}
                                                >
                                                    Читати більше
                                                </a>

                                            </p>
                                        </div>
                                    </div>
                                    <div className="mr-4 flex items-center justify-center text-gray-600 dark:text-white">
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
                                </div>
                            </div>


                        </div>

                    ))}
                    <ModalInfo onClick={handlerClick} modalRef={modalRef} post={post}  />

                    <Pagination />

                </div>


            </div>


        </div>
    )
}

export default News;
