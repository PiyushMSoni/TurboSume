import React, { useContext } from 'react'
import { Button } from '@chakra-ui/react';
import UserDataCollect from '../Components/UserDataCollect/UserDataCollect';
import UserDataCollect2 from '../Components/UserDataColllect2/UserDataCollect2';
import './BuilderArea.css'
import ResumeContext from '../Context/ResumeContext';
import PropagateLoader from "react-spinners/PropagateLoader";
import generatePDF from 'react-to-pdf';

const BuilderArea = (props) => {
    const { currentTheme , showComponent, setShowComponent, loading, handlePrint , componentRef } = useContext(ResumeContext)

    const handleSelectNewTemplate = () => {
        setShowComponent(!showComponent)
    }

    return (
        <>
            {loading && <PropagateLoader id='spinner' color="#319795" size={30} />}

            <div id='main-box' className="d-flex justify-content-between flex-wrap mt-4 mx-2">
                {(currentTheme === 'Theme1' || currentTheme === 'Theme3' || currentTheme === 'Theme4') && <UserDataCollect2/>}
                {currentTheme === 'Theme2' && <UserDataCollect/>}
                <div id='theme-box-border'>
                    {props.theme}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handlePrint}>Print</Button>
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={() => generatePDF(componentRef, {filename: 'resume.pdf'})}>Save</Button>
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} onClick={handleSelectNewTemplate}>Select Another Template</Button>
                <Button className='mx-2 my-5' colorScheme={'teal'} variant={'outline'} >Check ATS For SDE Position</Button>
            </div>
        </>
    )
}

export default BuilderArea
