/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React, { useState, useEffect } from "react";
import Hint from "../../components/Hint/Hint";
import { Eye, EyeOff, Check, X } from "lucide-react";
import Grid from "../../components/Grid/Grid";

/* ----- COMPONENT ----- */
const ToolPasswordStrengthChecker: React.FC = () => {
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);
    const [strength, setStrength] = useState(0);

    const [criteria, setCriteria] = useState([
        { name: "Uppercase", value: false, func: (str: string) => /[A-Z]/.test(str) },
        { name: "Lowercase", value: false, func: (str: string) => /[a-z]/.test(str) },
        { name: "Numbers", value: false, func: (str: string) => /[0-9]/.test(str) },
        { name: "Symbols", value: false, func: (str: string) => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(str) },
        { name: "8+ Characters", value: false, func: (str: string) => str.length >= 8 }
    ]);

    useEffect(() => {
        const updatedCriteria = criteria.map(criterion => ({ ...criterion, value: criterion.func(password)}));
        setCriteria(updatedCriteria);

        const metCriteria = updatedCriteria.filter(c => c.value).length;
        const strengthPercentage = Math.floor((metCriteria / updatedCriteria.length) * 100);
        setStrength(strengthPercentage);
    }, [password]);

    const getStrengthLabel = (): string => {
        if (strength < 20) return "Very Weak";
        if (strength < 40) return "Weak";
        if (strength < 60) return "Moderate";
        if (strength < 80) return "Strong";
        return "Very Strong";
    };

    const getStrengthColor = (): string => {
        if (strength < 20) return "bg-red-600";
        if (strength < 40) return "bg-red-400";
        if (strength < 60) return "bg-yellow-400";
        if (strength < 80) return "bg-green-400";
        return "bg-green-600";
    };

    return (
        <div className="w-full min-h-screen flex flex-col p-4 md:p-12 gap-6 justify-center items-center text-center">
        <Hint title="🔒 Password Strength Checker 🔓" bigTitle={true}>
            <p className="text-gray-300">
                Check the security level of your password
            </p>
        </Hint>

        <div className="bg-gray-700 p-6 rounded-lg shadow-md text-center w-full max-w-2xl flex flex-col gap-4">
            <div className="flex flex-row w-full p-4 rounded-md bg-gray-600 items-center">
            <input
                type={hidePassword ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-600 outline-none text-white text-center"
                placeholder="Enter your password..."
            />
            <button
                className="px-2 text-gray-300 hover:text-white focus:outline-none"
                onClick={() => setHidePassword(!hidePassword)}
                aria-label={hidePassword ? "Show password" : "Hide password"}
            >
                {hidePassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
            </div>

            <div className="w-full mt-2">
            <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>Strength: {getStrengthLabel()}</span>
                <span>{strength}%</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2.5">
                <div
                    className={`h-2.5 rounded-full transition-all duration-300 ${getStrengthColor()}`}
                    style={{ width: `${strength}%` }}
                ></div>
            </div>
            </div>
        </div>

        <Grid title="Password Requirements" limit={false}>
            {criteria.map((criterion, index) => (
                <div
                    key={index}
                    className={`flex gap-3 p-4 ${criterion.value ? "bg-green-600" : "bg-red-500"} text-white rounded-md w-full text-center justify-center items-center transition-colors duration-300`}
                >
                    <div>{criterion.value ? <Check size={18} /> : <X size={18} />}</div>
                    <div>{criterion.name}</div>
                </div>
            ))}
        </Grid>

        {password.length > 0 && (
            <div className="text-gray-300 text-sm mt-2">
            <p>
                {strength === 100 ? "Great job! Your password meets all security criteria." : "Keep improving your password to enhance security."}
            </p>
            </div>
        )}
        </div>
    );
    };

export default ToolPasswordStrengthChecker;