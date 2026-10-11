import { ProductSkeleton } from "./components/ProductSkeleton";

export default function Loading() {
    return (
        <div className="content-box space-y-6">
            <div className="h-8 bg-base-300 rounded w-48 animate-pulse" />
            <ProductSkeleton />
        </div>
    );
}
