import axios from "axios"

const Location = ({ location, setLocation }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = e.target.newLocation.value

    const URL = `https://rickandmortyapi.com/api/location/${newLocation}`

    axios.get(URL)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err))
  }

  return (
    <section className="grid gap-4 p-10 justify-items-center text-center">
      {/*imput de busqueda */}
  
      <form onSubmit={handleSubmit} className="max">
        <div className=" flex rounded-md overflow-hidden ">
          <input id="newLocation" className="text-black p-auto outline-none px-2 " placeholder="Type a location Id.." type="text" />
          <button className="p-flex bg-green-600 p-2 gap-2 border-2">Search <i className='bx bx-search'></i></button>
        </div>
      </form>
  
      {/*info location */}
      <section className=" p-flex max-w-max rounded-lg  grid grid-cols-4 items-center justify-center
       gap-1 rounder-3xl  bg-green-500 p-auto p-2 border-green-700 border-4 "> 
        <h2 className="text-flex">{location?.name}</h2>
        <h2 className="text-flex">Type: {location?.type}</h2>
        <h2 className="text-flex">Dimension: {location?.dimension}</h2>
        <h2 className="text-flex">Population: {location?.residents.length}</h2>
    
      </section>
    </section>
  )
}

export default Location