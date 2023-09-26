import './styles/App.css';
import React, {useState, useMemo, useEffect} from 'react';
import Header from './components/Header'
import Page from './components/Page';

import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';

function App() {

  
  // массив объектов - карточки юзеров
  const [usercards, setUsercards] = useState( [])
  // фильтр для вывода карточек юзеров
  const [filter, setFilter] = useState([])
  // все возможные значения фильтра - имена юзеров
  const [names, setNames] = useState([])
  // флаг для затемнения страницы при открытии карточки
  const [darkBg, setDarkBg] = useState(false)
  
  const [shouldRenderContent, setShouldRenderContent] = useState(false)
  // загрузка карточек с сервера (axios)
  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const posts = await PostService.getAll();
    
    setUsercards(posts);
    setNames([...new Set(posts.map(usercard => usercard.name))]);
    setShouldRenderContent(true)
    if(!postError) console.log('Данные получены')
  })
  useEffect(() => {
    fetchPosts();
    
  }, [])

  // затемнение страницы при открытии карточки
  useMemo(() => {
    if(darkBg) {
      document.querySelector(':root').style.setProperty('--darkBg-display', 'inherit')
    } else {
      document.querySelector(':root').style.setProperty('--darkBg-display', 'none')
    }
  }, [darkBg])

  
  // фильтрация карточек
  const sortedUsercards = useMemo(() => {
    if(filter.length) {
      // Получем массив выбранных имён
      const choosenNames = filter.map(filterItem => filterItem.value);
      let result = [];
      // Для каждого выбранного имени получаем соответствующие карточки
      choosenNames.forEach(choosenName => {
          result = [...result, ...usercards.filter((usercard) => usercard.name === choosenName)]
        });
      return result;
      }
    // Если фильтр пустой возвращаем все карточки
    return usercards;
},[filter, usercards]);


  return (
    <div className='App'>
      <Header/>
      {/* Вывод ошибки при получении данных с сервера */}
      {postError &&
        <h1>При получении данных произошла ошибка: ${postError}</h1>
      }
      {/* Если идет загрузка карточек с сервера, то выводится Loader */}
      {isPostsLoading 
        ?   <div style={{display: 'flex', justifyContent: 'center', paddingTop:'175px'}}> <Loader/> </div>
        : <Page  
            shouldRenderContent={shouldRenderContent}
            usercards={sortedUsercards} 
            filter={filter} 
            setFilter={setFilter} 
            names={names} 
            darkBg={darkBg} 
            setDarkBg={setDarkBg}
          />
      } 
    </div>
  );
}

export default App;