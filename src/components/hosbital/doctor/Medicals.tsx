import React from 'react'
import { Card } from '../../ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../ui/table'
import { useNavigate } from 'react-router-dom'
import { BriefcaseMedical } from 'lucide-react'

const Medicals = () => {
    const navigator = useNavigate()
    const medicals = [
        {
            id: 1,
            patient: 'Jone',
            doctor: 'Jake',
            diagnosis: 'good',

        }
    ]
    return (
        <Card>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[250px]">Doctor</TableHead>
                        <TableHead>Patient</TableHead>
                        <TableHead>Diagnosis</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {medicals.map((medical, i) => (
                        <TableRow key={i} onClick={() => navigator(`/doctor/${medical.id}`)}>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <BriefcaseMedical />
                                    <div className="font-medium">{medical.doctor}</div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div>
                                    <div className="text-sm  flex items-center gap-1">
                                        {medical.patient}
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="max-w-[200px]">{medical.diagnosis}</div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    )
}

export default Medicals