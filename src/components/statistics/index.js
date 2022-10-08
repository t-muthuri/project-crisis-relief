//use this to display statistics or images
import { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { StatisticsContainer, StatisticsText } from "../../styles/statistics";
import { Slide } from "@mui/material";

const statistics = [
    "3.1 million people are facing hunger in Kenya",
    "ASALs are experiencing critical drought conditions",
    "Rains are less than 60% of the 40-year average"
];

export default function Statistics(){

    const [textIndex, setTextIndex] = useState(0);
    //giving a unique index to every text 
    const [showStatistics, setShowStatistics] = useState (true);

    useEffect(() => {

        setTimeout(() => {
            setShowStatistics(false)
        }, 5000);

        //set an interval
        const intervalId = setInterval(() => {
            setTextIndex ( i => (i + 1) % statistics.length)
            //leaving the interval at +1 goes above the number of arrays in the statistics hence the % to keep the interval within the length of the array

            setShowStatistics(true);

            setTimeout(() => {
                setShowStatistics(false)
            }, 5000);

        }, 3000)
        //setCount
        //setting a timer - set time to run every 3 seconds
        
        return () => {
            // cleanup
            clearInterval (intervalId);
        };
    }, []);
    

    return( 
        <StatisticsContainer>
            <Slide direction = "left" in={showStatistics} >
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                <StatisticsText>
                    {statistics[textIndex]}
                </StatisticsText>
            </Box>
            </Slide>
        </StatisticsContainer>
    )
}
 
//container