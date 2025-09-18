import React, { useEffect, useState } from 'react'
type Item = { id: number; picture: string };

const items: Item[] = [
  { id: 1, picture: "https://picsum.photos/300/200?random=1" },
  { id: 2, picture: "https://picsum.photos/300/200?random=2" },
  { id: 3, picture: "https://picsum.photos/300/200?random=3" },
  { id: 4, picture: "https://picsum.photos/300/200?random=4" },
  { id: 5, picture: "https://picsum.photos/300/200?random=5" },
  { id: 6, picture: "https://picsum.photos/300/200?random=6" },
  { id: 7, picture: "https://picsum.photos/300/200?random=7" },
  { id: 8, picture: "https://picsum.photos/300/200?random=8" },
];

const SelectGame = () => {
    
    const [data, setData] = useState<Item[]>([])

    useEffect(()=>{
        const duplicatedArray = items.flatMap(item=>[item,item])
        const shuffeledArray = shuffle(duplicatedArray)
        setData(shuffeledArray)
    },[])

    function shuffle<T>(arr: T[]): T[] {
        let a = [...arr]; 
        for (let i = a.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
  return (
    <div className='m-10'>
        <div className='grid grid-cols-4 grid-rows-4 gap-3'>
            {data.map((item)=>(
                <div className='rounded-md border-2 cursor-pointer'>
                    <img className='h-full w-full' src={item.picture} alt='image'/>
                </div>
            ))}
        </div>

    </div>
  )
}

export default SelectGame