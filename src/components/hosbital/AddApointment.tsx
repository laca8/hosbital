import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,

    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../../components/ui/sheet"
import { BriefcaseMedical, Calendar } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"


function AddApointment() {
    const doctors = [
        'Jane Doe',
        'May Jack'
    ]

    const hours = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00']

    const [formAppoint, setFormAppoint] = useState({
        doctor: '',
        date: '',
        start: '',
        end: '',
        reason: '',
        notes: ''

    })


    // const handleChangeBranches = ()
    const handleChange = (e: React.ChangeEvent, name: string, value: string) => {
        console.log(name);
        setFormAppoint({
            ...formAppoint,
            [name]: value
        })
    }


    const handleSubmit = () => {
        console.log(formAppoint);
    }
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={'outline'} className="mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>Add Appointment</span>
                </Button>
            </SheetTrigger>
            <SheetContent className="rounded-lg bg-gray-50 min-h-screen overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Add Appointment</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">

                    <div>
                        <label className="text-gray-500 font-semibold">Doctors</label>
                        <div className="relative mt-2">
                            <BriefcaseMedical className="absolute left-3 top-3 h-4 w-4 text-gray-400 bg-white" />
                            <Select onValueChange={(value) => handleChange({} as React.ChangeEvent, 'doctor', value)} >
                                <SelectTrigger className="pl-10">
                                    <SelectValue placeholder="Doctors" />
                                </SelectTrigger>
                                <SelectContent aria-required className="pl-10 bg-white">
                                    {
                                        doctors?.map((x, i) => (
                                            <SelectItem key={i} value={x}>{x}</SelectItem>

                                        ))
                                    }

                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-500 font-semibold">
                            Date  <span className="text-red-500">*</span>
                        </label>
                        <Input type='date' className="mt-2" onChange={(e) => handleChange(e, 'date', e.target.value)} />
                    </div>
                    <div>
                        <div className="mt-2 grid grid-cols-2 gap-2">
                            <div>
                                <label className="text-gray-500 font-semibold">
                                    Start Session  <span className="text-red-500">*</span>
                                </label>
                                <Select onValueChange={(value) => handleChange({} as React.ChangeEvent, 'start', value)}>
                                    <SelectTrigger >
                                        <SelectValue placeholder="Start" />
                                    </SelectTrigger>
                                    <SelectContent aria-required >
                                        {
                                            hours?.map((x, i) => (
                                                <SelectItem key={i} value={x}>{x}</SelectItem>

                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className="text-gray-500 font-semibold">
                                    End Session  <span className="text-red-500">*</span>
                                </label>
                                <Select onValueChange={(value) => handleChange({} as React.ChangeEvent, 'end', value)} >
                                    <SelectTrigger >
                                        <SelectValue placeholder="End" />
                                    </SelectTrigger>
                                    <SelectContent aria-required>
                                        {
                                            hours?.map((x, i) => (
                                                <SelectItem key={i} value={x}>{x}</SelectItem>

                                            ))
                                        }
                                    </SelectContent>
                                </Select>

                            </div>

                        </div>

                    </div>
                    <div>
                        <label className="text-gray-500 font-semibold">
                            Reason
                        </label>
                        <Input type='text' className="mt-2" onChange={(e) => handleChange(e, 'reason', e.target.value)} />
                    </div>
                    <div>
                        <label className="text-gray-500 font-semibold">
                            Notes
                        </label>
                        <Input type='text' className="mt-2" onChange={(e) => handleChange(e, 'notes', e.target.value)} />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit" onClick={() => handleSubmit()}>Save</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>

    )
}
export default AddApointment