import { useEffect, useState } from "react";
import useServants, { Servant } from "../../hooks/useServants";
import ServantCard from "./ServantCard";

const ServantList = () => {
  const [data, setData] = useState<Servant[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const servantsArray = useServants();
        const flattenedServants = servantsArray.flat();
        const initialData = flattenedServants.slice(0, 20);
        setData(initialData);
      } catch (error) {
        console.error(`Error fetching data.`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        loadMoreData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data]);

  const loadMoreData = async () => {
    try {
      setLoading(true);
      const moreServantsArray = useServants();
      const flattenedMoreServants = moreServantsArray.flat();

      const nextPageData = flattenedMoreServants.slice(
        page * 20,
        (page + 1) * 20
      );

      setData((prevData) =>
        prevData ? [...prevData, ...nextPageData] : nextPageData
      );
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(`Error loading more data`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {data ? (
        data.map((item) => <ServantCard key={item.id} servant={item} />)
      ) : (
        <p>Loading Servants...</p>
      )}
    </>
  );
};

export default ServantList;
