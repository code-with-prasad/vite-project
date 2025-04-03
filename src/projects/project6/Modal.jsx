import React, { useState } from 'react';

const Modal = ({ children }) => {
    const [toggleModal, setToggleModal] = useState(false);

    return (
        <section className='h-screen flex justify-center items-center'>
            {/* Open Modal Button */}
            <button
                onClick={() => setToggleModal(true)}
                className='bg-gray-500 text-white px-4 py-2 rounded cursor-pointer'>
                Open Modal
            </button>

            {/* Modal & Overlay */}
            {toggleModal && (
                <div
                    className='fixed inset-0 flex justify-center items-center bg-black'
                    onClick={() => setToggleModal(false)}
                >
                    {/* Modal Content */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className='relative max-w-sm w-full bg-red-500 p-6 rounded-lg shadow-lg transition transform scale-100 opacity-100'
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setToggleModal(false)}
                            className='absolute top-2 right-2 text-2xl text-white cursor-pointer'
                        >
                            ✖
                        </button>

                        {/* Dynamic Content */}
                        <div className='mt-4 text-white'>{children}</div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Modal;
