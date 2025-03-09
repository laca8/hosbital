
const NextTeatrment = () => {
    const selectedDays = ['Monday', 'Wednesday', 'Friday']

    const workingHours = {

        'Monday': [
            { start: '09:00', end: '12:00' },
            { start: '14:00', end: '17:00' }
        ],
        'Wednesday': [
            { start: '08:00', end: '13:00' },
            { start: '15:00', end: '18:00' }
        ],
        'Friday': [
            { start: '09:00', end: '14:00' }
        ]
    };

    const weekDays = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    return (
        <div>
            {/* Schedule Overview */}
            <div>
                <h3 className="text-lg font-medium mb-4">Schedule Overview</h3>
                <div className="grid grid-cols-7 gap-2">
                    {weekDays.map((day) => (
                        <div
                            key={day}
                            className={`p-3 rounded-lg border text-center ${selectedDays.includes(day)
                                ? 'bg-blue-50 border-blue-200'
                                : 'bg-gray-50 border-gray-200'
                                }`}
                        >
                            <div className="font-medium mb-1">{day.slice(0, 3)}</div>
                            <div className="text-xs text-gray-500">
                                {workingHours[day as keyof typeof workingHours]?.map((slot, index) => (
                                    <div key={index}>{slot.start} - {slot.end}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default NextTeatrment