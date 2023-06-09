import axios from 'axios';
import { useEffect, useState } from 'react';

const Resident = ({residentUrl}) => {

const [residentInfo, setResidentInfo] = useState(null)

const statusStyles = {
    "Alive" : "bg-green-500",
    "Dead" : "bg-red-500",
    "unknown" : "bg-gray-400"
}

useEffect(() => {
    axios.get(residentUrl)
    .then(({data}) => setResidentInfo(data))
    .catch((err) => console.log(err))
},[])

  return (
    <article  className='border-2 border-green-500 rounded-lg'>
        <div className='relative'>
            <img src={residentInfo?.image} alt='' />
            <div className='bg-slate-800 p-2 rounded-md flex items-center gap-2 absolute bottom-3 left-[50%] -translate-x-1/2'>
                <div className={`h-3 aspect-square ${statusStyles[residentInfo?.status]} rounded-full`}></div>
                {residentInfo?.status }
            </div>
            </div>
        <section className="grid gap-1 p-3 justify-center border-t-2 border-green-500 text-left ">
            <h4 className='center text-center text-transform: uppercase font-family: font-mono'>{residentInfo?.name}</h4>
            <ul className='relative '>
                <li>
                    Species: <span className='text-center'>{residentInfo?.species}</span>
                </li>
                <li>
                    Origin: <span className='text-center' >{residentInfo?.origin.name}</span>
                </li>
                <li>
                    Times apper: <span className='text-center'>{residentInfo?.episode.length}</span>
                </li>
            </ul>
        </section>
    </article>
)
}

export default Resident