
'use client'

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Recycle } from 'lucide-react';

const initialFormState = {
    transport: '',
    energy: '',
    food: '',
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export function CarbonFootprintCalculator() {
    const [formData, setFormData] = useState(initialFormState);
    const [result, setResult] = useState<any[] | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const calculateFootprint = (e: React.FormEvent) => {
        e.preventDefault();
        const transportEmissions = parseFloat(formData.transport || '0') * 0.21; // kg CO2 per km for avg car
        const energyEmissions = parseFloat(formData.energy || '0') * 0.82; // kg CO2 per kWh for avg US grid
        const foodEmissions = parseFloat(formData.food || '0') * 2.5; // kg CO2 per dollar spent on food (very rough estimate)

        const total = transportEmissions + energyEmissions + foodEmissions;

        setResult([
            { name: 'Transport', value: parseFloat(transportEmissions.toFixed(2)) },
            { name: 'Energy', value: parseFloat(energyEmissions.toFixed(2)) },
            { name: 'Food', value: parseFloat(foodEmissions.toFixed(2)) },
        ]);
    };

    return (
        <Card className="bg-muted/30">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <Recycle className="w-6 h-6 text-primary" />
                    <CardTitle>My Carbon Footprint</CardTitle>
                </div>
                <CardDescription>Estimate your monthly carbon footprint based on your lifestyle.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <form onSubmit={calculateFootprint} className="space-y-4">
                        <div>
                            <Label htmlFor="transport">Monthly Travel (in km)</Label>
                            <Input id="transport" name="transport" type="number" value={formData.transport} onChange={handleChange} placeholder="e.g., 500" required />
                        </div>
                        <div>
                            <Label htmlFor="energy">Monthly Electricity (in kWh)</Label>
                            <Input id="energy" name="energy" type="number" value={formData.energy} onChange={handleChange} placeholder="e.g., 300" required />
                        </div>
                        <div>
                            <Label htmlFor="food">Monthly Food Spending (in $)</Label>
                            <Input id="food" name="food" type="number" value={formData.food} onChange={handleChange} placeholder="e.g., 400" required />
                        </div>
                        <Button type="submit">Calculate Footprint</Button>
                    </form>
                    <div className="h-64 w-full">
                        {result ? (
                            <>
                                <p className="text-center font-bold text-lg mb-2">Total: {result.reduce((acc, item) => acc + item.value, 0).toFixed(2)} kg CO₂e / month</p>
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie data={result} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                                            {result.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                        <Legend />
                                    </PieChart>
                                </ResponsiveContainer>
                            </>
                        ) : (
                            <div className="flex items-center justify-center h-full border-2 border-dashed rounded-lg text-muted-foreground">
                                Your results will appear here.
                            </div>
                        )}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
