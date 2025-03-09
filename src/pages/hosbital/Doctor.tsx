
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../components/ui/tabs";


import Medicals from '../../components/hosbital/doctor/Medicals';
import Appointments from '../../components/hosbital/doctor/Appointments';
import NextTeatrment from '../../components/hosbital/doctor/Next-Teatrment';
import NewMedical from '../../components/hosbital/doctor/NewMedical';

const Doctor = () => {

    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200" />
                    <div>
                        <h2 className="text-xl font-semibold">Willie Jennie</h2>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Have uneven jawline</span>
                        </div>
                    </div>
                </div>
                <div className="ml-auto flex gap-2">
                    <NewMedical />
                </div>
            </div>
            {/* Navigation */}
            <Tabs defaultValue="medical-record" className="mb-6">
                <TabsList className="border-b w-full justify-start rounded-none bg-transparent p-0 h-auto">
                    <TabsTrigger
                        value="appointment-history"
                        className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                    >
                        Appointment History
                    </TabsTrigger>
                    <TabsTrigger
                        value="next-treatment"
                        className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                    >
                        Next Treatment
                    </TabsTrigger>
                    <TabsTrigger
                        value="medical-record"
                        className="rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:border-blue-600 data-[state=active]:bg-transparent"
                    >
                        Medical Record
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="next-treatment" className="mt-6">
                    {/*next-treatment*/}
                    <NextTeatrment />
                </TabsContent>
                <TabsContent value="appointment-history" className="mt-6">
                    {/*Appointments*/}
                    <Appointments />
                </TabsContent>
                <TabsContent value="medical-record" className="mt-6">
                    {/*medicals*/}
                    <Medicals />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Doctor