import './Card.css'

interface Props{
    src?: string;
    head?: string;
    body?: string;
    alt?: string;
    className?: string;

}

const Card = ({src,head,body,alt,className}:Props) => {
  return(
    <main>
        <img className={className} src={src} alt={alt} />
        <p className={className}>{head}</p>
        <p className={className}>{body}</p>
    </main>
  ) ;
};

export default Card;
