import React from 'react';

const CertificateList = React.memo(props => {
  if (!props.certificates) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (props.certificates.length === 0) {
    return (
      <div className="article-preview">
        No certificates are here... yet.
      </div>
    );
  }

  return (
    <div>
      {
        props.certificates.map( item => {
          return (
            // <VesselPreview vessel={vessel} key={vessel.id} />
            <div>
              {item.name}
            </div>
          );
        })
      }

      {/* <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} /> */}
    </div>
  );
});

export default CertificateList;
