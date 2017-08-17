/**
 * Created by Zoho on 16/9/16.
 */
// todo

import React from 'react';

/**
 * @props title     {string}
 * @props archive   {string}
 * @props intro     {string}
 * @props tagList   {string[]}
 */
export default class ArticleCard extends React.Component {

  render() {
    const { title, archive, intro, tagList } = this.props;
    const tagElems = tagList.map((tag) => {
      return <div class="article-tags">{tag}</div>;
    });

    return (
        <div className="article-card">
          <div className="article-category">
            <i class="fa fa-archive" aria-hidden="true"></i>
            <div class="article-archive">{archive}</div>
            <i class="fa fa-tags" aria-hidden="true"></i>
            {tagElems}
          </div>
          <div class="article-title"><p>{title}</p></div>
          <div class="article-summary"><p>{intro}</p></div>
          <div class="article-time">2016-09-14</div>
        </div>
    );
  }
}
