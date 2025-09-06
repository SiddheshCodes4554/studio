'use client'
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import Image from "next/image";

const students = [
  { name: 'Alex Green', points: 980, level: 'Explorer', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704a', missions: 5, logbook: [{img: "https://picsum.photos/400/300?random=1", dataAiHint:"urban garden", caption: "My urban garden project!"}] },
  { name: 'Maria S.', points: 1250, level: 'Champion', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704e', missions: 8, logbook: [] },
  { name: 'Chen L.', points: 1100, level: 'Champion', avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704f', missions: 7, logbook: [{img: "https://picsum.photos/400/300?random=2", dataAiHint:"beach cleanup", caption: "Beach cleanup was a success."}] },
  { name: 'Leo G.', points: 720, level: 'Beginner', avatar: 'https://i.pravatar.cc/150?u=leo', missions: 3, logbook: [] },
];

type Student = typeof students[0];

export function StudentProgressTracker() {
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const filteredStudents = students.filter(s => s.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Student Progress</CardTitle>
          <CardDescription>Track individual student achievements and logbooks.</CardDescription>
          <Input placeholder="Search students..." value={search} onChange={e => setSearch(e.target.value)} />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead className="text-center">Missions</TableHead>
                <TableHead className="text-center">Level</TableHead>
                <TableHead className="text-right">Eco-Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map(student => (
                <TableRow key={student.name} onClick={() => setSelectedStudent(student)} className="cursor-pointer">
                  <TableCell className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={student.avatar} alt={student.name} />
                      <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-primary">{student.name}</span>
                  </TableCell>
                  <TableCell className="text-center">{student.missions}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={student.level === 'Champion' ? 'success' : student.level === 'Explorer' ? 'secondary' : 'outline'}>
                        {student.level}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-bold">{student.points.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      
      {selectedStudent && (
        <Dialog open={!!selectedStudent} onOpenChange={() => setSelectedStudent(null)}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedStudent.avatar} alt={selectedStudent.name} />
                    <AvatarFallback>{selectedStudent.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {selectedStudent.name}
              </DialogTitle>
              <DialogDescription>
                {selectedStudent.points.toLocaleString()} Eco-Points | {selectedStudent.missions} Missions Completed | Level: {selectedStudent.level}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
                <h4 className="font-semibold text-primary mb-2">Eco-Actions Logbook</h4>
                {selectedStudent.logbook.length > 0 ? (
                    <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2">
                        {selectedStudent.logbook.map((entry, index) => (
                            <div key={index} className="space-y-2">
                                <Image src={entry.img} alt={entry.caption} data-ai-hint={entry.dataAiHint} width={400} height={300} className="rounded-md object-cover"/>
                                <p className="text-sm text-muted-foreground italic">"{entry.caption}"</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">No logbook entries yet.</p>
                )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
