import { ProductSkeleton } from "@/app/components/ProductSkeleton";

export default function CategoryLoading() {
    return (
        <div className="content-box space-y-10">
            {/* Header skeleton */}
            <div className="flex items-center gap-3 bg-base-100 border border-base-300 rounded-2xl p-5 animate-pulse">
                <div className="w-14 h-14 bg-base-300 rounded-2xl" />
                <div className="flex flex-col gap-2 flex-1">
                    <div className="h-6 bg-base-300 rounded w-32" />
                    <div className="h-4 bg-base-300 rounded w-48" />
                </div>
            </div>

            {/* Product grid skeleton */}
            <ProductSkeleton />
        </div>
    );
}
