import React, { memo } from 'react'
import { ItemWrapper } from './style'
import PropTypes from 'prop-types'
import Rating from '@mui/material/Rating';

const RoomItem = memo((props) => {
  const {itemData} = props;
  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || "#39576a"}>
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className='desc'>{itemData.verify_info.messages.join("·")}</div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>
      </div>
      <div className='bottom'>
          <Rating readOnly 
            value={itemData.star_rating ?? 5} // ||会使得评分为0时，也赋值为5，所以用??判断前面是undefined或null时才使用后面的值
            precision={0.1} size="small" 
            sx={{fontSize: "14px", color: "#00848a", marginRight: "-2px"}}/>
          <span className='count'>{itemData.reviews_count}</span>
          { itemData.bottom_info && <span>·{itemData.bottom_info.content}</span> }
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
    itemData: PropTypes.object

}

export default RoomItem