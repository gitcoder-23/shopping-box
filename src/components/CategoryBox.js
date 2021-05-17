import React from 'react'
// import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectedBox } from '../store/boxSlice'

const CategoryBox = () => {
    const dispatch = useDispatch();
    const boxValue = useSelector((boxState) => boxState.boxName.selectedBoxType);
    // console.log('boxData', boxData)

    const selectBox = (type) => {
        dispatch(selectedBox(type))
    }

    return (
        <div className="container whole-container">
            <h1>Choose Your Box Color</h1>
            <div className="row">
                 
                    <div className="col-sm-6 col-md-6 col-lg-6">

                        <div className={`div-inner white-box ${boxValue === 'white' ? 'border-red' : ''}`} onClick={() => selectBox('white')}>
                            <div className="div-inn">
                                <p className="div-inp">
                                    <h2>White Box</h2>
                                </p>
                            </div>
                        </div>
                    </div>
                   
                
                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <div className={`div-inner black-box ${boxValue === 'black' ? 'border-red' : ''}`} onClick={() => selectBox('black')}>
                            <div className="div-inn">
                                <p className="div-inp">
                                    <h2>Black Box</h2>
                                </p>
                            </div>
                        </div>
                    </div>
                
            </div>
            
        </div>
    )
}

export default CategoryBox
