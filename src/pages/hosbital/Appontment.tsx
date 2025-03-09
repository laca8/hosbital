import { Tabs, TabsList, TabsTrigger } from "../../components/ui/tabs";


import { Clock, MapPin, } from 'lucide-react';


const Appointment = () => {
    const tabItems = ["Upcoming", "Pending", "Recurring", "Past", "Cancelled"];

    const meetings = [
        {
            id: 1,
            date: { day: "Wed", number: "28" },
            time: "09:00 - 09:30",
            title: "30min call meeting Peer <> Leslie",
            location: "Online",
            participants: 2,
        },
        {
            id: 2,
            date: { day: "Fri", number: "30" },
            time: "15:20 - 16:20",
            title: "Livn Product Demo",
            location: "Wework Paris",
            participants: 4,
        },
        {
            id: 3,
            date: { day: "Thu", number: "29" },
            time: "11:15 - 11:45",
            title: "30min call meeting Olivia, Liam <> Alban",
            location: "Online",
            participants: 3,
        }
    ];

    return (
        <div className="max-w-7xl mx-auto  p-6 ">

            <div className="bg-white rounded-xl p-6">


                <div className="mb-8">
                    <h1 className="text-2xl font-semibold mb-2">Bookings</h1>
                    <p className="text-gray-500">
                        See your scheduled events from your calendar events links.
                    </p>
                </div>

                <Tabs defaultValue="Upcoming" className="mb-6">
                    <TabsList className="bg-gray-50 p-1 rounded-lg">
                        {tabItems.map((tab) => (
                            <TabsTrigger
                                key={tab}
                                value={tab}
                                className="px-4 py-2 rounded-md data-[state=active]:bg-white"
                            >
                                {tab}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </Tabs>

                <div className="space-y-4">
                    {meetings.map((meeting) => (
                        <div
                            key={meeting.id}
                            className="border rounded-lg p-4 flex items-center gap-6"
                        >
                            <div className="text-center min-w-16">
                                <div className="text-red-500 font-medium">{meeting.date.day}</div>
                                <div className="text-2xl font-semibold">{meeting.date.number}</div>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{meeting.time}</span>
                                </div>

                                <div className="text-base font-medium mb-1">
                                    {meeting.title}
                                </div>

                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <MapPin className="w-4 h-4" />
                                    <span>{meeting.location}</span>
                                    <div className="flex -space-x-2 ml-2">
                                        {[...Array(meeting.participants)].map((_, i) => (
                                            <div
                                                key={i}
                                                className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Appointment;