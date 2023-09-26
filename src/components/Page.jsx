import React from 'react';
import UsercardList from './UsercardList';
import UsercardFilter from './UsercardFilter';
import FilterControls from './FilterControls';

export default function Page({shouldRenderContent, usercards, filter, setFilter, names, darkBg, setDarkBg}) {
  return ( 
    <div className='page'>
        {/* Фильтр карточек */}
        <UsercardFilter
          value={filter}
          onChange = {selectedNamesArOfOb => setFilter(selectedNamesArOfOb)}
          defaultValue="Select name"
          names={names}
        />
        {/* Управление фильтром и вывод выбранных имён */}
        <FilterControls 
          filter={filter} 
          setFilter={setFilter}
        />
        {/* Список карточек */}{shouldRenderContent &&
        <UsercardList 
          usercards={usercards} 
          darkBg={darkBg} 
          setDarkBg={setDarkBg} 
        />}
    </div>
  )
}
