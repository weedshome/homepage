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
                    <Tab><FaLeanpub className="icon-tabs"></FaLeanpub>How-To</Tab>
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



const Wrapper = styled.aside`
`

export default HomeBanner

