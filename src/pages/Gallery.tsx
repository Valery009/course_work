import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, useEffect, useState } from 'react';
import { getPosts } from '../features/post/postSlice';
import { Post } from '../types';
const Gallery = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const posts = useSelector((state: any) => state.post.posts);
    const [pic, setPic] = useState(true);
    useEffect(() => {
        dispatch(getPosts());

    }, []);



    // return <div classNameNameName="text-black container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
    //     <div classNameNameName="-m-1 flex flex-wrap md:-m-2">
    //         {posts.map((post: Post, idx: number) => (
    //             <div classNameNameName="flex w-1/3 flex-wrap" key={idx}>
    //                 <div classNameNameName="w-full p-1 md:p-2">
    //                     <img
    //                          alt={'Картинка відсутня, джерело '+post.source_id}
    //                         classNameNameName="block h-full w-full rounded-lg object-cover object-center"
    //                         src={post.image_url}
    //                     />
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // </div>
    return <section className="text-gray-600 body-font ml-[20%]">
        <div className="container py-24  mx-auto flex flex-wrap">

            <div className="flex flex-wrap md:-m-2 -m-1">
                {posts.map((post: Post, idx: number) => (
                    <div key={idx} className="flex flex-wrap w-1/2">

                        <div key={idx} className={`md:p-2 p-1 w-${idx === 2 || idx===0 ? 'full' : '1/2'}`}>
                            <img alt={`gallery-${idx}-${idx}`} className="w-full h-full object-cover object-center block" src={post.image_url} />
                        </div>

                    </div>
                ))}
            </div>

        </div>
    </section>



}
export default Gallery;




