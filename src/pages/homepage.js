import {useState, useEffect} from 'react'
import {Container,Row} from 'react-bootstrap'
import axios from 'axios'

// Components
import PostCards from '../components/PostCards'
import SearchBar from '../components/SearchBar'

// Context apis
import {PostStore} from '../contexts/postStore'

export default function Homepage(){

    const [posts,setPosts] = useState([])
    const [postsDefault,setPostsDefault] = useState([])
    const [input, setInput] = useState('')

    const updateInput = async (input) => {
        console.log(input)
        const filtered = postsDefault.filter(element => {
         return element.title.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setPosts(filtered);
    }

    useEffect(() => {
        axios({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "get"
        }).then((res) => {
            setPosts(res.data)
            setPostsDefault(res.data)
        })
    },[])


    return (
        <PostStore.Provider>
            <Container>
                <p className="display-4 text-center mt-5">
                    React.js Searchbar
                </p>
                <SearchBar
                input={input} 
                onChange={updateInput}
                />
                <Row>
                    <PostCards postList={posts}/>
                </Row>
            </Container>
        </PostStore.Provider>
    )
}