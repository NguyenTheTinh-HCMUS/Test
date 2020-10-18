import React from "react";

export default function StudentModal(props) {
    const [values, setvalues] = React.useState({
        code: "",
      fullName:"",
      address: "",
      years: ""

    })
    React.useEffect(() => {
       setvalues(props.item)
    }, [props.item])
  return (
    <div>
  
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                  { props.title }
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    code:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={values ? values.code : "" }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    fullName:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={values ? values.fullName : "" }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    address:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={values ? values.address : "" }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Year:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={values ? values.years : "" }
                  />
                </div>
                </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Send message
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
