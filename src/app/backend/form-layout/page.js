export default function FormLayout() {
  return (
    <>

        <div className="app-main__inner">
          <div className="app-page-title">
            <div className="page-title-wrapper">
              <div className="page-title-heading">
                <div className="page-title-icon">
                  <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                </div>
                <div>
                  Analytics Dashboard
                  <div className="page-title-subheading">
                    This is an example dashboard created using build-in elements
                    and components.
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-12 col-xl-12">
              <div className="main-card mb-3 card">
                <div className="card-header">
                  Active Users
                  <div className="btn-actions-pane-right">
                    <div role="group" className="btn-group-sm btn-group">
                      <button className="active btn btn-focus">
                        Last Week
                      </button>
                      <button className="btn btn-focus">All Month</button>
                    </div>
                  </div>
                </div>

                <div className="card-body">


                  <form >
                    <div className="form-row">
                      <div className="col-md-6">
                        <div className="position-relative form-group">
                          <label>
                            Email
                          </label>
                          <input
                            name="email"
                            id="exampleEmail11"
                            placeholder="with a placeholder"
                            type="email"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="position-relative form-group">
                          <label>
                            Password
                          </label>
                          <input
                            name="password"
                            id="examplePassword11"
                            placeholder="password placeholder"
                            type="password"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="position-relative form-group">
                      <label>
                        Address
                      </label>
                      <input
                        name="address"
                        id="exampleAddress"
                        placeholder="1234 Main St"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="position-relative form-group">
                      <label>
                        Address 2
                      </label>
                      <input
                        name="address2"
                        id="exampleAddress2"
                        placeholder="Apartment, studio, or floor"
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-row">
                      <div className="col-md-6">
                        <div className="position-relative form-group">
                          <label>
                            City
                          </label>
                          <input
                            name="city"
                            id="exampleCity"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="position-relative form-group">
                          <label>
                            State
                          </label>
                          <input
                            name="state"
                            id="exampleState"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="position-relative form-group">
                          <label>
                            Zip
                          </label>
                          <input
                            name="zip"
                            id="exampleZip"
                            type="text"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="position-relative form-check">
                      <input
                        name="check"
                        id="exampleCheck"
                        type="checkbox"
                        className="form-check-input"
                      />
                      <label className="form-check-label">
                        Check me out
                      </label>
                    </div>
                    <button className="mt-2 btn btn-primary">Sign in</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}
