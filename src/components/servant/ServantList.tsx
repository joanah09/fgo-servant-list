import { useState } from "react";
import { ServantSort } from "../../hooks/useServants";
import ServantCard from "./ServantCard";

interface ServantListProps {
  data: ServantSort[] | null;
}

const ServantList = ({ data }: ServantListProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && <p>Loading Servants...</p>}
      {data && data.length > 0 ? (
        data.map((item) => <ServantCard key={item.id} servant={item} />)
      ) : (
        <p>No Servants found.</p>
      )}
    </>
  );
};

export default ServantList;
