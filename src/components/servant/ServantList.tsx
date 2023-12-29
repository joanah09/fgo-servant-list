import { useState } from "react";
import { ServantData } from "../../hooks/useServants";
import ServantCard from "./ServantCard";

interface ServantListProps {
  servant: ServantData[] | null;
  onServantClick: (id: number) => void;
}

const ServantList = ({ servant, onServantClick }: ServantListProps) => {
  const [loading, setLoading] = useState(false);

  const handleServantClick = (id: number) => {
    onServantClick(id);
  };

  return (
    <>
      {loading && <p>Loading Servants...</p>}
      {servant && servant.length > 0 ? (
        servant.map((item) => (
          <ServantCard
            key={item.id}
            servant={item}
            onClick={() => handleServantClick(item.id)}
          />
        ))
      ) : (
        <p>No Servants found.</p>
      )}
    </>
  );
};

export default ServantList;
