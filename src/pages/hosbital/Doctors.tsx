import { Mail, ListFilter } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../components/ui/table";

import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card } from '../../components/ui/card';
import AddDoctor from '../../components/hosbital/AddDoctor';
import { Input } from '../../components/ui/input';
import { useNavigate } from 'react-router-dom';

const doctors = [
    {
        id: 1,
        name: 'Ronald Richards',
        specialty: 'Pediatric Dentistry',
        contact: '209 555-0104',
        email: 'teukuwestnu@gmail.com',
        workingDays: ['S', 'M', 'W', 'T', 'F', 'S'],
        treatment: 'Dental service',
        type: 'PART-TIME',
        avatar: '/api/placeholder/32/32'
    },
    {
        id: 2,
        name: 'Drg Jerald O Hara',
        specialty: 'Pediatric Dentistry',
        contact: '302 555-0107',
        email: 'ojpeng@avicena.com',
        workingDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        treatment: 'Dental service, Oral Disease service +2',
        type: 'FULL-TIME',
        avatar: '/api/placeholder/32/32'
    }
];


const Doctors = () => {
    const navigator = useNavigate()
    return (
        <div className="p-4 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <div className='flex gap-2'>
                    <Input placeholder='search' className='bg-white'
                    />
                    <Button variant="outline" >
                        <ListFilter /> Filters
                    </Button>
                </div>
                <div className="flex gap-2">

                    <AddDoctor />
                </div>
            </div>
            <div className="flex items-center gap-2 mb-4">

                <span className="text-xl font-semibold">120</span>
                <span className="text-gray-500">Doctor</span>
            </div>
            <Card>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[250px]">NAME</TableHead>
                            <TableHead>CONTACT</TableHead>

                            <TableHead>ASSIGNED TREATMENT</TableHead>


                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {doctors.map((doctor) => (
                            <TableRow key={doctor.id} onClick={() => navigator(`/doctor/${doctor.id}`)}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar>
                                            <AvatarImage src={doctor.avatar} />
                                            <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <div className="font-medium">{doctor.name}</div>
                                            <div className="text-sm text-gray-500">{doctor.specialty}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div>
                                        <div>{doctor.contact}</div>
                                        <div className="text-sm text-blue-500 flex items-center gap-1">
                                            <Mail size={14} />
                                            {doctor.email}
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell>
                                    <div className="max-w-[200px]">{doctor.treatment}</div>
                                </TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </div>
    )
}

export default Doctors