import {useState,useEffect} from 'react'

function Search ({}) {
let [searchValue,setSearchValue] = useState([])

useEffect(()=>{
    localStorage.setItem('searchValue', JSON.stringify(searchValue));
},[searchValue])
    return(
        <label class="relative  w-2/4  center ml-5">
                <input 
                onChange={(e) => setSearchValue(e.target.value)}
                class="placeholder:text-slate-400 block text-sky-900 bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-lg" 
                placeholder="Введіть назву закладу" 
                type="text" 
                name="search"/>
        </label>
    )
}

export default Search