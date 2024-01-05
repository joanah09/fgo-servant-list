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
  const handleServantClick = (id: number) => {
    onServantClick(id);
  };

  return (
    <>
      {servant && servant.length > 0 ? (
        servant.map((item) => (
          <ServantCard
            key={item.id}
            servant={item}
            onClick={() => handleServantClick(item.id)}
            detailedServantData={detailedServantData}
          />
        ))
      ) : (
        <Box boxShadow="md" height="85px" bg="whiteAlpha.100">
          <SkeletonText mt={4} px={3} noOfLines={3} skeletonHeight="3" />
        </Box>
      )}
    </>
  );
};

export default ServantList;
