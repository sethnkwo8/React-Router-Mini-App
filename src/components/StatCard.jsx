export function StatCard({ stat, title }) {
    return (
        <div className="border border-black rounded-lg mt-12 flex flex-col items-center ">
            <div>
                <ion-icon className="text-4xl" name="people-outline"></ion-icon>
            </div>
            <div className="font-bold text-4xl py-2">
                {stat}
            </div>
            <div className="py-2 text-2xl">
                {title}
            </div>
        </div>
    )
}
