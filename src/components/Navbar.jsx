
import account from '../assets/account.png'

const Navbar = () => {
    return (
        <div className='flex items-center p-2 justify-between w-full max-w-7xl mx-auto '>
            <div>
                <h1 className="text-xl font-semibold">Dashboard</h1>
            </div>
            <div>
                <img className='w-12' src={account} alt="account" />
            </div>
        </div>
    )
}

export default Navbar