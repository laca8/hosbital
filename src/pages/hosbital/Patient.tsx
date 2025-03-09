import React, { useState } from 'react';
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

import { Card, CardContent } from "../../components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { MapPin, Phone, Mail } from 'lucide-react';
import AddApointment from '../../components/hosbital/AddApointment';

const Patient = () => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    const relationArr = ['Self', 'Spouse', 'Dependent child', 'Other']
    const [formPatient, setFormPatient] = useState({
        relation: 'Self',
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        contactNumber: '',
        address1: '',
        address2: '',
        state: '',
        city: '',
        phone: ''


    })
    const handleChange = (e: React.ChangeEvent, name: string, value: string) => {
        console.log(name, e);

        setFormPatient({
            ...formPatient,
            [name]: value
        })
        console.log(formPatient);

    }
    const handleSubmit = () => {
        const data = {
            firstName: formPatient.firstName,
            lastName: formPatient.lastName,
            dateOfBirth: formPatient.dateOfBirth,
            gender: formPatient.gender,
            contactNumber: formPatient.contactNumber,
            address: {
                address1: formPatient.address1,
                address2: formPatient.address2,
                state: formPatient.state,
                city: formPatient.city,
            },
            emergencyContact: {
                phone: formPatient.phone,
                relation: formPatient.relation
            }
        }
        console.log(data)

    }
    return (
        <div className="min-h-screen  p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
                <Button variant={'outline'} className=''><img src="https://static.thenounproject.com/png/516749-200.png" className="w-10 h-10 p-2" /></Button>
                <div className="space-x-2">
                    <AddApointment />

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {/* General Information */}
                <Card>
                    <CardContent className="pt-6">
                        <h2 className="text-lg font-semibold mb-4">General Information</h2>

                        <div className="space-y-6">
                            <div>
                                <label className="text-gray-500 font-semibold">
                                    Relationship to RP <span className="text-red-500">*</span>
                                </label>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {
                                        relationArr.map((x: string, i: number) => (
                                            <Button key={i} variant="outline" className={`${formPatient.relation == x && 'bg-blue-50'}`} value={x} onClick={() => handleChange({} as React.ChangeEvent, 'relation', x)}>{x}</Button>
                                        ))
                                    }

                                </div>
                            </div>

                            <div>
                                <label className="text-gray-500 font-semibold">
                                    FULL NAME <span className="text-red-500">*</span>
                                </label>
                                <div className="grid grid-cols-3 gap-2 mt-2">
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Prefix" />
                                        </SelectTrigger>
                                        <SelectContent aria-required  >
                                            <SelectItem value="mr">Mr.</SelectItem>
                                            <SelectItem value="mrs">Mrs.</SelectItem>
                                            <SelectItem value="ms">Ms.</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <Input placeholder="Jane" required value={formPatient.firstName} onChange={(e) => handleChange(e, 'firstName', e.target.value)} />
                                    <Input placeholder="Doe" required value={formPatient.lastName} onChange={(e) => handleChange(e, 'lastName', e.target.value)} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-gray-500 font-semibold">
                                        DATE OF BIRTH <span className="text-red-500">*</span>
                                    </label>
                                    <Input type='date' className="mt-2" value={formPatient.dateOfBirth} onChange={(e) => handleChange(e, 'dateOfBirth', e.target.value)} />
                                </div>
                                <div>
                                    <label className="text-gray-500 font-semibold">
                                        GENDER <span className="text-red-500">*</span>
                                    </label>
                                    <Select defaultValue="male" value={formPatient.gender} onValueChange={(value) => handleChange({} as React.ChangeEvent, 'gender', value)}>
                                        <SelectTrigger className="mt-2">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-gray-500 font-semibold">CITY</label>
                                    <Input className="mt-2" value={formPatient.city} onChange={(e) => handleChange(e, 'city', e.target.value)} />
                                </div>
                                <div>
                                    <label className="text-gray-500 font-semibold" >STATE</label>
                                    <Input className="mt-2" value={formPatient.state} onChange={(e) => handleChange(e, 'state', e.target.value)} />
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Information */}
                <Card>
                    <CardContent className="pt-6">
                        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>

                        <div className="space-y-6">
                            <div>
                                <label className="text-gray-500 font-semibold">ADDRESS LINE 1</label>
                                <div className="relative mt-2">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input className="pl-10" placeholder="Enter address" value={formPatient.address1} onChange={(e) => handleChange(e, 'address1', e.target.value)} />
                                </div>
                            </div>

                            <div>
                                <label className="text-gray-500 font-semibold">ADDRESS LINE 2</label>
                                <div className="relative mt-2">
                                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input className="pl-10" placeholder="Enter address" value={formPatient.address2} onChange={(e) => handleChange(e, 'address2', e.target.value)} />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-gray-500 font-semibold">MOBILE</label>
                                    <div className="relative mt-2">
                                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                        <Input className="pl-10" defaultValue="+91 999-999-9999" value={formPatient.contactNumber} onChange={(e) => handleChange(e, 'contactNumber', e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-gray-500 font-semibold">MOBILE EMERGENCY</label>
                                    <div className="relative mt-2">
                                        <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                        <Input className="pl-10" value={formPatient.phone} onChange={(e) => handleChange(e, 'phone', e.target.value)} />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <div>
                                    <label className="text-gray-500 font-semibold">EMAIL</label>
                                    <div className="relative mt-2">
                                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                        <Input className="pl-10" defaultValue="john_doe@gmail.com" disabled value={user?.user?.email} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-end space-x-2 mt-6">
                <Button variant="outline">Cancel</Button>
                <Button className=" hover:bg-gray-950" onClick={handleSubmit}>Save</Button>
            </div>
        </div>
    )
}

export default Patient