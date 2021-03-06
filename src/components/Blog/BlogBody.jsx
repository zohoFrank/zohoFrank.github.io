/**
 * Created by Zoho on 16/9/16.
 */
// todo

import ArticleContainer from './BlogBody/ArticleContainer';
import CatalogPanel from './BlogBody/CatalogPanel';
import SearchBar from 'src/components/assets/searchBar/SearchBar';

/** ****************** Component ****************** */
const BlogBody = () =>
  (<div className="blog-body">
    <SearchBar placeHolder="search anything" />
    <ArticleContainer />
    <CatalogPanel />
   </div>);

/** ****************** Exports ****************** */
export default BlogBody;
