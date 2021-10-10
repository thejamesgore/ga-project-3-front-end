// const Search = () => {
//   return <div>Hello i'm the search bar!</div>
//   console.log('>>>>>>>> This is the search!')
// }

const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search countries!</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search countries!"
      name="s"
    />
    <button type="submit">Search</button>
  </form>
)

export default SearchBar
