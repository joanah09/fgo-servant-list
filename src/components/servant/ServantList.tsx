import { useEffect, useState } from "react";
import useServants, { Servant } from "../../hooks/useServants";
import ServantCard from "./ServantCard";
import Filter from "../navbar/Filter";

const ServantList = () => {
  const [data, setData] = useState<Servant[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const servantsArray = useServants();
        const flattenedServants = servantsArray.flat();
        setData(flattenedServants);
      } catch (error) {
        console.error(`Error fetching data.`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const [sortedData, setSortedData] = useState<Servant[] | null>(null);

  const handleSort = (sortedServants: Servant[]) => {
    setSortedData(sortedServants);
  };

  return (
    <>
      <Filter data={data} onSort={handleSort} />
      {sortedData ? (
        sortedData.map((item) => <ServantCard key={item.id} servant={item} />)
      ) : data ? (
        data.map((item) => <ServantCard key={item.id} servant={item} />)
      ) : (
        <p>Loading Servants...</p>
      )}
    </>
  );
};

export default ServantList;
