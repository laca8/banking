import { CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <CreditCard className="h-8 w-8 text-primary" />
                        <h1 className="ml-2 text-2xl font-bold">BankEase</h1>
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <Link to="/" className="font-medium text-primary">
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/process" className="font-medium text-gray-600 hover:text-primary">
                                    Transactions
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className="font-medium text-gray-600 hover:text-primary">
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header