import { useState, useRef, useEffect } from "react";
import { ServantData, ServantDataDetailed } from "../../hooks";
import ServantCard from "./ServantCard";
import { Box, SkeletonText } from "@chakra-ui/react";

interface ServantListProps {
  servant: ServantData[] | null;
  onServantClick: (id: number) => void;
  detailedServantData: ServantDataDetailed[] | null;
}

const ServantList = ({
  servant,
  onServantClick,
  detailedServantData,
}: ServantListProps) => {
  const [initialCard, setInitialCard] = useState(20);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const handleServantClick = (id: number) => {
    onServantClick(id);
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setInitialCard((prev) => prev + 20);
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  return (
    <>
      {servant && servant.length > 0
        ? servant
            .slice(0, initialCard)
            .map((item) => (
              <ServantCard
                key={item.id}
                servant={item}
                onClick={() => handleServantClick(item.id)}
                detailedServantData={detailedServantData}
              />
            ))
        : Array.from({ length: initialCard }, (_, index) => (
            <Box key={index} boxShadow="md" height="85px" bg="whiteAlpha.100">
              <SkeletonText mt={4} px={3} noOfLines={3} skeletonHeight="3" />
            </Box>
          ))}
      <div ref={sentinelRef}></div>
    </>
  );
};

export default ServantList;
