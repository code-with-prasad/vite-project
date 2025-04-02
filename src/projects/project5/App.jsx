import React, { useState } from 'react'

const Accordion = () => {

    const accordionData = [
        {
            id: 1,
            question: 'What is JavaScript',
            answer: 'JavaScript is a Dynamic Computer Programming language'
        },
        {
            id: 2,
            question: 'What is React Js',
            answer: "React JS is a JavaScript Library it is used to build interactive User Interface"
        },
        {
            id: 3,
            question: 'What is HTML',
            answer: "HTML stands for Hyper Text Markup Language it is Used to create websites "
        },
        {
            id: 4,
            question: 'What is CSS',
            answer: "CSS stands for Case Casding Style Sheet  it is used to styleing "
        },
        {
            id: 5,
            question: 'What is The Variable ',
            answer: "Variable is a Memory Location where Store the data "
        },
    ]

    const [show, setShow] = useState(-1);

    const handleAccordionClick = (id) => {
        setShow(prev => prev === id ? null : id);
    }

    return (
        <section className='bg-[#030712]'>
            <div className='h-screen container flex justify-center items-center  '>
                <div className='w-4xl bg-[#364153] p-5 rounded '>
                    <h3 className='text-center text-2xl text-white '>Accordion</h3>
                    <div>
                        {
                            accordionData.map((items) => (
                                <div key={items.id} className='my-2' >
                                    <button
                                        onClick={() => handleAccordionClick(items.id)}
                                        className='text-white w-full flex justify-between items-center py-2 px-4 bg-[#202838] rounded-md cursor-pointer hover:bg-gray-600 transition-all duration-300' >
                                        <span>{items.question}</span>
                                        {show === items.id ? <i class="ri-subtract-line"></i> : <i class="ri-add-line"></i>}
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${show === items.id ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0'} `}>
                                        <p className='text-white'>{items.answer}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accordion;

