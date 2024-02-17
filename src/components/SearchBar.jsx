import { useState } from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar({setResults}){
    const [input, setInput] = useState("");
    const SUBSCRIPTION_KEY = process.env['BING_SUBSCRIPTION_KEY']
    console.log(SUBSCRIPTION_KEY);
    const doSearch = (value) => {
        fetch("https://api.bing.microsoft.com//v7.0/search?q=" + encodeURIComponent(value), 
        {
            method:"GET", 
            headers: {
                "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY,
                "Content-Type": "application/json",
        }}).then(response => response.json())
            .then(data => {
                
                const results = (data && data.webPages && data.webPages.value) || [];
                setResults(results);
            });
    }
    
    const textChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
        doSearch(value);
    }
    
    return(
        <div className="cell small-12 medium-6 large-6">
            <div className="input-wrapper">
                <FaSearch id="search-icon" />
                <input type="text" className="search-input" name="search-bar" placeholder="Type your search text ..." value={input} onChange={textChangeHandler} />
            </div>
        </div>
    );
}

export default SearchBar;