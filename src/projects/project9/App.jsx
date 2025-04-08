import { useEffect, useState } from "react";
import React from "react";
const ImageCarousel = () => {

    const [count, setCount] = useState(0);
    const[results, setResults] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products`)
        .then((result)=> result.json())
        .then((data)=>setResults(data));
    },[]);

    useEffect(()=>{
        const id = setInterval(()=>{
            setCount((prev)=> prev < results.length - 1 ? prev + 1 : 0)
        },2000)

        return ()=>clearInterval(id);
    },[results])

    const handlePrev = ()=>{
        setCount((prev)=>(prev < results.length - 1 ?  prev + 1 : 0));
        
        console.log(count)
    }

    const handleNext = ()=>{
        setCount((prev)=>(prev > 0 ? prev - 1 : results.length - 1))
        console.log(count);
    }

    return (
        <section className="h-screen flex items-center justify-content-center bg-gray-900 " >
            <div className="container">
                <div className="grid grid-cols-3 gap-4 items-center text-white text-center " >
                    <button onClick={handlePrev}>
                        <i className="ri-arrow-left-s-line text-5xl"></i>
                    </button>

                    {
                        results.length > 0 && (
                            <img 
                                src={results[count].image} 
                                alt="carousel" 
                                className="w-64 h-64 object-contain mx-auto "
                            />
                        )
                    }

                    <button onClick={handleNext}>
                        <i className="ri-arrow-right-s-line text-5xl"></i>
                    </button>

                </div>
            </div>
        </section>
    )
}

export default ImageCarousel; 

