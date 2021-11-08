import { React, useState } from 'react'
import Categories from './components/Categories';
import Menu from './components/Menu';
import items from './data/Data';
import Header from './components/Header';

const allCategories =['all',...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all'){
       setMenu(items)
       return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenu(newItems);
  }

  return (
    <main>
      <section className='menu-section'>
        <Header />
        <Categories categories={categories}filterItems={filterItems} />
        <Menu items={menu}/>
      </section>
    </main>
  );
}

export default App;
