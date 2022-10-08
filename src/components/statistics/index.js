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

    useEffect(() => {
        //set an interval
        const intervalId = setIntervalId(() => {
            setTextIndex ( i => (i + 1) % statistics.length)
            //leaving the interval at +1 goes above the number of arrays in the statistics hence the % to keep the interval within the length of the array
        })
    }, 4000);
    //setting a timer - set time to run every 3 seconds

    return( 
        <StatisticsContainer>
            <Slide direction = "left" >
            <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                <StatisticsText>
                    {text[textIndex]}
                </StatisticsText>
            </Box>
            </Slide>
        </StatisticsContainer>
    )
}
 
//container