import { useState } from "react"
import SeatContainer from "../components/movie/seat-container"

export interface ITier{
    id: number
    price: number
    color: string
    columns: number
}

export interface ISeat{
    name: string
    tier_id: number
    booked: boolean
}

const seatData: ITier[] =[
    {
        id:0,
        price:10,
        color:'#3694cf',
        columns: 4
    },
    {
        id:1,
        price:24,
        color:'#cfcf36',
        columns: 3
    }
] 



const MovieBooking = () => {
    const [bookedSeats, setBookedSeats] = useState<string[]>([])
    const [selectedSeats, setSelectedSeats] = useState<string[]>([])
    const [total, setTotal] = useState(0)
    const onSelected = (seat: ISeat) =>{   
        setTotal(total=> total+ seatData.find(item=> item.id == seat.tier_id)!.price)
        setSelectedSeats(seats => [...seats, seat.name])
    }

    const onDisselect = (seat: ISeat)=>{
        setTotal(total=> total- seatData.find(item=> item.id == seat.tier_id)!.price)
        setSelectedSeats(selectedSeats.filter(item=> item !== seat.name))
    }

    const onSeatClick = (seat: ISeat, isSelect: boolean)=>{
        isSelect? onSelected(seat): onDisselect(seat)
    }
    const onBook = ()=>{
        setBookedSeats(selectedSeats)
        setSelectedSeats([])
        setTotal(0)
    }
  return (
    <div>
        {seatData.map((item, index)=>(
            <div key={item.id}>
                <SeatContainer bookedSeats={bookedSeats} tier={item} onSelect={onSeatClick} start_index={index == 0? 0: seatData.filter((_,i)=>i!==index).reduce((acc, curr)=>acc+curr.columns,0)}/>
            </div>
        ))}
        <div className="m-5 flex justify-between items-center">
            Total: ${total}
            <button className="cursor-pointer bg-blue-500 rounded-md px-3 py-1 text-white" onClick={onBook}>
                Book Now
            </button>
        </div>
    </div>
  )
}

export default MovieBooking