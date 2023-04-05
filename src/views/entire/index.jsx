import { fetchEntireDataAction } from "@/store/modules/entire/actionCreators";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./c-cpns/entire-filter";
import EntirePagination from "./c-cpns/entire-pagination";
import EntireRooms from "./c-cpns/entire-rooms";
import { EntireWrapper } from "./style";
import AppHeader from "@/components/app-header";

const Entire = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntireDataAction());
  }, [dispatch]);
  
  return (
    <EntireWrapper>
      <AppHeader />
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  );
};

export default Entire;
