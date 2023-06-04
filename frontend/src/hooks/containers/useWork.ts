import { useEffect, useState } from "react";

import { Works } from "../../@types/Works";
import { client } from "../../services/client";

export function useWork() {
  const [works, setWorks] = useState<Works[]>([]);
  const [filterWork, setFilterWork] = useState<Works[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works" &&  published == true][0...100]';

    const fetchWorks = () => {
      client
        .fetch(query)
        .then((data: Works[]) => {
          setWorks(data);
          setFilterWork(data);
        })
        .catch((error) => {
          console.error("Error fetching works:", error);
        });
    };
    return fetchWorks;
  }, []);
  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  const setUseWork = {
    works,
    setWorks,
    filterWork,
    setFilterWork,
    activeFilter,
    setActiveFilter,
    animateCard,
    setAnimateCard,
    handleWorkFilter,
  };
  return { setUseWork };
}
