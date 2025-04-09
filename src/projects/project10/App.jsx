import React, { useState } from 'react'

const TabsComponent = () => {

    const tabs = [
        { title: "Overview ", content: "This is a Title section in react component " },
        { title: "Features  ", content: " This product includes awesome features. " },
        { title: "Pricing ", content: "Starts at just ₹299/month! " },
        { title: "Contact", content: "Reach us at info@example.com. " },
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className='h-screen'>
            <div className='h-full container flex justify-center items-center'>
                <div className='w-3xl'>
                    <nav className='bg-gray-200 p-3 rounded flex gap-12 justify-center items-center'>
                        {
                            tabs.map((item, index) => (
                                <button
                                    key={index}
                                    className={`px-4 py-2 text-lg font-medium focus:outline-none transition duration-300 ${activeIndex === index 
                                        ? 'border-b-4 border-blue-600 text-blue-600' 
                                        : 'text-gray-500 hover:text-blue-500'}`}
                                    onClick={()=>setActiveIndex(index)}
                                >
                                    {item.title}
                                </button>
                            ))
                        }
                    </nav>
                    <div className='mt-4 bg-gray-3000 p-3'>
                        {tabs[activeIndex].content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TabsComponent; 