import React from 'react';
import { connect } from 'react-redux';
import { DELETE_CERTIFICATE } from '../constants/actionTypes';
import agent from '../agent';

const mapDispatchToProps = dispatch => ({
  deleteCertificate: (cert) =>
    dispatch({ type: DELETE_CERTIFICATE, payload: Promise.all( [agent.Certificates.delete(cert)] )}),
});

class CertificateList extends React.PureComponent{

  delete = (item) => {
    this.props.deleteCertificate(item);
  }

  render(){

    if (this.props.loading) {
      return (
        <div className="article-preview">Loading...</div>
      );
    }

    if (!this.props.certificates || this.props.certificates.length===0) {
      return (
        <div className="article-preview">
          No certificates are here... yet.
        </div>
      );
    }

    const items = this.props.certificates.map( (item,index) => {
      return (
        <tr key={item.id}>
          <td style={{border: '1px solid #CCC'}}>{index+1}</td>
          <td style={{border: '1px solid #CCC'}}>{item.name}</td>
          <td style={{border: '1px solid #CCC'}}>{item.issue}</td>
          <td style={{border: '1px solid #CCC'}}>{item.expiry}</td>
          <td style={{border: '1px solid #CCC'}}>{item.state}</td>
          <td style={{border: '1px solid #CCC'}}>
            <a  href="#/" value={item.id} onClick={()=>this.delete(item)}>Delete</a>
          </td>
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
            <th style={{border: '1px solid #CCC'}}>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>

        {/* <ListPagination
          pager={this.props.pager}
          articlesCount={this.props.articlesCount}
          currentPage={this.props.currentPage} /> */}
      </div>
    );
  }

}
export default connect(null, mapDispatchToProps)(CertificateList);
