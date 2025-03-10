/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import Hint from "../../components/Hint/Hint";
import Switch from "../../components/Switch/Switch";
import Grid from "../../components/Grid/Grid";
import DisplayCopiableText from "../../components/DisplayCopiableText/DisplayCopiableText";

/* ----- COMPONENT ----- */
const ToolAlphabeticalOrder: React.FC = () => {
    const [text, setText] = useState("");
    const [beforeSort, setBeforeSort] = useState([
        { name: "Lowercase All", value: false, func: (list: string[]) => list.map(line => line.toLowerCase()) },
        { name: "Capitalize First Letter", value: false, func: (list: string[]) => list.map(line => line.charAt(0).toUpperCase() + line.slice(1)) },
    ]);
    const [afterSort, setAfterSort] = useState([
        { name: "Remove Duplicates", value: false, func: (list: string[]) => [...new Set(list)] },
        { name: "Reverse List", value: false, func: (list: string[]) => list.reverse() },
        { name: "Add Line Numbers", value: false, func: (list: string[]) => list.map((line, i) => `${i + 1}. ${line}`) },
    ]);

    const updateOption = (index: number, newValue: boolean, isBefore: boolean) => {
        if (isBefore) {
            setBeforeSort(prev => prev.map((opt, i) => i === index ? { ...opt, value: newValue } : opt));
        } else {
            setAfterSort(prev => prev.map((opt, i) => i === index ? { ...opt, value: newValue } : opt));
        }
    };

    const sortText = (input: string) => {
        let lines = input.split("\n").map(line => line.trim()).filter(line => line.length > 0);
        beforeSort.forEach(option => { if (option.value) lines = option.func(lines); });
        lines.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
        afterSort.forEach(option => { if (option.value) lines = option.func(lines); });
        return lines.join("\n");
    };

    return (
        <div className="w-full min-h-screen flex flex-col p-12 gap-8 justify-center items-center text-center">
            <Hint title="🔤 Alphabetical Order 📖" bigTitle={true}>
                <p className="color-light">
                    Sort words, phrases, or sentences in alphabetical order. Paste your text below and get an instant sorted list!
                </p>
            </Hint>

            <Grid title="Sorting Options" limit={false}>
                {beforeSort.map((option, index) => (
                    <div key={option.name} className="bg-gray-700 flex flex-col gap-2 p-4 rounded-lg shadow-md hover:bg-gray-700 transition justify-end items-center">
                        <h3 className="text-xl font-semibold color-light">{option.name}</h3>
                        <Switch value={option.value} setValue={(b: boolean) => updateOption(index, b, true)} />
                    </div>
                ))}
                {afterSort.map((option, index) => (
                    <div key={option.name} className="bg-gray-700 flex flex-col gap-2 p-4 rounded-lg shadow-md hover:bg-gray-700 transition justify-end items-center">
                        <h3 className="text-xl font-semibold color-light">{option.name}</h3>
                        <Switch value={option.value} setValue={(b: boolean) => updateOption(index, b, false)} />
                    </div>
                ))}
            </Grid>

            <div className="flex flex-col md:flex-row w-full gap-8">
                <textarea
                    className="w-full outline-none color-light p-8 rounded-md bg-gray-600 shadow-lg scrollbar"
                    placeholder="Paste or type your text here (one entry per line)..."
                    onChange={e => setText(e.target.value)}
                    value={text}
                    rows={20}
                ></textarea>

                <DisplayCopiableText text={sortText(text)} rows={20} />
            </div>
        </div>
    );
};

export default ToolAlphabeticalOrder;
