export default function ProductLoading() {
    return (
        <div className="content-box flex flex-col gap-6 animate-pulse">
            {/* Top summary skeleton */}
            <div className="flex flex-col gap-4 justify-between bg-base-100 border border-base-300 rounded-2xl p-5 sm:flex-row">
                <div className="flex items-center gap-4">
                    <div className="w-20 h-20 bg-base-300 rounded-2xl" />
                    <div className="space-y-2">
                        <div className="h-6 w-36 bg-base-300 rounded" />
                        <div className="h-4 w-28 bg-base-300 rounded" />
                        <div className="h-4 w-48 bg-base-300 rounded" />
                    </div>
                </div>
                <div className="w-32 h-24 bg-base-300 rounded-2xl" />
            </div>

            {/* Bottom details skeleton */}
            <div className="bg-base-100 border border-base-300 rounded-2xl p-5 space-y-6">
                <div className="h-6 w-40 bg-base-300 rounded" />
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                    <div className="h-28 bg-base-200 rounded-2xl" />
                    <div className="h-28 bg-base-200 rounded-2xl" />
                    <div className="h-28 bg-base-200 rounded-2xl" />
                </div>
                <div className="h-6 w-48 bg-base-300 rounded" />
                <div className="h-64 bg-base-200 rounded-2xl" />
            </div>
        </div>
    );
}
