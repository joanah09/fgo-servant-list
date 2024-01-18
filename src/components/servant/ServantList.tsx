import { useEffect, useRef, useState } from "react";
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
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Save scroll position
    const handleBeforeUnload = () => {
      localStorage.setItem("scrollPosition", String(window.scrollY));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Restore scroll position
    const savedScrollPosition = localStorage.getItem("scrollPosition");

    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          // Load more items when sentinel is in view
          setLoading(true);

          // Simulate loading data (replace this with actual data fetching)
          setTimeout(() => {
            // Set loading to false to enable loading more items again
            setLoading(false);
          }, 1000);
        }
      },
      { threshold: 1 }
    );

    if (sentinelRef.current) {
      intersectionObserver.observe(sentinelRef.current);
    }

    return () => {
      if (sentinelRef.current) {
        intersectionObserver.unobserve(sentinelRef.current);
      }
    };
  }, [loading]);

  return (
    <>
      {servant && servant.length > 0
        ? servant.map((item) => (
            <ServantCard
              key={item.id}
              servant={item}
              onClick={() => onServantClick(item.id)}
              detailedServantData={detailedServantData}
            />
          ))
        : Array.from({ length: 20 }, (_, index) => (
            <Box key={index} boxShadow="md" height="85px" bg="whiteAlpha.100">
              <SkeletonText mt={4} px={3} noOfLines={3} skeletonHeight="3" />
            </Box>
          ))}
      <div ref={sentinelRef}></div>
    </>
  );
};

export default ServantList;
