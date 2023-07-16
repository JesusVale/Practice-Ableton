import { ArrowDown } from "./icons.jsx";

export default function Select({children, name}){

    return (
        <div className="select">
            <select className="select__control" name={name}>
                {children}
            </select>
            <div className="select__arrow">
                <ArrowDown />
            </div>
        </div>
    )
}