type Event = {
    name: string;
    date: string;
    color: string;
};

function Events({ heading, events }: { heading:string, events: Event[] }) {
    return (
        <div>
            <div className="flex justify-center mb-6 text-black/60 font-medium">
                <div className="max-w-[1440px] w-11/12">
                    <div>{heading}</div>
                </div>
            </div>
            {events.map((event) => {
                return (
                    <>
                        <div className="flex justify-center items-center border-t border-black py-6" id='event'>
                            <div className="max-w-[1440px] w-11/12">
                                <div className="flex justify-between items-center ">
                                    <h4 className="text-2xl font-medium">{event.name}</h4>
                                    <div className="flex items-center text-sm justify-start gap-6 w-[140px]">
                                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: event.color}}></div>
                                        {event.date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
        </div>
    );
}

export default function EventList() {
    return (
        <>
            <div className="flex flex-col gap-4 w-full relative z-50 bg-white">
                <div className="flex justify-center items-center">
                    <div className="max-w-[1440px] w-11/12">
                        <h3 className="text-4xl font-semibold">Events</h3>
                    </div>
                </div>
                <div className="mt-7">
                    <Events
                        heading="2022"
                        events={[
                            {
                                name: "Rating Runeta Gold",
                                date: "August 11",
                                color: "Red",
                            },
                            {
                                name: "Rating Runeta Bronze",
                                date: "August 11",
                                color: "brown",
                            },
                            {
                                name: "Golden Site Gold",
                                date: "March 20",
                                color: "yellow",
                            },
                        ]}
                    />
                    <div className="h-10"></div>
                    <Events
                        heading="2021"
                        events={[
                            {
                                name: "CSSDA WOTD",
                                date: "May 7",
                                color: "Blue",
                            },
                            {
                                name: "Awwwards SOTD",
                                date: "April 24",
                                color: "orange",
                            },
                            {
                                name: "Golden Site Gold",
                                date: "March 20",
                                color: "yellow",
                            },
                            {
                                name: "Golden Site Gold",
                                date: "December 20",
                                color: "gray",
                            },
                        ]}
                    />
                </div>
            </div>
        </>
    );
}
