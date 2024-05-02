const GenreFilter = ({ genres, movies, setMoviesData }) => {
  const handleClick = (genre) => {
    let data = movies.filter((movie) => movie.genre === genre);
    setMoviesData(data);
    console.log("Filtered by", genre);
  };
  return (
    <div className="genre_box">
      <h1 className="second_font">Filter By Genre</h1>
      <div className="genre_btns_div">
      {genres?.map((genre, index) => (
        <button key={index} onClick={() => handleClick(genre)} onMouseEnter={(e) => e.target.style.backgroundColor = 'gray'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#DBD7D6'}>
          {genre}
        </button>
      ))}
      </div>
    </div>
  );
};

export default GenreFilter;
