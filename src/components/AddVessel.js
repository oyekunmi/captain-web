import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  ADD_VESSEL_PAGE_LOADED,
  ADD_VESSEL_PAGE_UNLOADED,
  ADD_VESSEL,
  UPDATE_FIELD_VESSEL,
} from '../constants/actionTypes';

const mapStateToProps = state => ({ 
  vessel: state.vessel
});

const mapDispatchToProps = dispatch => ({
  onLoad: () =>
    dispatch({ type: ADD_VESSEL_PAGE_LOADED }),
  onChangeField: (evt) =>
    dispatch({ type: UPDATE_FIELD_VESSEL, key: evt.target.name, value: evt.target.value }),
  onSubmit: (vessel) =>
    dispatch({ type: ADD_VESSEL, payload: agent.Vessels.save(vessel) }),
  onUnload: () =>
    dispatch({ type: ADD_VESSEL_PAGE_UNLOADED })
});

class AddVessel extends React.PureComponent {
  constructor() {
    super();
    this.onChangeField = ev => this.props.onChangeField(ev);
    this.submitForm = ev => {
      ev.preventDefault();
      this.props.onSubmit(this.props.vessel);
    };
  }

  componentDidMount(){
    this.props.onLoad();
  }

  componentWillUnmount() {
    this.props.onUnload(); 
  }

  render() {
    const { name, description } = this.props.vessel;
    
    return (
      <div className="auth-page">
         <div className="container page">
           <div className="row">

             <div className="col-md-6 offset-md-3 col-xs-12">
               <h1 className="text-xs-center">ADD VESSEL</h1>

               <ListErrors errors={this.props.errors} />

               <form onSubmit={this.submitForm}>
                 <fieldset>
                   
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

                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Add Vessel
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

export default connect(mapStateToProps, mapDispatchToProps)(AddVessel);