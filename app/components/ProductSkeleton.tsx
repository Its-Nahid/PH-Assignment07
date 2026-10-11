export function ProductSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    key={i}
                    className="bg-base-100 border border-base-300 rounded-2xl p-4 flex flex-col gap-3 animate-pulse"
                >
                    <div className="flex gap-3 items-center">
                        <div className="w-12 h-12 bg-base-300 rounded-2xl" />
                        <div className="flex flex-col gap-2 flex-1">
                            <div className="h-4 bg-base-300 rounded w-3/4" />
                            <div className="h-3 bg-base-300 rounded w-1/3" />
                        </div>
                    </div>
                    <div className="flex justify-between items-end pt-2">
                        <div className="flex flex-col gap-1">
                            <div className="h-3 bg-base-300 rounded w-16" />
                            <div className="h-5 bg-base-300 rounded w-20" />
                        </div>
                        <div className="h-6 w-16 bg-base-300 rounded-full" />
                    </div>
                </div>
            ))}
        </div>
    );
}
