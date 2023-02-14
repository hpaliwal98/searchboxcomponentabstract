import * as React from 'react';
import { ISearchBoxProps } from '../Props/ISearchBoxProps';
import { ISearchBoxStates } from '../States/ISearchBoxStates';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMicrophone, faMinus, faPlus, faSliders } from '@fortawesome/free-solid-svg-icons';
// import { CommonHelper } from '../Helpers/CommonHelper';
// import { FeatureHelper } from '../Helpers/FeatureHelper';
// import { Constants } from '../Helpers/Constants';
// import { Configuration } from '../Helpers/Configuration';

export default class SearchBoxComponent extends React.Component<ISearchBoxProps, ISearchBoxStates> {

    /**
     * the constructor of SearchBox
     * @param props 
     * @param state 
     */

    public constructor(props: ISearchBoxProps, state: ISearchBoxStates) {
        super(props);
        this.populateStateInfo(props);
    }

    /**
     * populate states
     * @param props 
     */
    private populateStateInfo(nextProps) {
        var currentSearchTerm = this.props.GetParameterByNameFromQueryString('q');
        currentSearchTerm = currentSearchTerm ? currentSearchTerm : '*';
        this.state = {
            suggestionsEnabled: nextProps.suggestionsEnabled,
            showSuggestions: false,
            voiceSearchEnabled: nextProps.voiceSearchEnabled,
            advancedSearchQuery: nextProps.advancedSearchQuery,
            searchQueryText: currentSearchTerm,
            styles: nextProps.styles
        }
    }

    /**
     * componentWillReceiveProps method
     * @param nextProps 
     */
    componentWillReceiveProps(nextProps) {
        this.populateStateInfo(nextProps);
    }

    /**
     * Method to get trigger on key press event in Search Box.
     * @param e event of current component
     */
    private onComponentKeyPressHandler(e) {
        if (e.key == 'Enter') {
            // const url = new URL(location.href);
            // url.searchParams.set('q', e.target.value);
            // url.searchParams.set('k', e.target.value);
            // history.replaceState(null, '', url.toString());
            this.props.onSearchBoxKeyPressHandler(e);
            this.setState({
                showSuggestions: false
            });
            // this.state.store.dispatch(this.state.Actions.currentSearchTerm(e.target.value));
            this.props.updateSearchQuery(e.target.value);
        }
    }

    /**
     * Method to get trigger on key down event in Search Box.
     * @param e event of current component
     */
    private onSearchBoxKeyDownHandler(e) {
        this.props.onSearchBoxKeyDownHandler(e);
        // this.setState({
        //     showSuggestions: true,
        // });
        // this.props.showHideAdvanceFilters(false, false);
    }

    /**
     * Method to get trigger on change event in Search Box.
     * @param e event of current component
     */
    private onSearchBoxChangeHandler(e) {
        this.setState({
            searchQueryText: e.target.value,
            showSuggestions: e.target.value ? true : false
        });
        //alert($('#unifiedSearchBox').val()); // jquery test
    }

    /**
     * Method to show/hide advance query preparation component.
     */
    private showHideAdvanceFilters() {
        this.setState({
            showSuggestions: false,
        });
        this.props.showHideAdvanceFilters(true, true);
    }

    public render(): React.ReactElement<ISearchBoxProps> {
        return (
            <div className={this.state.styles.searchBox}>
                <input className={this.state.styles.searchInputBox}
                    id='unifiedSearchBox'
                    type='text'
                    placeholder='Search...'
                    onKeyPress={(e) => this.onComponentKeyPressHandler(e)}
                    onKeyDown={(e) => this.onSearchBoxKeyDownHandler(e)}
                    onChange={(e) => this.onSearchBoxChangeHandler(e)}
                    value={this.state.searchQueryText}
                ></input>
                {this.state.suggestionsEnabled && this.state.showSuggestions &&
                    <ul className={this.state.styles.suggestions}>
                        <li> <div className={this.state.styles.groupHeading}>Suggestions</div>
                            <ul className={this.state.styles.subSuggestions}>
                                <li id='SearchBoxSuggestion'>service now</li>
                                <li>enterprise search</li>
                                <li>test</li>
                                <li>who is who</li>
                                <li>tes suggestion</li>
                                <li>well</li>
                            </ul>
                        </li>
                        <li> <div className={this.state.styles.groupHeading}>Business</div>
                            <ul className={this.state.styles.subSuggestions}>
                                <li>service now</li>
                                <li>enterprise search</li>
                                <li>test</li>
                                <li>who is who</li>
                                <li>tes suggestion</li>
                                <li>well</li>
                            </ul>
                        </li>
                        <li> <div className={this.state.styles.groupHeading}>Function</div>
                            <ul className={this.state.styles.subSuggestions}>
                                <li>service now</li>
                                <li>enterprise search</li>
                                <li>test</li>
                                <li>who is who</li>
                                <li>tes suggestion</li>
                                <li>well</li>
                            </ul>
                        </li>
                    </ul>
                }
                <FontAwesomeIcon icon={faMagnifyingGlass} title='Search' className={this.state.styles.searchIcon}></FontAwesomeIcon>
                {this.state.voiceSearchEnabled &&
                    <FontAwesomeIcon icon={faMicrophone} title='Voice Search' className={this.state.styles.voiceSearchIcon}></FontAwesomeIcon>
                }
                {this.state.advancedSearchQuery &&
                    <FontAwesomeIcon
                        icon={faSliders}
                        title='Prepare custom query'
                        onClick={() => this.showHideAdvanceFilters()}
                        className={this.state.styles.advanceSearch}></FontAwesomeIcon>
                }
                {/* <div className={this.state.styles.mesIcons}>
                    {FeatureHelper.IsFeatureEnabled(Constants.Features.NavigationToOfficeSearch) &&
                        <img className={this.state.styles.officeIcon} src={CommonHelper.GetCurrentSiteUrl() + Configuration.OfficeLogoUrl} alt='Modern Enterprise Search - Office' title='Search in Office for Enterprise scope' onClick={() => CommonHelper.NavigateToTargetLink(Configuration.OfficeSearchEndPointUrl, 'office')}></img>
                    }
                    {FeatureHelper.IsFeatureEnabled(Constants.Features.NavigationToBingSearch) &&
                        <img className={this.state.styles.bingIcon} src={CommonHelper.GetCurrentSiteUrl() + Configuration.BingLogoUrl} alt='Modern Enterprise Search - Bing' title='Search in Bing for Enterprise scope' onClick={() => CommonHelper.NavigateToTargetLink(Configuration.BingSearchEndPointUrl, 'bing')}></img>
                    }
                </div> */}
            </div >
        );
    }
}

