"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { ArrowLeft, Check, Upload } from "lucide-react"

export default function DepositPage() {
    const [step, setStep] = useState(1)
    const [depositMethod, setDepositMethod] = useState("check")
    const [toAccount, setToAccount] = useState("")
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
                        <h2 className="text-3xl font-bold">Deposit Funds</h2>
                        <p className="text-gray-600">Add money to your account</p>
                    </div>
                </div>

                <div className="mx-auto max-w-2xl">
                    {step === 1 && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Deposit Details</CardTitle>
                                <CardDescription>Enter the details for your deposit</CardDescription>
                            </CardHeader>
                            <form onSubmit={handleSubmit}>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Deposit Method</Label>
                                        <RadioGroup
                                            value={depositMethod}
                                            onValueChange={setDepositMethod}
                                            className="grid grid-cols-1 gap-4 md:grid-cols-2"
                                        >
                                            <div className="flex items-center space-x-2 rounded-md border p-4">
                                                <RadioGroupItem value="check" id="check" />
                                                <Label htmlFor="check" className="flex flex-1 cursor-pointer items-center justify-between">
                                                    <div>
                                                        <p className="font-medium">Mobile Check Deposit</p>
                                                        <p className="text-sm text-gray-500">Deposit checks using your device's camera</p>
                                                    </div>
                                                </Label>
                                            </div>
                                            <div className="flex items-center space-x-2 rounded-md border p-4">
                                                <RadioGroupItem value="cash" id="cash" />
                                                <Label htmlFor="cash" className="flex flex-1 cursor-pointer items-center justify-between">
                                                    <div>
                                                        <p className="font-medium">Cash Deposit</p>
                                                        <p className="text-sm text-gray-500">Find locations to deposit cash</p>
                                                    </div>
                                                </Label>
                                            </div>
                                        </RadioGroup>
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
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {depositMethod === "check" && (
                                        <>
                                            <div className="space-y-2">
                                                <Label htmlFor="amount">Check Amount</Label>
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
                                                <Label>Check Images</Label>
                                                <div className="grid gap-4 md:grid-cols-2">
                                                    <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-4 text-center hover:bg-gray-50">
                                                        <Upload className="mb-2 h-6 w-6 text-gray-400" />
                                                        <p className="text-sm font-medium">Front of Check</p>
                                                        <p className="text-xs text-gray-500">Click to upload</p>
                                                    </div>
                                                    <div className="flex h-32 cursor-pointer flex-col items-center justify-center rounded-md border border-dashed p-4 text-center hover:bg-gray-50">
                                                        <Upload className="mb-2 h-6 w-6 text-gray-400" />
                                                        <p className="text-sm font-medium">Back of Check</p>
                                                        <p className="text-xs text-gray-500">Click to upload</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {depositMethod === "cash" && (
                                        <div className="rounded-md bg-amber-50 p-4 text-amber-800">
                                            <p className="text-sm font-medium">Cash Deposit Locations</p>
                                            <p className="text-xs">
                                                You can deposit cash at any of our ATMs or branch locations. Use the ATM/Branch locator to find
                                                the nearest location.
                                            </p>
                                            <Button variant="outline" size="sm" className="mt-2">
                                                Find Locations
                                            </Button>
                                        </div>
                                    )}
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
                                <CardTitle>Confirm Deposit</CardTitle>
                                <CardDescription>Please review the details of your deposit</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="rounded-lg bg-gray-50 p-4">
                                    <div className="mb-4 grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Deposit Method</p>
                                            <p className="font-medium">
                                                {depositMethod === "check" ? "Mobile Check Deposit" : "Cash Deposit"}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">To</p>
                                            <p className="font-medium">
                                                {toAccount === "checking" ? "Checking Account (*4832)" : "Savings Account (*7621)"}
                                            </p>
                                        </div>
                                    </div>
                                    {depositMethod === "check" && (
                                        <div className="mb-4 border-t border-gray-200 pt-4">
                                            <div className="flex justify-between">
                                                <p className="text-gray-500">Amount</p>
                                                <p className="font-medium">${Number.parseFloat(amount).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
                                <Button variant="outline" onClick={() => setStep(1)} className="w-full sm:w-auto">
                                    Back
                                </Button>
                                <Button onClick={handleConfirm} className="w-full sm:w-auto">
                                    Confirm Deposit
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
                                <CardTitle>Deposit Successful!</CardTitle>
                                <CardDescription>
                                    {depositMethod === "check"
                                        ? "Your check is being processed. Funds will be available soon."
                                        : "Visit a branch or ATM to complete your cash deposit."}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="rounded-lg bg-gray-50 p-4">
                                    <div className="mb-4 grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-sm text-gray-500">Deposit Method</p>
                                            <p className="font-medium">
                                                {depositMethod === "check" ? "Mobile Check Deposit" : "Cash Deposit"}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">To</p>
                                            <p className="font-medium">
                                                {toAccount === "checking" ? "Checking Account (*4832)" : "Savings Account (*7621)"}
                                            </p>
                                        </div>
                                    </div>
                                    {depositMethod === "check" && (
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
                                                <p className="font-medium">DEP2503110001</p>
                                            </div>
                                        </div>
                                    )}
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

