"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { ArrowLeft, ArrowUpDown, Check } from "lucide-react"

export default function TransferPage() {
    const [step, setStep] = useState(1)
    const [fromAccount, setFromAccount] = useState("")
    const [toAccount, setToAccount] = useState("")
    const [amount, setAmount] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setStep(2)
    }

    const handleConfirm = () => {
        setStep(3)
    }

    return (
        <div className="min-h-screen bg-gray-50">


            <main className="container mx-auto px-4 py-8">
                <div className="mb-8 flex items-center">
                    <Link to="/process" className="mr-4">
                        <Button variant="outline" size="icon">
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                    </Link>
                    <div>
                        <h2 className="text-3xl font-bold">Transfer Money</h2>
                        <p className="text-gray-600">Move funds between accounts</p>
                    </div>
                </div>

                <div className="mx-auto max-w-2xl">
                    {step === 1 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Transfer Details</CardTitle>
                                <CardDescription>Enter the details for your transfer</CardDescription>
                            </CardHeader>
                            <form onSubmit={handleSubmit}>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="fromAccount">From Account</Label>
                                        <Select value={fromAccount} onValueChange={setFromAccount} required>
                                            <SelectTrigger id="fromAccount">
                                                <SelectValue placeholder="Select account" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="checking">Checking Account (*4832) - $12,546.80</SelectItem>
                                                <SelectItem value="savings">Savings Account (*7621) - $48,752.35</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="flex items-center justify-center py-2">
                                        <ArrowUpDown className="h-6 w-6 text-gray-400" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="toAccount">To Account</Label>
                                        <Select value={toAccount} onValueChange={setToAccount} required>
                                            <SelectTrigger id="toAccount">
                                                <SelectValue placeholder="Select account" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="checking">Checking Account (*4832) - $12,546.80</SelectItem>
                                                <SelectItem value="savings">Savings Account (*7621) - $48,752.35</SelectItem>
                                                <SelectItem value="external">Add External Account</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="amount">Amount</Label>
                                        <div className="relative">
                                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                <span className="text-gray-500">$</span>
                                            </div>
                                            <Input
                                                id="amount"
                                                type="number"
                                                placeholder="0.00"
                                                className="pl-8"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="description">Description (Optional)</Label>
                                        <Input
                                            id="description"
                                            placeholder="What's this transfer for?"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button type="submit" className="w-full">
                                        Continue
                                    </Button>
                                </CardFooter>
                            </form>
                        </Card>
                    )}

                    {step === 2 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Confirm Transfer</CardTitle>
                                <CardDescription>Please review the details of your transfer</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="rounded-lg bg-gray-50 p-4">
                                    <div className="mb-4 grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">From</p>
                                            <p className="font-medium">
                                                {fromAccount === "checking" ? "Checking Account (*4832)" : "Savings Account (*7621)"}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">To</p>
                                            <p className="font-medium">
                                                {toAccount === "checking" ? "Checking Account (*4832)" : "Savings Account (*7621)"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-4 border-t border-gray-200 pt-4">
                                        <div className="flex justify-between">
                                            <p className="text-gray-500">Amount</p>
                                            <p className="font-medium">${Number.parseFloat(amount).toFixed(2)}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-gray-500">Fee</p>
                                            <p className="font-medium">$0.00</p>
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-200 pt-4">
                                        <div className="flex justify-between">
                                            <p className="font-medium">Total</p>
                                            <p className="font-bold">${Number.parseFloat(amount).toFixed(2)}</p>
                                        </div>
                                    </div>
                                </div>

                                {description && (
                                    <div>
                                        <p className="text-sm text-gray-500">Description</p>
                                        <p>{description}</p>
                                    </div>
                                )}
                            </CardContent>
                            <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
                                <Button variant="outline" onClick={() => setStep(1)} className="w-full sm:w-auto">
                                    Back
                                </Button>
                                <Button onClick={handleConfirm} className="w-full sm:w-auto">
                                    Confirm Transfer
                                </Button>
                            </CardFooter>
                        </Card>
                    )}

                    {step === 3 && (
                        <Card>
                            <CardHeader className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                                    <Check className="h-8 w-8 text-green-600" />
                                </div>
                                <CardTitle>Transfer Successful!</CardTitle>
                                <CardDescription>Your money is on its way</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="rounded-lg bg-gray-50 p-4">
                                    <div className="mb-4 grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">From</p>
                                            <p className="font-medium">
                                                {fromAccount === "checking" ? "Checking Account (*4832)" : "Savings Account (*7621)"}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">To</p>
                                            <p className="font-medium">
                                                {toAccount === "checking" ? "Checking Account (*4832)" : "Savings Account (*7621)"}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-4 border-t border-gray-200 pt-4">
                                        <div className="flex justify-between">
                                            <p className="text-gray-500">Amount</p>
                                            <p className="font-medium">${Number.parseFloat(amount).toFixed(2)}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-gray-500">Date</p>
                                            <p className="font-medium">Mar 11, 2025</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-gray-500">Reference ID</p>
                                            <p className="font-medium">TRF2503110001</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
                                <Button variant="outline" className="w-full sm:w-auto">
                                    Download Receipt
                                </Button>
                                <Link to="/" className="w-full sm:w-auto">
                                    <Button className="w-full">Back to Dashboard</Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    )}
                </div>
            </main>


        </div>
    )
}

