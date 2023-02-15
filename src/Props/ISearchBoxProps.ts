export interface ISearchBoxProps {
    updateSearchQuery?: (queryToUpdate: any) => void;
    showHideAdvanceFilters?: (showHide: any, isToggle: any) => void;
    onSearchBoxKeyPressHandler: (e: any) => void;
    onSearchBoxKeyDownHandler?: (e: any) => void;
    onSearchBoxChangeHandler?: (e: any) => void;
    GetParameterByNameFromQueryString?: (name: any, url?: any) => string | null;
    voiceSearchEnabled: boolean;
    suggestionsEnabled: boolean;
    advancedSearchQuery: boolean;
    style?: any
}