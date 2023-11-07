export default function HeroSection() {
    return (
        <>
        <div className="h-[100svh]  py-[6rem] pt-[1rem] w-full px-5 md:px-[5.8rem] flex flex-col items-start justify-between overflow-hidden">
            <h1 className="text-[80px] sm:text-[170px] md:text-[220px] lg:text-[320px] font-bold">INVENT</h1>
            <div className="flex flex-col justify-between  gap-10 w-full">
                <div className="flex flex-col gap-px text-xl  md:text-4xl font-medium">
                    <p>A motion partner building</p>
                    <p>brand-led identities, systems,</p>
                    <p>and applications.</p>
                </div>
                <div className="w-full flex justify-between sm:text-lg font-medium">
                    <h4 className="underline underline-offset-8">Learn more about our approach</h4>
                    <p>(Scroll)</p>
                </div>
            </div>
        </div>
        </>
    )
}