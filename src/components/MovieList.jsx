const MovieList = ({ moviesData }) => {
  return (
    <div className="movie_box">
      <table>
        <colgroup>
          <col style={{ width: "65%" }} />
          <col style={{ width: "25%" }} />
          <col style={{ width: "10%" }} />
        </colgroup>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {moviesData?.map((movie, index) => (
            <tr
              key={index}
              style={{pointer:"cursor"}}
              onMouseEnter={(e) => (e.target.parentElement.style.backgroundColor = "#F3F0EF")}
              onMouseLeave={(e) => (e.target.parentElement.style.backgroundColor = "")}
            >
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
