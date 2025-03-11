"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { ArrowLeft, Check, MapPin } from "lucide-react"

export default function WithdrawPage() {
    const [step, setStep] = useState(1)
    const [withdrawMethod, setWithdrawMethod] = useState("atm")
    const [fromAccount, setFromAccount] = useState("")
    const [amount, setAmount] = useState("")

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
                        <h2 className="text-3xl font-bold">Withdraw Money</h2>
                        <p className="text-gray-600">Take money from your account</p>
                    </div>
                </div>

                <div className="mx-auto max-w-2xl">
                    {step === 1 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Withdrawal Details</CardTitle>
                                <CardDescription>Enter the details for your withdrawal</CardDescription>
                            </CardHeader>
                            <form onSubmit={handleSubmit}>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Withdrawal Method</Label>
                                        <RadioGroup
                                            value={withdrawMethod}
                                            onValueChange={setWithdrawMethod}
                                            className="grid grid-cols-1 gap-4 md:grid-cols-2"
                                        >
                                            <div className="flex items-center space-x-2 rounded-md border p-4">
                                                <RadioGroupItem value="atm" id="atm" />
                                                <Label htmlFor="atm" className="flex flex-1 cursor-pointer items-center justify-between">
                                                    <div>
                                                        <p className="font-medium">ATM Withdrawal</p>
                                                        <p className="text-sm text-gray-500">Find ATMs to withdraw cash</p>
                                                    </div>
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2 rounded-md border p-4">
                                                <RadioGroupItem value="branch" id="branch" />
                                                <Label htmlFor="branch" className="flex flex-1 cursor-pointer items-center justify-between">
                                                    <div>
                                                        <p className="font-medium">Branch Withdrawal</p>
                                                        <p className="text-sm text-gray-500">Visit a branch for assistance</p>
                                                    </div>
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </div>

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

                                    <div className="rounded-md bg-blue-50 p-4 text-blue-800">
                                        <p className="text-sm font-medium">Find {withdrawMethod === "atm" ? "ATM" : "Branch"} Locations</p>
                                        <p className="text-xs">
                                            Use our locator to find the nearest {withdrawMethod === "atm" ? "ATM" : "branch"} for your
                                            withdrawal.
                                        </p>
                                        <Button variant="outline" size="sm" className="mt-2">
                                            <MapPin className="mr-2 h-4 w-4" />
                                            Find Locations
                                        </Button>
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
                                <CardTitle>Confirm Withdrawal</CardTitle>
                                <CardDescription>Please review the details of your withdrawal</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="rounded-lg bg-gray-50 p-4">
                                    <div className="mb-4 grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Withdrawal Method</p>
                                            <p className="font-medium">{withdrawMethod === "atm" ? "ATM Withdrawal" : "Branch Withdrawal"}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">From</p>
                                            <p className="font-medium">
                                                {fromAccount === "checking" ? "Checking Account (*4832)" : "Savings Account (*7621)"}
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
                            </CardContent>
                            <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
                                <Button variant="outline" onClick={() => setStep(1)} className="w-full sm:w-auto">
                                    Back
                                </Button>
                                <Button onClick={handleConfirm} className="w-full sm:w-auto">
                                    Confirm Withdrawal
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
                                <CardTitle>Withdrawal Request Confirmed</CardTitle>
                                <CardDescription>
                                    {withdrawMethod === "atm"
                                        ? "Visit any of our ATMs to complete your withdrawal"
                                        : "Visit any branch to complete your withdrawal"}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="rounded-lg bg-gray-50 p-4">
                                    <div className="mb-4 grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Withdrawal Method</p>
                                            <p className="font-medium">{withdrawMethod === "atm" ? "ATM Withdrawal" : "Branch Withdrawal"}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">From</p>
                                            <p className="font-medium">
                                                {fromAccount === "checking" ? "Checking Account (*4832)" : "Savings Account (*7621)"}
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
                                            <p className="font-medium">WDR2503110001</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-md bg-blue-50 p-4 text-blue-800">
                                    <p className="text-sm font-medium">Important Information</p>
                                    <p className="text-xs">
                                        {withdrawMethod === "atm"
                                            ? "You'll need your debit card and PIN to complete this withdrawal at an ATM."
                                            : "Please bring a valid ID to the branch to complete this withdrawal."}
                                    </p>
                                    <Button variant="outline" size="sm" className="mt-2">
                                        <MapPin className="mr-2 h-4 w-4" />
                                        Find Locations
                                    </Button>
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

