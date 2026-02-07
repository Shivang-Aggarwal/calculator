import clsx from "clsx";

type Color = "gray" | "darkGray" | "orange"

const colorMap: Record<Color, string> = {
    gray: 'bg-gray-600',
    darkGray: 'bg-gray-900',
    orange: 'bg-orange-400'
}

type ButtonProps = {
    text: string,
    color: Color
}

function Button({text, color}: ButtonProps) {
    return (
        <button className={clsx(
            'text-white',
            colorMap[color]
        )}>
            {text}
        </button>
    )
}

export default Button;