import React from 'react'
import styled from 'styled-components'
import Trending from './Trending'
import TrendingThree from './TrendingThree'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaRegNewspaper, FaAngellist, FaLeanpub, FaSeedling } from 'react-icons/fa'
import { GrYoga } from 'react-icons/gr'
import TrendingNews from './TrendingNews';
import TrendingLifestyle from './TrendingLifestyle';
import TrendingHealth from './TrendingHealth';
import TrendingHowto from './TrendingHowto';

const HomeBanner = () => {
    return (
        <Wrapper>
            <Tabs>
                <TabList>
                    <Tab><FaRegNewspaper className="icon-tabs"></FaRegNewspaper>News</Tab>
                    <Tab><FaAngellist className="icon-tabs"></FaAngellist>Lifestyle</Tab>
                    <Tab><GrYoga className="icon-tabs"></GrYoga>Health</Tab>
                    <Tab><FaLeanpub className="icon-tabs"></FaLeanpub>HowTo</Tab>
                    <Tab><FaSeedling className="icon-tabs"></FaSeedling>Growing</Tab>
                </TabList>
                <TabPanel>
                    <TrendingNews />
                </TabPanel>
                <TabPanel>
                    <TrendingLifestyle />
                </TabPanel>
                <TabPanel>
                    <TrendingHealth />
                </TabPanel>
                <TabPanel>
                    <TrendingHowto />
                </TabPanel>
                <TabPanel>
                    <TrendingThree />
                </TabPanel>
            </Tabs>
        </Wrapper>
    )
}



const Wrapper = styled.div`
@media screen and (min-width: 768px) and (max-width: 1023px) {
    ul.react-tabs__tab-list {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        width: 85vw;
        max-width: var(--max-width);
        margin: 0 auto;
        margin-bottom: 2rem;
    }
}
@media screen and (max-width: 767px) {
    ul.react-tabs__tab-list li {
        font-size: 12px;
        margin: 0 auto;
        text-align: center;
    }
    ul.react-tabs__tab-list {
        grid-template-columns: 1fr 1fr 1fr;
    }
    ul.react-tabs__tab-list {
        padding-bottom: 1rem;
        grid-gap: 1rem;
    }
    .icon-tabs {
        margin-right: 5px;
        margin-bottom: 0px;
    }
    .react-tabs {
        width: 85vw;
        max-width: var(--max-width);
        margin: 0 auto;
        margin-bottom: 4rem;
    }
}
`

export default HomeBanner

