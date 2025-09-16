import { useState } from 'react'
import type { ISeat } from '../../pages/movie'

interface SeatProps{
    seat: ISeat
    color: string,
    onSelect: (seat: ISeat,isSelect: boolean)=>void
}

const Seat = ({color, seat, onSelect }: SeatProps) => {
  const getColor = () => {
    if (seat.booked) return "#8a6866"
    if (selected) return "#53ad9d"
    return color
  }
    const [selected, setSelected] = useState(false)
  return (
    <div className={`rounded-t-2xl p-3 cursor-pointer`} 
    style={{ backgroundColor: getColor() }}
    onClick={()=>{
        onSelect(seat, !selected)
        setSelected(val=>!val)}}>
        {seat.name}
    </div>
  )
}

export default Seat