import Table from "../common/Table";
import ProductDetails from '../../public/products.json';

function Output() {
    return(
        <div className="output">
            <div className="output-header">
                <div className="output-header-left">Output</div>
            </div>
            <div className="table-container">
                <Table data={ProductDetails} />
            </div>
        </div>
    );
}

export default Output;