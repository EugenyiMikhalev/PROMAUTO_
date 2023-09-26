import React from 'react'

export default function FilterControls({filter, setFilter}) {

  return (
    <div className='filterControls'>
        <div className='filterControls__counter'>Filter: {filter.length}
            <button 
                onClick={() => {setFilter([])}}
                className='filterControls__btn__clear-filter'>Clear all</button>
        </div>
        <div className='filterControls__chosenFilters'>Name :&nbsp; 
        {
            //Выводим все выбранные имена (после последнего не ставим запятую)
            filter.map((filterItem, i) => i === (filter.length-1) 
            ?  <span className='filterControls__chosenFilter' key={i}>{filterItem.value}</span> 
            :  <span className='filterControls__chosenFilter' key={i}>{filterItem.value},&nbsp;</span>)
        }
        </div>
    </div>
  )
}
