import React from 'react';
import CatalogsHeader from '../Catalogs-section/CatalogsHeader';
import CatalogsStats from '../Catalogs-section/CatalogsStats';
import CatalogsFilter from '../Catalogs-section/CatalogsFilter';
import CatalogsCards from '../Catalogs-section/CatalogsCards';
import CatalogsPages from '../Catalogs-section/CatalogsPages';
export default function Catalogs() {
  
  return (
    <>

    <CatalogsHeader />
    <CatalogsStats />
    <CatalogsFilter />
    <CatalogsCards/>
    <CatalogsPages />

    </>
    
  );
}