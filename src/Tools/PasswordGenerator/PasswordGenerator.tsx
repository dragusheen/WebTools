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
const ToolPasswordGenerator: React.FC = () => {
    const [length, setLength] = useState(0);
    const [password, setPassword] = useState("");
    const [options, setOptions] = useState([
        { name: "Use UpperCase", value: true, characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
        { name: "Use LowerCase", value: true, characters: "abcdefghijklmnopqrstuvwxyz" },
        { name: "Use Numbers", value: true, characters: "0123456789" },
        { name: "Use Symbols", value: true, characters: "!@#$%^&*()_+{}[]<>?"},
    ]);


    const generatePassword = () => {
        let charSet = "";
        options.map(option => charSet += option.value ? option.characters : "");
        const finalLength = length > 0 ? length : Math.floor(Math.random() * 20) + 10;

        let result = "";
        for (let i = 0; i < finalLength; i++)
            result += charSet[Math.floor(Math.random() * charSet.length)];
        setPassword(result);
    };

    function setOptionValue(name: string, value: boolean) {
        setOptions(prev => prev.map(option => name === option.name ? { ... option, value: value } : option));
    };

    return (
        <div className="w-full min-h-screen flex flex-col p-12 gap-8 justify-center items-center text-center">
            <Hint title="🔑 Password Generator 🔐" bigTitle={true}>
                <p className="color-light">
                    Generate a secure password based on your preferences!
                </p>
            </Hint>
            <Grid title="Options" limit={false}>
                <div className="bg-gray-700 p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold color-light">Password Length</h3>
                    <input
                        type="number"
                        min={0}
                        max={128}
                        value={length}
                        onChange={(e) => setLength(parseInt(e.target.value))}
                        className="w-full mt-2 p-2 rounded-md bg-gray-600 text-white"
                    />
                </div>
                {
                    options.map(option => (
                        <div key={option.name} className="bg-gray-700 p-4 rounded-lg shadow-md text-center flex flex-col gap-4 justify-center items-center">
                            <h3 className="text-xl font-semibold color-light">{option.name}</h3>
                            <Switch value={option.value} setValue={(v) => setOptionValue(option.name, v)} />
                        </div>
                    ))
                }
            </Grid>

            <div>
                <button
                    onClick={generatePassword}
                    className="w-full p-4 rounded-md bg-blue-500 text-white shadow-lg hover:bg-blue-600 disabled:opacity-8"
                    disabled={options.filter(option =>!option.value).length === options.length}
                >
                    Generate Password
                </button>
            </div>
            <DisplayCopiableText text={password} rows={1} className="text-center" />
        </div>
    );
};

export default ToolPasswordGenerator;
