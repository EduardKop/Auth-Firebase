function SearchBtn() {
    const submitSearchBtn = event =>{
        const SearchValue = JSON.parse(localStorage.getItem('searchValue'));
        console.log(SearchValue)
    }
    return(
        <button 
        onClick={submitSearchBtn}
        class="bg-transparent ml-5 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-slate-300 hover:border-transparent rounded">
        🥐
        </button>
    )

}

export default SearchBtn