export interface ISearchBoxProps {
    updateSearchQuery: (queryToUpdate: any) => void;
    showHideAdvanceFilters: (showHide: any, isToggle: any) => void;
    onSearchBoxKeyPressHandler: (e: any) => void;
    onSearchBoxKeyDownHandler: (e: any) => void;
    onSearchBoxChangeHandler: (e: any) => void;
    GetParameterByNameFromQueryString: (name: any, url?: string) => string;
    voiceSearchEnabled: boolean;
    suggestionsEnabled: boolean;
    advancedSearchQuery: boolean;
    // store: any;
    styles: any;
    // Actions: any;
}