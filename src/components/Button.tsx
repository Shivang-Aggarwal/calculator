import clsx from "clsx";

type Color = "gray" | "darkGray" | "orange"

const colorMap: Record<Color, string> = {
    gray: 'bg-gray-400 active:bg-gray-300',
    darkGray: 'bg-gray-600 active:bg-gray-500',
    orange: 'bg-orange-400 active:bg-orange-200'
}

type ButtonProps = {
    text: string,
    color: Color,
    changeResult: Function
}

function Button({text, color, changeResult}: ButtonProps) {
    return (
        <div className='flex items-center justify-center aspect-square'>
            <button onClick={() => changeResult(text)} className={clsx(
                'text-white',
                colorMap[color],
                'w-7/8 h-7/8 rounded-full',
                'flex items-center justify-center',
                'text-2xl',
                'duration-150'
            )}>
            {text}
            </button>
        </div>
    )
}

export default Button;