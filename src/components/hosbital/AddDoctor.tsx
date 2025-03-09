import { useState } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,

    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import { BriefcaseMedical, Phone, SquarePlus, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Card } from "../ui/card"

function AddDoctor() {
    const special = [
        'Pediatrics',
        'Dentistry',
        'Mental illnesses',
        'Cardiac and vascular surgery',
        'New medicine',
        'General medicine',
        'Emergency medicine',
        'Ophthalmology',
        'Neurology',
        'Internal and inflammatory system',
        'Woman, giving birth',
        'Urinary tract',
        'Orthopedics',
        'Other medicine',
        'Plastic surgery medicine',
        'Skin diseases',
        'illnesses',
        'Otolaryngology'
    ]
    const branchesExist = ['Cairo', 'Alexandria', 'Cheraton']
    const hours = ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00']
    const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const [branches, setBranches] = useState<{ branch: string, start: string, end: string, days: string[] }[]>([
        {
            branch: '',
            start: '',
            end: '',
            days: []
        }
    ])
    const [formDoctor, setFormDoctor] = useState({
        firstName: '',
        lastName: '',
        specialization: '',
        contactNumber: '',

    })
    const addBranches = () => {
        if (branches.length == 3) {
            return
        }
        setBranches((branches) => [...branches, {
            branch: '',
            start: '',
            end: '',
            days: []
        }])
    }
    const deleteBranch = () => {
        setBranches((branches) => {
            if (branches.length === 1) {
                return branches;
            } else {
                return branches.slice(1);
            }
        });
    }
    // const handleChangeBranches = ()
    const handleChange = (e: React.ChangeEvent, name: string, value: string) => {
        console.log(name);
        setFormDoctor({
            ...formDoctor,
            [name]: value
        })
    }
    const handleBranchesArr = (index: number, e: React.ChangeEvent, name: string, value: string) => {
        const branchesExist = branches
        const updatedBranches = branchesExist.map((x, i) => {
            if (i === index) {
                return { ...x, [name]: value };
            }
            return x;
        });
        setBranches(updatedBranches);
    }
    const handleChangeDay = (index: number, day: string) => {
        const branchesExist = [...branches]
        const currentDays = branchesExist[index].days;
        if (currentDays.includes(day)) {
            console.log(day);
            branchesExist[index].days = currentDays.filter(d => d !== day);
        } else {
            branchesExist[index].days.push(day)
        }
        console.log(branches);
        setBranches(branchesExist)

    }
    const handleSubmit = () => {
        const data =
            { ...formDoctor, branches }

        console.log(data);

    }
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button >Add Doctor</Button>
            </SheetTrigger>
            <SheetContent className="rounded-lg bg-gray-50 min-h-screen overflow-y-auto">
                <SheetHeader>
                    <SheetTitle>Add Doctor</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div>
                        <label className="text-gray-500 font-semibold">
                            FULL NAME <span className="text-red-500">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <Input className="bg-white" placeholder="Jane" required value={formDoctor.firstName} onChange={(e) => handleChange(e, 'firstName', e.target.value)} />
                            <Input className="bg-white" placeholder="Doe" required value={formDoctor.lastName} onChange={(e) => handleChange(e, 'lastName', e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-500 font-semibold">MOBILE</label>
                        <div className="relative mt-2">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400 bg-white" />
                            <Input className="pl-10 bg-white" placeholder="+91 999-999-9999" value={formDoctor.contactNumber} onChange={(e) => handleChange(e, 'contactNumber', e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <label className="text-gray-500 font-semibold">Specialization</label>
                        <div className="relative mt-2">
                            <BriefcaseMedical className="absolute left-3 top-3 h-4 w-4 text-gray-400 bg-white" />
                            <Select onValueChange={(value) => handleChange({} as React.ChangeEvent, 'specialization', value)} >
                                <SelectTrigger className="pl-10">
                                    <SelectValue placeholder="Specialization" />
                                </SelectTrigger>
                                <SelectContent aria-required className="pl-10 bg-white">
                                    {
                                        special?.map((x, i) => (
                                            <SelectItem key={i} value={x}>{x}</SelectItem>

                                        ))
                                    }

                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center w-full ">
                            <label className="text-gray-500 font-semibold w-full">Branch</label>
                            <div className="flex gap-2">
                                <SquarePlus className="border-2   border-green-500 text-green-500 rounded-md" onClick={() => addBranches()} />
                                <X className="border-2   border-red-500 text-red-500 rounded-md " onClick={() => deleteBranch()} />
                            </div>

                        </div>
                        {
                            branches?.map((branch, index) => (
                                <Card key={index} className="p-1 mb-2 mt-2">

                                    <div className="mt-2 grid grid-cols-3 gap-2 " >
                                        <Select onValueChange={(value) => handleBranchesArr(index, {} as React.ChangeEvent<HTMLInputElement>, 'branch', value)} >
                                            <SelectTrigger className="">
                                                <SelectValue placeholder="Branches" />
                                            </SelectTrigger>
                                            <SelectContent aria-required className="">
                                                {
                                                    branchesExist?.map((x, i) => (
                                                        <SelectItem key={i} value={x}>{x}</SelectItem>

                                                    ))
                                                }
                                            </SelectContent>
                                        </Select>
                                        <Select onValueChange={(value) => handleBranchesArr(index, {} as React.ChangeEvent<HTMLInputElement>, 'start', value)} >
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
                                        <Select onValueChange={(value) => handleBranchesArr(index, {} as React.ChangeEvent<HTMLInputElement>, 'end', value)}  >
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
                                    <div className="flex w-full flex-wrap mt-2">
                                        {
                                            days.map((x, i) => (
                                                <Button key={i}
                                                    onClick={() => handleChangeDay(index, x)}
                                                    variant={'outline'} className={`m-1 ${branches[index].days.includes(x) && 'bg-blue-500'} `} disabled={branches.some((branch, i) => i !== index && branch.days.includes(x))}>{x}</Button>
                                            ))
                                        }
                                    </div>
                                </Card>
                            ))
                        }
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
export default AddDoctor