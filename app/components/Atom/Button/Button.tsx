
interface Props {
    name: string;
    style?: React.CSSProperties;
    className: string;
}

const Button = ({name,style,className}:Props) =>{
    return (
        <main>
            <button style={style} className={className}>{name}</button>
        </main>
    );
}

export default Button;