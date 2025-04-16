
import React, { useState } from 'react'
import Button from './button/Button'
import './style.css';

const TabList = ({ tabs, defaultSelection = 3, onChange = () => { } }) => {

    const [selectedIndex, setSelectedIndex] = useState(defaultSelection);

    function handleTabChange(index) {
        setSelectedIndex(index);
        onChange(index);
    }

    const Component = tabs[selectedIndex].Component;

    return (
        <div className=' h-screen bg-[#0F1214] flex items-center justify-center'>
            <div className='bg-[#101316] p-6 rounded border border-gray-600 '>
                <div role='tablist' className='border-b border-gray-600 py-3'>
                    {
                        tabs.map((tab, index) => {
                            return <Button
                                onClick={() => handleTabChange(index)}
                                label={tab.label}
                                key={tab.id}
                                role="tab"
                                aria-selected={index === selectedIndex}
                                data-selected={index === selectedIndex}
                            />
                        })
                    }
                </div>
                <div role='tabpanel' className='mt-5'>
                    {
                        <Component />
                    }
                </div>
            </div>
        </div>
    )
}

export default TabList;

