import React, { useEffect, useState } from "react";
import useServants, { Servant } from "../hooks/useServants";
import {
  Box,
  Card,
  CardBody,
  Image,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

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
        console.error(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(data);
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
      console.error(`Error loading more data: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {data ? (
        data.map((item, index) => (
          <Card borderRadius={2} overflow="hidden" key={item.id}>
            <CardBody key={`${item.id}-${index}`}>
              <Flex alignItems="center">
                <Image src={item.face} alt={item.name} />
                <Box marginLeft={4}>
                  {[...Array(item.rarity)].map((_, starIndex) => (
                    <StarIcon key={starIndex} color="yellow.400" />
                  ))}
                  <Heading fontSize="1xl">{item.name}</Heading>
                  <Text textStyle="p">{item.className}</Text>
                </Box>
              </Flex>
            </CardBody>
          </Card>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ServantList;
