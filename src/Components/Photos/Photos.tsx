import './Photos.scss';
import products  from '../../Data/mock.json'
import { useState } from 'react';

const { Product } = products
function Photos() {

    const [principal, setPrincipal] = useState(0)
    const [modal, setModal] = useState(false)

    function decrease() {
        if (principal >= 1) {
            setPrincipal(principal - 1)
        } else {
            setPrincipal(3)
        }
    }
    function increase() {
        if (principal <= 2) {
            setPrincipal(principal + 1)
        } else {
            setPrincipal(0)
        }
    }

    return (
        <div className="Photos">
            <div className={`${modal === true ? "activeModal" : ""}`}>
                <button  className={`${modal === true ? "close_button" : "invisible"}`}>
                    <svg onClick={() => setModal(false)} className='close' width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
                </button>
                <button onClick={decrease} className={`${modal === true ? "previous" : "previous invisible_arrow"}`}>
                    <svg className='button' width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </button>

                <img onClick={() => setModal(!modal)} className="big_image" src={Product.images[principal].url} alt="Principal" />
                
                <button onClick={increase} className={`${modal === true ? "next" : "next invisible_arrow"}`}>
                    <svg className='button' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </button>
            </div>
            <ul className={`photo_list ${modal === true ? "photo_list-modal" : ""}`}>
                <li className='photo_list-item' onClick={() => setPrincipal(0)}>
                    <img className={`small_image ${principal === 0 ? "active" : "" }`} src={Product.miniatures.miniature_1} alt="" />
                </li>
                <li className='photo_list-item' onClick={() => setPrincipal(1)}>
                    <img className={`small_image ${principal === 1 ? "active" : "" }`} src={Product.miniatures.miniature_2} alt="" />
                </li>
                <li className='photo_list-item' onClick={() => setPrincipal(2)}>
                    <img className={`small_image ${principal === 2 ? "active" : "" }`} src={Product.miniatures.miniature_3} alt="" />
                </li>
                <li className='photo_list-item' onClick={() => setPrincipal(3)}>
                    <img className={`small_image ${principal === 3 ? "active" : "" }`} src={Product.miniatures.miniature_4} alt="" />
                </li>
            </ul>
        </div>
    );
}

export default Photos;
