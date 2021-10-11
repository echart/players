import { useEffect, useState } from "react";

const useOrderBy = (defaultOrder = 'name') => {
  const [orderBy, setOrderBy] = useState(defaultOrder);
  const [isAsc, setIsAsc] = useState(true);

  useEffect(() => {
    setIsAsc(true);
  }, [orderBy]);

  const direction = (dir) => dir ? 'asc' : 'desc';
  const toggleDirection = () => setIsAsc((oldState) => !oldState);

  return { setOrderBy, orderBy, toggleDirection, direction: direction(isAsc) };
}

export default useOrderBy;
