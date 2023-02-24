import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '../room-item';
import { RoomWrapper } from './style';

const SectionRooms = memo((props) => {
    const {goodPriceInfo} = props;
  return (
    <RoomWrapper>
        <ul className='room-list'>
            {
                goodPriceInfo.list?.slice(0,8).map(item => {
                    return <RoomItem itemData={item} key={item.id} />
                })
            }
        </ul>
    </RoomWrapper>
  )
})

SectionRooms.propTypes = {}

export default SectionRooms