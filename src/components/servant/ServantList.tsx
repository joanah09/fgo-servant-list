import { useState } from "react";
import { ServantData, ServantDataDetailed } from "../../hooks";
import ServantCard from "./ServantCard";

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
  const [loading, setLoading] = useState(false);

  const handleServantClick = (id: number) => {
    onServantClick(id);
  };

  return (
    <>
      {/* {loading && <p>Loading Servants...</p>} */}
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
        <p>Loading Servants...</p>
      )}
    </>
  );
};

export default ServantList;
