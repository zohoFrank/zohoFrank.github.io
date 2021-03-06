/**
 * Created by hao.zuo on 2017/8/15.
 */
// betterdo Refactor

import { connect } from 'react-redux';

import SearchBar from '../assets/searchBar/SearchBar';
import MediaCardContainer from './GalleryBody/MediaCardContainer';
import { searchGalleryAction } from 'actions/shared/searchAction';

@connect()
export default class GalleryBody extends React.Component {

    render () {
        return (
            <div className="gallery-body">
                <SearchBar placeHolder="image keyword"
                           onInputHandler={this.onInputHandler.bind(this)}/>
                <MediaCardContainer/>
            </div>
        );
    }

    /******************** SearchBar Dispatcher *******************/
    onInputHandler (event) {
        this.props.dispatch(searchGalleryAction(event.target.value));
    }
}
