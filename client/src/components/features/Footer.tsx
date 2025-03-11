import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <footer className="bg-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <p className="text-sm text-gray-600">© 2025 BankEase. All rights reserved.</p>
                    <div className="mt-4 flex space-x-4 md:mt-0">
                        <Link to="#" className="text-sm text-gray-600 hover:text-primary">
                            Privacy Policy
                        </Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-primary">
                            Terms of Service
                        </Link>
                        <Link to="#" className="text-sm text-gray-600 hover:text-primary">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer