import { AdaptiveGrid, AdaptiveGridItem } from 'adaptive-grid--react';
import { SlotItem } from './';

const SlotList = ({ itemSize, isTop, list, setFavorite }) => (
  <AdaptiveGrid
    baseWidth={itemSize}
    baseHeight={itemSize}
    contentGap={20}
  >
    {list.map(slot => {
      const size = +(slot.favorite && !isTop) * itemSize + itemSize;
      return (
        <AdaptiveGridItem
          key={slot.id}
          minWidth={size}
          minHeight={size}
        >
          <SlotItem
            image={`/assets/pic${slot.image}`}
            favorite={slot.favorite}
            setFavorite={setFavorite(slot.id)}
          />
        </AdaptiveGridItem>
      )
    }
    )}
  </AdaptiveGrid>
)

export default SlotList;