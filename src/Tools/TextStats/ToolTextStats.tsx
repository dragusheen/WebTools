/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState } from "react";
import Hint from "../../components/Hint/Hint";
import Grid from "../../components/Grid/Grid";


/* ----- COMPONENT ----- */
const ToolTextStats: React.FC = () => {
    const [text, setText] = useState("");
    const [stats] = useState([
        { name: "Characters", value: 0, statFunction: (text: string) => text.replace(/\s/g, "").length },
        { name: "Words", value: 0, statFunction: (text: string) => text.split(/\s+/).length },
        { name: "Sentences", value: 0, statFunction: (text: string) => text.split(/[.!?]+/g).filter(text => text.length > 0).length },
        { name: "Paragraphs", value: 0, statFunction: (text: string) => text.split(/\n+/).length },
        { name: "Reading Time (min)", value: 0, statFunction: (text: string) => {
            return Math.ceil(text.split(/\s+/).length / 200);
        }},
        { name: "Average Word Length", value: 0, statFunction: (text: string) => {
            const words = text.split(/\s+/);
            const avgLength = words.reduce((sum, word) => sum + word.length, 0) / words.length;
            return avgLength.toFixed(3);
        }},
        { name: "Letter Count", value: 0, statFunction: (text: string) => text.replace(/[^a-zA-Z]/g, "").length },
        { name: "Average Sentence Length", value: 0, statFunction: (text: string) => {
            const sentences = text.split(/[.!?]+/g).filter(text => text.length > 0);
            const totalChars = sentences.reduce((sum, sentence) => sum + sentence.replace(/\s/g, "").length, 0);
            const avgChars = sentences.length > 0 ? totalChars / sentences.length : 0;
            return avgChars.toFixed(3);
        }},
        { name: "Unique Words", value: 0, statFunction: (text: string) => new Set(text.toLowerCase().split(/\s+/)).size },
        { name: "Longest Word", value: "", statFunction: (text: string) => text.split(/\s+/).reduce((longest, word) => word.length > longest.length ? word : longest, "") },
        { name: "Longest Sentence", value: "", statFunction: (text: string) => {
            const sentences = text.split(/[.!?]+/g).filter(text => text.length > 0);
            return sentences.reduce((longest, sentence) => sentence.length > longest.length ? sentence : longest, "");
        }},
        { name: "Uppercase Words", value: 0, statFunction: (text: string) => text.split(/\s+/).filter(word => word === word.toUpperCase()).length },
        { name: "Punctuation Count", value: 0, statFunction: (text: string) => (text.match(/[.,!?;:()&%]/g) || []).length },
    ]);

    function statText(newText: string) {
        setText(newText);
        stats.map((stats) => {stats.value = stats.statFunction(newText);});
    }

    return (
        <div className="w-full min-h-screen flex flex-col p-12 gap-12 justify-center items-center text-center">
            <Hint title="📝 Text Stats 🧮" bigTitle={true}>
                <p className="color-light">
                    Easily count characters, words, sentences, and more with this simple text analysis tool. Just paste or type your text below and get instant stats!
                </p>
            </Hint>
            <textarea className="w-full outline-none color-light p-8 rounded-md bg-gray-600 shadow-lg scrollbar" placeholder="Paste or type your text here..." onChange={e => statText(e.target.value)} value={text} rows={10}></textarea>
            <Grid title="Stats" limit={false}>
                {
                    stats.map((stat) => (
                        <div key={stat.name} className="bg-gray-800 flex flex-col gap-2 p-4 rounded-lg shadow-md hover:bg-gray-700 transition">
                            <h3 className="text-xl font-semibold color-light">{stat.name}:</h3>
                            <p className="color-light">{stat.value}</p>
                        </div>
                    ))
                }
            </Grid>
        </div>
    );
};

export default ToolTextStats;
