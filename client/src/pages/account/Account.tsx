import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { ArrowRight, ArrowUpDown, CreditCard, DollarSign, PiggyBank, Plus } from "lucide-react"

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">


            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold">Welcome back, John</h2>
                    <p className="text-gray-600">Here's your financial overview</p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Checking Account</CardTitle>
                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$12,546.80</div>
                            <p className="text-xs text-muted-foreground">Account #: **** 4832</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Savings Account</CardTitle>
                            <PiggyBank className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$48,752.35</div>
                            <p className="text-xs text-muted-foreground">Account #: **** 7621</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Credit Card</CardTitle>
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">$2,345.50</div>
                            <p className="text-xs text-muted-foreground">Available credit: $7,654.50</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-8">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold">Quick Actions</h3>
                        <Link to="/process" className="text-sm text-primary hover:underline">
                            View All
                        </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        <Link to="/process/transfer">
                            <Card className="cursor-pointer transition-all hover:shadow-md">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <ArrowUpDown className="mr-2 h-5 w-5" />
                                        Transfer
                                    </CardTitle>
                                    <CardDescription>Move money between accounts</CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button variant="ghost" className="w-full justify-between">
                                        Start Transfer
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Link>
                        <Link to="/process/deposit">
                            <Card className="cursor-pointer transition-all hover:shadow-md">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Plus className="mr-2 h-5 w-5" />
                                        Deposit
                                    </CardTitle>
                                    <CardDescription>Add funds to your account</CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button variant="ghost" className="w-full justify-between">
                                        Start Deposit
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Link>
                        <Link to="/process/withdraw">
                            <Card className="cursor-pointer transition-all hover:shadow-md">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <DollarSign className="mr-2 h-5 w-5" />
                                        Withdraw
                                    </CardTitle>
                                    <CardDescription>Take money from your account</CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button variant="ghost" className="w-full justify-between">
                                        Start Withdrawal
                                        <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Link>
                    </div>
                </div>

                <div className="mt-8">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-xl font-bold">Recent Transactions</h3>
                        <Button variant="outline" size="sm">
                            View All
                        </Button>
                    </div>
                    <Card>
                        <CardContent className="p-0">
                            <div className="divide-y">
                                <div className="flex items-center justify-between p-4">
                                    <div className="flex items-center">
                                        <div className="mr-4 rounded-full bg-gray-100 p-2">
                                            <CreditCard className="h-5 w-5 text-gray-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Amazon.com</p>
                                            <p className="text-sm text-gray-500">Mar 10, 2025</p>
                                        </div>
                                    </div>
                                    <p className="font-medium text-red-500">-$42.99</p>
                                </div>
                                <div className="flex items-center justify-between p-4">
                                    <div className="flex items-center">
                                        <div className="mr-4 rounded-full bg-gray-100 p-2">
                                            <ArrowUpDown className="h-5 w-5 text-gray-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Transfer to Savings</p>
                                            <p className="text-sm text-gray-500">Mar 8, 2025</p>
                                        </div>
                                    </div>
                                    <p className="font-medium text-red-500">-$500.00</p>
                                </div>
                                <div className="flex items-center justify-between p-4">
                                    <div className="flex items-center">
                                        <div className="mr-4 rounded-full bg-gray-100 p-2">
                                            <DollarSign className="h-5 w-5 text-gray-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Salary Deposit</p>
                                            <p className="text-sm text-gray-500">Mar 5, 2025</p>
                                        </div>
                                    </div>
                                    <p className="font-medium text-green-500">+$3,250.00</p>
                                </div>
                                <div className="flex items-center justify-between p-4">
                                    <div className="flex items-center">
                                        <div className="mr-4 rounded-full bg-gray-100 p-2">
                                            <CreditCard className="h-5 w-5 text-gray-600" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Starbucks</p>
                                            <p className="text-sm text-gray-500">Mar 3, 2025</p>
                                        </div>
                                    </div>
                                    <p className="font-medium text-red-500">-$5.75</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>


        </div>
    )
}

