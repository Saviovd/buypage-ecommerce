import BuySection from '../Buy_Section/Buy_Section';
import Photos from '../Photos/Photos';
import './Content.scss';

function Content() {
    return (
        <div className="Content">
            <Photos />
            <BuySection />
        </div>
    );
}

export default Content;
