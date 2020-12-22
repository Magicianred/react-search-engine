import {FormControl} from 'react-bootstrap'

export default function SearchBar(props){
    return (
        <FormControl
         key="random1"
         className="mt-5"
         placeholder="Search something..." 
         value={props.keyword}
         onChange={(e) => props.onChange(e.target.value)}
        />
    )
}