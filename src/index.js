import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDJYRmMEzB_YUSLKK-A5I3xc2eNOL11C_8'; 

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('tesla');

    }
    
    videoSearch(term) {
        
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // this.setState({ videos }); // ES6, when key and property are same variable name
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });

    }
    
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)} /> */}
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}


/** 
    `App` - Functional Based Component
    No State maintanance in this component, only used for taking some information and spitting out some JSX. 
    Functional component can contain a class based component. 
*/

/*const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );

}*/

ReactDOM.render(<App />, document.querySelector('.container'));
