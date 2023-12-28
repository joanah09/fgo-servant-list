import { useState } from "react";
import { ServantData } from "../../hooks/useServants";
import ServantCard from "./ServantCard";

interface ServantListProps {
  servant: ServantData[] | null;
}

const ServantList = ({ servant }: ServantListProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <p>Loading Servants...</p>}
      {servant && servant.length > 0 ? (
        servant.map((item) => <ServantCard key={item.id} servant={item} />)
      ) : (
        <p>No Servants found.</p>
      )}
    </>
  );
};

export default ServantList;
