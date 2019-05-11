import VesselPreview from './VesselPreview';
import ListPagination from './ListPagination';
import React from 'react';

const VesselList = React.memo(props => {
  if (!props.vessels) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.vessels.length === 0) {
    return (
      <div className="article-preview">
        No vessels are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.vessels.map(vessel => {
          return (
            <VesselPreview vessel={vessel} key={vessel.id} />
          );
        })
      }

      <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} />
    </div>
  );
});

export default VesselList;
