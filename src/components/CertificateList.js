import React from 'react';

const CertificateList = React.memo(props => {
  if (props.loading) {
    return (
      <div className="article-preview">Loading...</div>
    );
  }

  if (!props.certificates || props.certificates.length===0) {
    return (
      <div className="article-preview">
        No certificates are here... yet.
      </div>
    );
  }

  const items = props.certificates.map( (item,index) => {
    return (
      <tr key={item.id}>
        <td style={{border: '1px solid #CCC'}}>{index+1}</td>
        <td style={{border: '1px solid #CCC'}}>{item.name}</td>
        <td style={{border: '1px solid #CCC'}}>{item.issue}</td>
        <td style={{border: '1px solid #CCC'}}>{item.expiry}</td>
        <td style={{border: '1px solid #CCC'}}>{item.state}</td>
      </tr>
    );
  });

  return (
    <div className="article-preview">
      <table style={{width: '100%', borderCollapse: 'collapse'}}>
        <thead>
          <tr>
          <th style={{border: '1px solid #CCC'}}>SN</th>
          <th style={{border: '1px solid #CCC'}}>Name</th>
          <th style={{border: '1px solid #CCC'}}>Issue</th>
          <th style={{border: '1px solid #CCC'}}>Expiry</th>
          <th style={{border: '1px solid #CCC'}}>Status</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>

      {/* <ListPagination
        pager={props.pager}
        articlesCount={props.articlesCount}
        currentPage={props.currentPage} /> */}
    </div>
  );
});

export default CertificateList;
