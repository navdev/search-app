
function SearchResults({results})
{
    return(
        <div className="cell small-12 medium-12 large-12">
            <div className="search-results">
                {results.length === 0 && <div>No results found</div>}
                <ul>
                    {results.map((item) => {
                        return (<li key={item.id}><a href={item.url}>{item.name}</a></li>);
                    })}
                </ul>
            </div>
        </div>
    );
}

export default SearchResults;