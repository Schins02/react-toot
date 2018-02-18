
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import YTSearch from 'youtube-api-search'
// Create a new component that will produce html

// Take this generted html and put it on the page

// const App = function() {
//     return <div>Hey</div>
// }

const API_KEY = 'AIzaSyCAP1V81e03fhChLYZArkmNSNPkErQsfUU';

// const App = () => {
//     return (
//         <div>
//             <SearchBar/>
//         </div>
//     );
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { videos: [] };
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>  {
            this.setState({ videos });
            // this.setState({ videos: videos })
        });
    }
    render() {
        return (
            <div>
                <SearchBar/>
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }

}

ReactDOM.render(<App/>, document.querySelector('.container'))