import './App.css'
import { Fragment, useState } from 'react'
export default function App() {
  const [selected, setSelected] = useState(new Set())
  function isSelected(item) {
    return selected.has(item)
  }

  function clickItem(e){
    const item = e.target.textContent
    if (isSelected(item)) {
      const newSelect = new Set(selected)
      newSelect.delete(item)
      setSelected( newSelect)
    } else {
      const newSelect = new Set(selected)
      newSelect.add(item)
      setSelected( newSelect)
      
    }
  }


  // Implement a feature to allow item selection with the following requirements:
  // 1. Clicking an item selects/unselects it.
  // 2. Multiple items can be selected at a time.
  // 3. Make sure to avoid unnecessary re-renders of each list item in the big list (performance).
  // 4. Currently selected items should be visually highlighted.
  // 5. Currently selected items' names should be shown at the top of the page.
  //
  // Feel free to change the component structure at will.

  const List = ({ items }) => (
    <Fragment>
      <ul className="List">
        {items.map(item => (
          <li key={item.name} onClick={ (e)=>clickItem(e) }
              className={`List__item List__item--${item.color} 
               ${isSelected(item.name) ? 'highlightborder' : 'normal'} `}>
            {item.name}
          </li>
        ))}
      </ul>
    </Fragment>
  );

  // ---------------------------------------
  // Do NOT change anything below this line.
  // ---------------------------------------

  const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
  const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
  const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];

  const items = sizes.reduce(
    (items, size) => [
      ...items,
      ...fruits.reduce(
        (acc, fruit) => [
          ...acc,
          ...colors.reduce(
            (acc, color) => [
              ...acc,
              {
                name: `${size} ${color} ${fruit}`,
                color,
              },
            ],
            [],
          ),
        ],
        [],
      ),
    ],
    [],
  );

  return (
    <List items={items} />

  )
}
