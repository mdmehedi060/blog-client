import { useEffect, useState } from "react";
import NewsLetterCard from "./NewsLetterCard";


const NewsLetter = () => {
    const [letters,setLetters]=useState();

    useEffect(()=>{
        fetch('newsletter.json')
        .then(res=>res.json())
        .then(data=>setLetters(data))
    },[])
    return (
        <div className="mt-4 mb-4">
            <h2 className="text-6xl text-center font-bold">News Letter Section </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-6'>
                {
                    letters?.map(letter=><NewsLetterCard key={letter.id} letter={letter}></NewsLetterCard>)
                }
            </div>
        </div>
    );
};

export default NewsLetter;