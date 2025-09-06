'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const readyMadeMissions = [
  "Community Cleanup Drive",
  "Build a Bird Feeder",
  "Energy Audit Challenge",
  "30-Day Recycling Streak",
  "Plant a Tree Initiative"
];

export function MissionAssignment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline">Assign a New Mission</CardTitle>
        <CardDescription>Choose a mission from the template list to assign to your class.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select>
            <SelectTrigger>
                <SelectValue placeholder="Select a mission..." />
            </SelectTrigger>
            <SelectContent>
                {readyMadeMissions.map(mission => (
                    <SelectItem key={mission} value={mission}>{mission}</SelectItem>
                ))}
            </SelectContent>
        </Select>
        <Button className="w-full">Assign Mission</Button>
      </CardContent>
    </Card>
  );
}
