import UpdateProductForm from "../components/UpdateProductForm";
import { useParams } from "react-router-dom";

const UpdateFormPage = (props) => {
    const {_id} = useParams();

    return(
        <div>
            <h1>Test</h1>
            <UpdateProductForm _id={_id}/>
        </div>
    )
}

export default UpdateFormPage;