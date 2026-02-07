import clsx from "clsx";

type Color = "gray" | "darkGray" | "orange"

const colorMap: Record<Color, string> = {
    gray: 'bg-gray-600',
    darkGray: 'bg-gray-900',
    orange: 'bg-orange-400'
}

type ButtonProps = {
    text: string,
    color: Color,
    changeResult: Function
}

function Button({text, color, changeResult}: ButtonProps) {
    return (
        <button onClick={() => changeResult(text)} className={clsx(
            'text-white',
            colorMap[color]
        )}>
            {text}
        </button>
    )
}

export default Button;