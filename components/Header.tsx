// Import the link props
import Link from 'next/link';

// add the React Header Element
const Header: React.FC = () => {

    return (
        // header value
        <header className="py-2">

        <Link href="/">
          <h1 className='text-2xl font-bold text-green-500'>吠吠的部落格ㄋㄟˇ</h1>
        </Link>
        </header>
    )
}

// export Header module
export default Header;
