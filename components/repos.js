import { useState } from 'react';
import useSWR from 'swr'
import fetcher from '../api/fetcher'

const initialUser = "danielschmitz";

export default function Repos(){
    const [userInput, setUserInput] = useState(initialUser);
    const [user,setUser] = useState(initialUser);
    
    const handleChange = (event) => {
       setUserInput(event.target.value)
      };

    const handleRefresh = () => {
        setUser(userInput)
    }
    
    return (<>
        <input 
            value={userInput} 
            type="text" 
            name="userInput"
            onChange={handleChange}
            ></input>
        <button onClick={handleRefresh}>Refresh</button>
       <ListRepos user={user}></ListRepos>
    </>)
}

function ListRepos (props) {
    const { data, error } = useSWR(`https://api.github.com/users/${props.user}/repos`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    if (data.message === "Not Found") return <div>User not found</div>

    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}