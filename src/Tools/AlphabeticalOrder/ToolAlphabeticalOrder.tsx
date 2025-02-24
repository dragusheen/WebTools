/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import Hint from "../../components/Hint/Hint";

const ToolAlphabeticalOrder: React.FC = () => {
    const [text, setText] = useState("");
    const [isReverse, setIsReverse] = useState(false);
    const [removeDuplicates, setRemoveDuplicates] = useState(true);

    const sortText = (input: string) => {
        let lines = input.split("\n").map(line => line.trim()).filter(line => line.length > 0);
        if (removeDuplicates) lines = [...new Set(lines)];
        lines.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
        if (isReverse) lines.reverse();
        return lines.join("\n");
    };

    return (
        <div className="w-full h-screen flex flex-col p-12 gap-8 justify-center items-center text-center">
            <Hint title="🔤 Alphabetical Order 📖" bigTitle={true}>
                <p className="color-light">
                    Sort words, phrases, or sentences in alphabetical order. Paste your text below and get an instant sorted list!
                </p>
            </Hint>
            <textarea
                className="w-full outline-none color-light p-8 rounded-md bg-gray-600 shadow-lg scrollbar"
                placeholder="Paste or type your text here (one entry per line)..."
                onChange={e => setText(e.target.value)}
                value={text}
                rows={10}
            ></textarea>

            <div className="flex gap-4">
                <button
                    className={`px-6 py-3 rounded-md shadow-md transition ${isReverse ? "bg-red-500" : "bg-blue-500"} hover:opacity-80`}
                    onClick={() => setIsReverse(!isReverse)}
                >
                    {isReverse ? "Sort: Z → A" : "Sort: A → Z"}
                </button>

                <button
                    className={`px-6 py-3 rounded-md shadow-md transition ${removeDuplicates ? "bg-green-500" : "bg-gray-500"} hover:opacity-80`}
                    onClick={() => setRemoveDuplicates(!removeDuplicates)}
                >
                    {removeDuplicates ? "Remove Duplicates" : "Keep Duplicates"}
                </button>
            </div>

            <textarea
                className="w-full outline-none color-light p-8 rounded-md bg-gray-800 shadow-lg scrollbar"
                readOnly
                rows={10}
                value={sortText(text)}
            ></textarea>
        </div>
    );
};

export default ToolAlphabeticalOrder;
