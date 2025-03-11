import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { ArrowLeft, ArrowRight, ArrowUpDown, DollarSign, Plus } from "lucide-react"

export default function ProcessPage() {
    return (
        <div className="min-h-screen bg-gray-50">


            <main className="container mx-auto px-4 py-8">
                <div className="mb-8 flex items-center">
                    <Link to="/" className="mr-4">
                        <Button variant="outline" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h2 className="text-3xl font-bold">Choose a Transaction</h2>
                        <p className="text-gray-600">Select the type of transaction you want to perform</p>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <Link to="/process/transfer">
                        <Card className="h-full cursor-pointer transition-all hover:shadow-md">
                            <CardHeader>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                                    <ArrowUpDown className="h-6 w-6 text-primary" />
                                </div>
                                <CardTitle>Transfer Money</CardTitle>
                                <CardDescription>Move funds between your accounts or send money to someone else</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="ml-6 list-disc text-sm text-gray-600">
                                    <li>Transfer between your accounts</li>
                                    <li>Send money to other people</li>
                                    <li>Schedule recurring transfers</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full justify-between">
                                    Start Transfer
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </Link>

                    <Link to="/process/deposit">
                        <Card className="h-full cursor-pointer transition-all hover:shadow-md">
                            <CardHeader>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                    <Plus className="h-6 w-6 text-green-600" />
                                </div>
                                <CardTitle>Deposit Funds</CardTitle>
                                <CardDescription>Add money to your account through various methods</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="ml-6 list-disc text-sm text-gray-600">
                                    <li>Mobile check deposit</li>
                                    <li>Direct deposit setup</li>
                                    <li>Cash deposit locations</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full justify-between">
                                    Start Deposit
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </Link>

                    <Link to="/process/withdraw">
                        <Card className="h-full cursor-pointer transition-all hover:shadow-md">
                            <CardHeader>
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                                    <DollarSign className="h-6 w-6 text-amber-600" />
                                </div>
                                <CardTitle>Withdraw Money</CardTitle>
                                <CardDescription>Take money out from your account</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="ml-6 list-disc text-sm text-gray-600">
                                    <li>ATM withdrawal locations</li>
                                    <li>Cash back at retailers</li>
                                    <li>Bank teller withdrawals</li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full justify-between">
                                    Start Withdrawal
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </Link>
                </div>
            </main>


        </div>
    )
}

