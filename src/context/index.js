"use client";

import {
  getByGender,
  getById,
  getShirtsByFilter,
  getShirts,
  getShirtsByName,
} from "@/app/api/api";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({});

export function AppWrapper({ children }) {
  const [searching, setSearching] = useState("");
  const [filteringByGender, setFilteringByGender] = useState(false);
  const [filtering, setFiltering] = useState(false);
  const [shirt, setShirt] = useState({});
  const [shirts, setShirts] = useState([]);
  const [isLoadingShirt, setIsLoadingShirt] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    const data = await getShirts();
    setSearching("");
    setShirts(data);
    setIsLoading(false);
    setFilteringByGender("");
    setFiltering(null);
  };

  const getByFilter = async ({ type, value }) => {
    setIsLoading(true);

    const response = await getShirtsByFilter({
      type,
      value,
      filteringByGender: filteringByGender,
    });
    setShirts(response);
    setFiltering(type);
    setIsLoading(false);
  };

  const getShirtByGender = async (g) => {
    setIsLoading(true);
    try {
      const data = await getByGender(g);
      setShirts(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setFiltering(false);
      setSearching("");
      setFilteringByGender(g);
    }
  };

  const getShirtById = async (id) => {
    try {
      setIsLoadingShirt(true);
      setIsOpen(true);
      const data = await getById(id);
      setShirt(data);
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingShirt(false);
    }
  };

  const handleShirtSearch = async (search) => {
    setSearching(search);
    setIsLoading(true);
    const results = await getShirtsByName({
      search,
      filteringByGender: filteringByGender,
    });
    setShirts(results);
    setIsLoading(false);
  };

  const handleClose = () => setIsOpen(false);

  const openMobileNav = () => setIsOpenMobileNav(true);

  const closeMobileNav = () => setIsOpenMobileNav(false);

  return (
    <AppContext.Provider
      value={{
        shirts,
        shirt,
        isLoading,
        isLoadingShirt,
        isOpen,
        isOpenMobileNav,
        openMobileNav,
        closeMobileNav,
        searching,
        setSearching,
        handleClose,
        handleShirtSearch,
        getData,
        getByFilter,
        getShirtById,
        getShirtByGender,
        filteringByGender,
        filtering,
        setFilteringByGender,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
