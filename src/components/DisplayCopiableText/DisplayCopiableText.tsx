/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import { Check, ClipboardCopy } from "lucide-react";

/* ----- PROPS ----- */
interface Props {
    text: string
    rows: number
    className?: string;
};

/* ----- COMPONENT ----- */
const DisplayCopiableText: React.FC<Props> = ({ text, rows, className }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        });
    };

    return (
        <div className="relative w-full">
            <textarea
                className={`w-full outline-none color-light p-8 rounded-md bg-gray-800 shadow-lg scrollbar ${className}`}
                readOnly
                rows={rows}
                value={text}
            ></textarea>

            {
                text.length > 0 &&
                    <button
                        onClick={handleCopy}
                        className={`absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-md transition ${copied ? "" : "animate-bounce"}`}
                    >
                        {copied ? <Check /> : <ClipboardCopy />}
                    </button>
            }
        </div>
    );
};

export default DisplayCopiableText;
