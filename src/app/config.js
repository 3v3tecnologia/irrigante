import { Box, FormControl, FormLabel, Input, Switch } from "@chakra-ui/react";

export default function Config() {
    return(
        <Box>
            <FormControl display='flex' alignItems='center'>
                <FormLabel htmlFor='dark-mode' mb='0'>
                    Modo escuro?
                </FormLabel>
                <Switch size="lg" id='dark-mode' />
            </FormControl>
            <Input mt="16px" placeholder='E-mail para recebimento de notícias' />
        </Box>
    )
}