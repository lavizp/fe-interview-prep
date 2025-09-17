import type { ISeat, ITier } from "../../pages/movie";
import Seat from "./seat";

interface SeatContainerProps{
    start_index: number
    onSelect: (seat: ISeat, isSelect: boolean)=>void
    tier: ITier
    bookedSeats: string[]
}
function numToLetter(n: number){
  if (n < 0 || n > 25) throw new RangeError('0..25');
  return String.fromCharCode(65 + n);
}
const SeatContainer = ({tier, start_index, onSelect, bookedSeats}: SeatContainerProps) => {
    const getName = (row: number, column:number)=>{
        const letter = numToLetter(column)
        return letter + row
    }
  return (
    <div className='flex flex-col gap-3 m-5'>
        {[...Array(tier.columns)].map((_,i)=>(
            <div className="flex gap-2 justify-between" key={i}>
                {[...Array(12)].map((_,j)=>(
                    <Seat seat={{booked: bookedSeats.includes(getName(j+1, i+start_index)), name:getName(j+1, i+ start_index), tier_id: tier.id}} color={tier.color} onSelect={onSelect} key={j}/>
                ))}
            </div>
        ))}
    </div>
  )
}

export default SeatContainer