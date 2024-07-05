import React, { useCallback, useEffect, useRef, useState } from 'react'
import './ProductList.css'
import Footer from '../../components/common/Footer/Footer.jsx'
import Header from '../../components/common/Header/Header.jsx'
// import useQuerystring from '../../services/hooks/useQuerystring.jsx'
// import { useSearchParams } from 'react-router-dom'
// import useFetch from '../../services/hooks/useFetch.jsx'
// import useClickOuside from '../../services/hooks/useClickOuside.jsx'
import TitlePath from './components/TitlePath/TitlePath.jsx'
import LeftBody from './components/LeftBody/LeftBody.jsx'
import RightBody from './components/RightBody/RightBody.jsx'
import ScrollUpButton from '../../components/common/ScrollUpButton/ScrollUpButton.jsx'

function ProductList() {
    // const optionRef = useRef();
    // const [searchParams] = useSearchParams()
    // console.log(searchParams.toString())
    // const [createQueryString, deleteQueryString] = useQuerystring()

    // const { data, isSuccess, isLoading, isError, error, fetchData } = useFetch(``)
    // const [selectedSort, setSelectedSort] = useState({
    //     name: '',
    //     value: ''
    // })
    // useEffect(() => {
    //     fetchData()
    // }, [searchParams])

    // const openSelectBox = () => {
    //     if (optionRef.current) {
    //         if (optionRef.current.style.display === 'none' || optionRef.current.style.display === '') {
    //             optionRef.current.style.display = 'block';
    //         } else {
    //             optionRef.current.style.display = 'none';
    //         }
    //     }
    // }

    // turn off select box when click outside
    // const { optionRef, clickOuside } = useClickOuside(() => setSelectBoxActive(false));

    // const handleSelectedSort = useCallback((name, value) => {
    //     openSelectBox()
    //     if (name && value) {
    //         setSelectedSort({
    //             name: name, value: value
    //         })
    //         createQueryString('sort', value)
    //     } else {
    //         setSelectedSort({ name: '', value: '' })
    //         deleteQueryString()
    //     }
    // }, [selectedSort, createQueryString, deleteQueryString])

    return (
        <div className='product-list-page'>
            <ScrollUpButton distances='300'/>
            <Header textColor='black' logoColor='black' scrollDown='200' />
            <div className="product-list-container">
                <TitlePath />
                <div className="product-list-main">
                    <LeftBody />
                    <RightBody />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProductList