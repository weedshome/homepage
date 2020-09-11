import React from 'react'
import styled from 'styled-components'
import Trending from './Trending'
import TrendingThree from './TrendingThree'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaList, FaMailBulk, FaRegChartBar } from 'react-icons/fa'
import TrendingNews from './TrendingNews';
import TrendingLifestyle from './TrendingLifestyle';
import TrendingHealth from './TrendingHealth';
import TrendingHowto from './TrendingHowto';

const HomeBanner = () => {
    return (
        <Wrapper>
            <Tabs>
                <TabList>
                    <Tab><FaList className="icon-tabs"></FaList>News</Tab>
                    <Tab><FaMailBulk className="icon-tabs"></FaMailBulk>Lifestyle</Tab>
                    <Tab><FaRegChartBar className="icon-tabs"></FaRegChartBar>Health</Tab>
                    <Tab><FaRegChartBar className="icon-tabs"></FaRegChartBar>How-To</Tab>
                    <Tab><FaRegChartBar className="icon-tabs"></FaRegChartBar>Growing</Tab>
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

