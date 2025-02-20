import { FC, Suspense, lazy } from "react";

interface MapProps {
  city: string;
}

const LazyMap = lazy(() => import("./MapContent"));

const Map: FC<MapProps> = ({ city }) => {
  return (
    <Suspense fallback={<div>Loading map...</div>}>
      <LazyMap city={city} />
    </Suspense>
  );
};

export default Map;
