import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
    InstantSearch,
    Hits,
    SearchBox,
    RefinementList,
    RatingMenu,
    Pagination,
    HitsPerPage,
    Menu,
    ClearRefinements,
    NumericMenu,
    Stats,
} from 'react-instantsearch-dom'
import hit from './Hit'
import 'instantsearch.css/themes/algolia.css';

const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
)

export default function () {
    return (
        <InstantSearch searchClient={searchClient} indexName="strains">
            <div className="posts-center">
                <article>
                    <section>
                        <div className="padding-sidebar">
                            <div class="f-title-3">
                                <h4 class="strains-filter-header">Strain Type</h4>
                                <div class="underline-footer">
                                </div>
                            </div>
                            <RefinementList
                                attribute="category"
                                className="ais-RefinementList-list"
                            />
                        </div>
                        <div className="padding-sidebar">
                            <div class="f-title-3">
                                <h4 class="strains-filter-header">THC Content</h4>
                                <div class="underline-footer">
                                </div>
                            </div>
                            <NumericMenu
                                attribute="thc"
                                items={[
                                    { label: '0%', end: 0 },
                                    { label: '0% - 10%', start: 0, end: 10 },
                                    { label: '10% - 20%', start: 10, end: 20 },
                                    { label: '20% - 30%', start: 20 },
                                ]}
                            />
                        </div>
                        <div className="padding-sidebar">
                            <div class="f-title-3">
                                <h4 class="strains-filter-header">CBD Content</h4>
                                <div class="underline-footer">
                                </div>
                            </div>
                            <NumericMenu
                                attribute="cbd"
                                items={[
                                    { label: '0%', end: 0 },
                                    { label: '0% - 10%', start: 0, end: 10 },
                                    { label: '10% - 20%', start: 10, end: 20 },
                                    { label: '20% - 30%', start: 20 },
                                ]}
                            />
                        </div>
                        <div className="padding-sidebar">
                            <div class="f-title-3">
                                <h4 class="strains-filter-header">Typical Effects</h4>
                                <div class="underline-footer">
                                </div>
                            </div>
                            <Menu attribute="effects" />
                        </div>
                        <div className="padding-sidebar">
                            <div class="f-title-3">
                                <h4 class="strains-filter-header">Common Usage</h4>
                                <div class="underline-footer">
                                </div>
                            </div>
                            <Menu attribute="usages" />
                        </div>
                        <div className="padding-sidebar">
                            <div class="f-title-3">
                                <h4 class="strains-filter-header">Ratings</h4>
                                <div class="underline-footer">
                                </div>
                            </div>
                            <RatingMenu attribute="rating" />
                        </div>
                        <ClearRefinements />
                    </section>
                </article>
                <article className="section-headline">
                    <div className="grid-filter">
                        <SearchBox
                            className="ais-SearchBox-form"
                            autoFocus
                            translations={{
                                placeholder: 'Looking for strains?'
                            }}
                        />
                        <Stats />
                        <HitsPerPage
                            defaultRefinement={24}
                            items={[
                                { value: 4, label: 'Show 4 hits' },
                                { value: 24, label: 'Show 24 hits' },
                            ]}
                        />

                    </div>
                    <section>
                        <div className={"styles.container"}>
                            <div className={"styles.search_panel"}>
                                <div className="ais-Hits-list">
                                    <Hits hitComponent={hit} />
                                </div>
                            </div>
                        </div>
                        <Pagination />
                    </section>
                </article>
            </div>
        </InstantSearch>

    )
}
