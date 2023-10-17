import Link from 'next/link';
import Button from '../../Atom/Button/Button';
import './Online.css';

interface Props {
}

const Online = () => {
  return (
    <main>
        <div className="card">
            <img className='dp' src="assets/dp.jpg" alt="profile" />
            <div>
                <p className='fName'>Bless Ahadjie</p>
                <p className='sName'>@Ahadjiebless1</p>
                <Link href="https://twitter.com/Ahadjiebless1"><Button className='follow-btn' name= "follow"/></Link>
            </div>
        </div>
    </main>
  );
};

export default Online;
