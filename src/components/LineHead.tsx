import React, { useEffect } from 'react';

interface LineProps {
    text: string;
    color:string;
}

const LineHead: React.FC<LineProps> = ({ text,color= '#00FF00' }) => {
    return (
        <div className="flex items-center mb-10">
            <div className={`border-t border-4 border-black flex-grow`}></div>
            <div className={`px-3 text-black font-bold text-2xl`}>{text}</div>
            <div className={`border-t border-4 border-black flex-grow`}></div>
        </div>

    );
};

export default LineHead;
