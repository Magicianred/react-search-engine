import {Col} from 'react-bootstrap'

export default function PostCards({postList=[]}){
    return (
        <>
            {postList.map((element,index) => {
                if(element){
                    return (
                        <Col className="postcards border mt-5" md="4">
                            <p className="h2 pt-3">
                                {element.title}
                            </p>
                            <hr className="hr"/>
                            <p className="p-3">
                                {element.body}
                            </p>
                        </Col>
                    )
                }

                return null
            })}
        </>
    )
}