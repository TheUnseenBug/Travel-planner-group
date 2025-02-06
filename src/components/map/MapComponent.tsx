import { FC, Suspense, lazy } from "react";

// Lazy load the map-related components
const LazyMap = lazy(() => import("./MapContent"));

const Map: FC = () => {
  return (
    <Suspense fallback={<div>Loading map...</div>}>
      <LazyMap />
    </Suspense>
  );
};

export default Map;
