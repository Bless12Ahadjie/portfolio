import Link from 'next/link';
import './Logo.css'

const Logo = () =>{
    return(
        <main>
            <Link href="/"><img className='Logo'
            src ="assets/logo.png"
            alt="logo"
             /></Link>

        </main>
    );
}
export default Logo;