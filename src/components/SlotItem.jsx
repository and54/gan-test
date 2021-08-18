import { StyledSlot } from './SlotItem.style';
import { Icon } from '@material-ui/core';

const SlotItem = ({ image, favorite, setFavorite }) => {
  return (
    <StyledSlot image={image}>
      <div className="image-container" />
      <Icon className="icon" onClick={setFavorite}>
        {favorite ? 'star' : 'star_outline'}
      </Icon>
    </StyledSlot>
  );
}

export default SlotItem;