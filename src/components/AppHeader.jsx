import { DashboardOutlined, BookmarksOutlined, StarOutlined, Search } from '@material-ui/icons';
import { StyledHeader, FilterButton } from './AppHeader.style';
import { InputBase } from '@material-ui/core';

const AppHeader = ({ changeFilter, searchValue }) => (
  <StyledHeader>
    <div className="title">SLOTS</div>
    <div className="filters">
      <FilterButton onClick={changeFilter('all')}>
        <DashboardOutlined />
        ALL
      </FilterButton>
      <FilterButton onClick={changeFilter('new')}>
        <BookmarksOutlined />
        NEW
      </FilterButton>
      <FilterButton onClick={changeFilter('top')}>
        <StarOutlined />
        TOP
      </FilterButton>
      <div className="search-background">
        <InputBase
          placeholder="Search"
          onChange={searchValue}
        />
        <Search className="icon" />
      </div>
    </div>
  </StyledHeader>
)

export default AppHeader;