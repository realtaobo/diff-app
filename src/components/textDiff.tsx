'use client'

import { useState } from 'react';

const TextDiff = () => {
    const [leftText, setLeftText] = useState('');
    const [rightText, setRightText] = useState('');

    return (
        <div className="flex h-screen">
            <div className="w-1/2 p-4">
                <textarea
                    className="w-full h-full p-2 border-2 border-gray-300 rounded-md"
                    placeholder="Original Text"
                    value={leftText}
                    onChange={(e) => setLeftText(e.target.value)}
                />
            </div>

            <div className="w-1/2 p-4">
                <textarea
                    className="w-full h-full p-2 border-2 border-gray-300 rounded-md"
                    placeholder="Changed Text"
                    value={rightText}
                    onChange={(e) => setRightText(e.target.value)}
                />
            </div>
        </div>
    );
};

export default TextDiff;
