/*
    Authors:
    >> Nathan TIROLF - { nathan.tirolf@epitech.eu }

    („• ֊ •„)❤  <  Have a good day !
    --U-----U------------------------
*/

/* ----- IMPORTS ----- */
import React from "react";
import css from "./Switch.module.css"
import { Check, X } from "lucide-react";

/* ----- PROPS ----- */
interface SwitchProps {
    value: boolean;
    setValue: (value: boolean) => void;
};

/* ----- COMPONENT ----- */
const Switch: React.FC<SwitchProps> = ({ value, setValue}) => {
    return (
        <>
            <label className={`
                ${css.switch}
                inline-block
                duration-200
                ease-[cubic-bezier(0.27,0.2,0.25,1.51)]
            `}>
                <input type="checkbox" className="hidden" value={value.toString()} onChange={() => setValue(!value)} />
                <div className={`
                    ${css.slider}
                    box-border
                    rounded-full
                    flex
                    items-center
                    relative
                    cursor-pointer
                    bg-color-${value ? "green" : "gray"}
                    before:content-['']
                    before:absolute
                    before:bg-white
                    before:rounded-xs
                    before:duration-250
                    before:ease-in-out
                `}>
                    <div className={`
                        ${css.circle}
                        bg-white
                        rounded-full
                        flex
                        items-center
                        justify-center
                        z-1
                        absolute
                        duration-200
                        ease-[cubic-bezier(0.27,0.2,0.25,1.51)]
                    `}>
                        <X
                            className={`
                                cross
                                absolute
                                h-auto
                                duration-200
                                ease-[cubic-bezier(0.27,0.2,0.25,1.51)]
                                scale-${value ? "0" : "1"}
                            `}
                            size={10}
                            color="var(--color-gray)"
                        />
                        <Check
                            className={`
                                checkmark
                                absolute
                                h-auto
                                duration-200
                                ease-[cubic-bezier(0.27,0.2,0.25,1.51)]
                                scale-${value ? "1" : "0"}
                            `}
                            size={10}
                            color="var(--color-green)"
                        />
                    </div>
                </div>
            </label>
        </>
    );
};

export default Switch;

