import ListErrors from './../ListErrors';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
// import Select from 'react-select'; 
import {
  ADD_CERTIFICATE_PAGE_LOADED,
  ADD_CERTIFICATE_PAGE_UNLOADED,
  ADD_CERTIFICATE,
  UPDATE_FIELD_CERTIFICATE,
} from '../../constants/actionTypes';

const mapStateToProps = state => ({ 
  certificate: state.certificate,
  vessels: state.common.vessels
 });

const mapDispatchToProps = dispatch => ({
  // this.props.onLoad( Promise.all([agent.Vessels.all()]) );

  onLoad: () =>
    dispatch({ type: ADD_CERTIFICATE_PAGE_LOADED, payload: agent.Vessels.all() }),
  onChangeField: (evt) =>
    dispatch({ type: UPDATE_FIELD_CERTIFICATE, key: evt.target.name, value: evt.target.value }),
  onSubmit: (certificate) =>
    dispatch({ type: ADD_CERTIFICATE, payload: agent.Certificates.save(certificate) }),
  onUnload: () =>
    dispatch({ type: ADD_CERTIFICATE_PAGE_UNLOADED })
});

class AddCertificate extends React.PureComponent {
  constructor() {
    super();
    this.onChangeField = ev => this.props.onChangeField(ev);
    this.submitForm = ev => {
      ev.preventDefault();
      this.props.onSubmit(this.props.certificate);
    };
  }

  componentDidMount(){
    this.props.onLoad();
  }

  componentWillUnmount() {
    this.props.onUnload(); 
  }

  render() {
    const { vessel_id, name, description, group, issue, expiry, renewals } = this.props.certificate;
    const options = this.props.vessels && this.props.vessels.map(item => {
      return <option key={item.id} value={item.id}>{item.name}</option>;
    });

    // if(!options) 
    //   return "";

    return (
      <div className="auth-page">
         <div className="container page">
           <div className="row">

             <div className="col-md-6 offset-md-3 col-xs-12">
               <h1 className="text-xs-center">ADD CERTIFICATE</h1>

               <ListErrors errors={this.props.errors} />

               <form onSubmit={this.submitForm}>
                 <fieldset>
                   
                  <fieldset className="form-group">
                    <label>Select Vessel</label>
                    <select value={vessel_id} onChange={this.onChangeField} name="vessel_id">
                      <option value="">...select...</option>
                      {options}
                    </select>
                  </fieldset>

                   <fieldset className="form-group">
                    <label>Name</label>
                     <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Name"
                      value={name}
                      name="name"
                      onChange={this.onChangeField} 
                      />
                  </fieldset>

                  <fieldset className="form-group">
                    <label>Description</label>
                     <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Description"
                      value={description}
                      name="description"
                      onChange={this.onChangeField} 
                      />
                  </fieldset>

                  <fieldset className="form-group">
                    <label>Group</label>
                     <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Group"
                      value={group}
                      name="group"
                      onChange={this.onChangeField} 
                      />
                  </fieldset>

                  <fieldset className="form-group">
                    <label>Issue Date</label>
                     <input
                      className="form-control form-control-lg"
                      type="date"
                      placeholder="Issue Date"
                      value={issue}
                      name="issue"
                      onChange={this.onChangeField} 
                      />
                  </fieldset>

                  <fieldset className="form-group">
                    <label>Expiry Date</label>
                     <input
                      className="form-control form-control-lg"
                      type="date"
                      placeholder="Expiry Date"
                      value={expiry}
                      name="expiry"
                      onChange={this.onChangeField} 
                      />
                  </fieldset>

                  <fieldset className="form-group">
                    <label>Renewals</label>
                     <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Renewal Frequency"
                      value={renewals}
                      name="renewals"
                      onChange={this.onChangeField} 
                      />
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Add Certificate
                  </button>

                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCertificate);