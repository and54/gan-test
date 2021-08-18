import { Component } from "react";
import { AppContainer, ElementsContainer } from './App.style';
import list from '../config/list.json';
import { SlotList, AppHeader } from '../components';

export default class SlotsList extends Component {

  constructor(props) {
    super(props);
    this.state = { list, currentFilter: 'all', searchValue: '' };
  }

  changeFilter = currentFilter => () => this.setState({ currentFilter });

  searchValue = event => this.setState({ searchValue: event.target.value });

  filteredList = () => {
    const filter = this.state.currentFilter;
    return this.filterSearch(filter === 'all' ? 
      this.state.list :
      this.state.list.filter(item => 
        (filter === 'new' && item.new) || (filter === 'top' && item.favorite)
      )
    );
  }

  filterSearch = list => (
    !this.state.searchValue ? list :
    list.filter(item => 
      !!(item.characters.indexOf(this.state.searchValue) + 1)
    )
  )

  setFavorite = id => () => {
    const list = [...this.state.list];
    const item = list.find(item => item.id === id);
    item.favorite = !item.favorite;
    this.setState({ list });
  }

  render() {
    const itemSize = 180;
    const isTop = this.state.currentFilter === 'top';
    return (
      <AppContainer>
        <ElementsContainer>
          <AppHeader 
            changeFilter={this.changeFilter}
            searchValue={this.searchValue}
          />
          <div className="grid">
            <SlotList 
              itemSize={itemSize}
              isTop={isTop}
              list={this.filteredList()}
              setFavorite={this.setFavorite}
            />
          </div>
          
        </ElementsContainer>
      </AppContainer>
    )
  }
}

