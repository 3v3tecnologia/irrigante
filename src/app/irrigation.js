import { Box, Divider, Input, Select, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";

export default function Irrigation() {
    return(
        <>
            <Box>
                <Stat>
                    <StatLabel>Lâmina recomendada</StatLabel>
                    <StatNumber>💧11,70 mm</StatNumber>
                    <StatHelpText>Calculada em 26/02/2024</StatHelpText>
                </Stat>
            </Box>
            <Divider />
            <Select mt="16px" placeholder='Selecione a cidade'>
                <option value='option1'>Cidade 1</option>
                <option value='option2'>Cidade 2</option>
                <option value='option3'>Cidade 3</option>
            </Select>
            <Select mt="16px" placeholder='Selecione a estação desejada'>
                <option value='option1'>Estação 1</option>
                <option value='option2'>Estação 2</option>
                <option value='option3'>Estação 3</option>
            </Select>
            <Select mt="16px" placeholder='Selecione o tipo de cultura'>
                <option value='option1'>Cultura 1</option>
                <option value='option2'>Cultura 2</option>
                <option value='option3'>Cultura 3</option>
            </Select>
            <Input mt="16px" placeholder='Data do plantio' />
        </>
    )
}