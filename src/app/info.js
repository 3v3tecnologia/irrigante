import { Badge, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Irrigation from "./irrigation";
import News from "./news";
import Config from "./config";
import Faq from "./faq";

export default function Info() {
    return (
        <Tabs isFitted variant="enclosed" p={4} h="100%" overflow="auto">
            <TabList mb='1em'>
                <Tab>💧 Irrigação</Tab>
                {/* TO DO: Deixar a Badge dinâmica */}
                <Tab>📰 Notícias <Badge ml={1}>Novas</Badge></Tab>
                <Tab>⚙️ Ajustes</Tab>
                <Tab>💬 Ajuda</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Irrigation />
                </TabPanel>
                <TabPanel>
                    <News />
                </TabPanel>
                <TabPanel>
                    <Config />
                </TabPanel>
                <TabPanel>
                    <Faq />
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}