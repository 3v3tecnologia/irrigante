import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function News() {
    return(
        <>
        {Array(3).fill("").map((_, i) => (
            <Box key={i} padding='6' boxShadow='lg' bg='white' mb="8px">
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Box>
        ))}
        </>
        
    )
}