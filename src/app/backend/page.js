"use client";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Bar, Doughnut, Line } from "react-chartjs-2";

// Register the necessary components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  BarElement
);

export default function Index() {
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Monthly Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Sales Data (Line Chart)",
      },
    },
  };

  // Doughnut Chart Data
  const doughnutData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Votes Distribution (Doughnut Chart)",
      },
    },
  };

  // Bar Chart Data
  const barData = {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Votes Distribution (Bar Chart)",
      },
    },
  };
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
            <div className="page-title-actions">
              <button
                type="button"
                data-toggle="tooltip"
                title="Example Tooltip"
                data-placement="bottom"
                className="btn-shadow mr-3 btn btn-dark"
              >
                <i className="fa fa-star"></i>
              </button>
              <div className="d-inline-block dropdown">
                <button
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className="btn-shadow dropdown-toggle btn btn-info"
                >
                  <span className="btn-icon-wrapper pr-2 opacity-7">
                    <i className="fa fa-business-time fa-w-20"></i>
                  </span>
                  Buttons
                </button>
                <div
                  role="menu"
                  aria-hidden="true"
                  className="dropdown-menu dropdown-menu-right"
                >
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="nav-link-icon lnr-inbox"></i>
                        <span>Inbox</span>
                        <div className="ml-auto badge badge-pill badge-secondary">
                          86
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="nav-link-icon lnr-book"></i>
                        <span>Book</span>
                        <div className="ml-auto badge badge-pill badge-danger">
                          5
                        </div>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link">
                        <i className="nav-link-icon lnr-picture"></i>
                        <span>Picture</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a disabled href="#" className="nav-link disabled">
                        <i className="nav-link-icon lnr-file-empty"></i>
                        <span>File Disabled</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-4">
            <div className="card mb-3 widget-content bg-midnight-bloom">
              <div className="widget-content-wrapper text-white">
                <div className="widget-content-left">
                  <div className="widget-heading">Total Orders</div>
                  <div className="widget-subheading">Last year expenses</div>
                </div>
                <div className="widget-content-right">
                  <div className="widget-numbers text-white">
                    <span>1896</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card mb-3 widget-content bg-arielle-smile">
              <div className="widget-content-wrapper text-white">
                <div className="widget-content-left">
                  <div className="widget-heading">Clients</div>
                  <div className="widget-subheading">Total Clients Profit</div>
                </div>
                <div className="widget-content-right">
                  <div className="widget-numbers text-white">
                    <span>$ 568</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card mb-3 widget-content bg-grow-early">
              <div className="widget-content-wrapper text-white">
                <div className="widget-content-left">
                  <div className="widget-heading">Followers</div>
                  <div className="widget-subheading">People Interested</div>
                </div>
                <div className="widget-content-right">
                  <div className="widget-numbers text-white">
                    <span>46%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
            <div className="card mb-3 widget-content bg-premium-dark">
              <div className="widget-content-wrapper text-white">
                <div className="widget-content-left">
                  <div className="widget-heading">Products Sold</div>
                  <div className="widget-subheading">Revenue streams</div>
                </div>
                <div className="widget-content-right">
                  <div className="widget-numbers text-warning">
                    <span>$14M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="mb-3 card">
              <div className="card-header-tab card-header-tab-animation card-header">
                <div className="card-header-title">
                  <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"></i>
                  Sales Report
                </div>
              </div>
              <div className="card-body">
                <div className="card mb-3 widget-chart widget-chart2 text-left w-100">
                  <div className="widget-chat-wrapper-outer">
                    <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                      <Doughnut data={doughnutData} options={doughnutOptions} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="mb-3 card">
              <div className="card-header-tab card-header">
                <div className="card-header-title">
                  <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"></i>
                  Bandwidth Reports
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active show" id="tab-eg-55">
                  <div className="widget-chart p-3">
                    <div>
                      <Line data={lineData} options={lineOptions} />
                    </div>
                    <div className="widget-chart-content text-center mt-5">
                      <div className="widget-description mt-0 text-warning">
                        <i className="fa fa-arrow-left"></i>
                        <span className="pl-1">175.5%</span>
                        <span className="text-muted opacity-8 pl-1">
                          increased server resources
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="widget-content">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-numbers fsize-3 text-muted">
                                  63%
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="text-muted opacity-6">
                                  Generated Leads
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper mt-1">
                              <div className="progress-bar-sm progress-bar-animated-alt progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  aria-valuenow="63"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="widget-content">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-numbers fsize-3 text-muted">
                                  32%
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="text-muted opacity-6">
                                  Submitted Tickers
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper mt-1">
                              <div className="progress-bar-sm progress-bar-animated-alt progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow="32"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="widget-content">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-numbers fsize-3 text-muted">
                                  71%
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="text-muted opacity-6">
                                  Server Allocation
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper mt-1">
                              <div className="progress-bar-sm progress-bar-animated-alt progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  aria-valuenow="71"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="widget-content">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-numbers fsize-3 text-muted">
                                  41%
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="text-muted opacity-6">
                                  Generated Leads
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper mt-1">
                              <div className="progress-bar-sm progress-bar-animated-alt progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  aria-valuenow="41"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-4">
            <div className="mb-3 card">
              <div className="card-header-tab card-header">
                <div className="card-header-title">
                  <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"></i>
                  Bandwidth Reports
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade active show" id="tab-eg-55">
                  <div className="widget-chart p-3">
                    <div>
                      <Bar data={barData} options={barOptions} />
                    </div>
                    <div className="widget-chart-content text-center mt-5">
                      <div className="widget-description mt-0 text-warning">
                        <i className="fa fa-arrow-left"></i>
                        <span className="pl-1">175.5%</span>
                        <span className="text-muted opacity-8 pl-1">
                          increased server resources
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-2 card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="widget-content">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-numbers fsize-3 text-muted">
                                  63%
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="text-muted opacity-6">
                                  Generated Leads
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper mt-1">
                              <div className="progress-bar-sm progress-bar-animated-alt progress">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  aria-valuenow="63"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="widget-content">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-numbers fsize-3 text-muted">
                                  32%
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="text-muted opacity-6">
                                  Submitted Tickers
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper mt-1">
                              <div className="progress-bar-sm progress-bar-animated-alt progress">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  aria-valuenow="32"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="widget-content">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-numbers fsize-3 text-muted">
                                  71%
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="text-muted opacity-6">
                                  Server Allocation
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper mt-1">
                              <div className="progress-bar-sm progress-bar-animated-alt progress">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  aria-valuenow="71"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="widget-content">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left">
                                <div className="widget-numbers fsize-3 text-muted">
                                  41%
                                </div>
                              </div>
                              <div className="widget-content-right">
                                <div className="text-muted opacity-6">
                                  Generated Leads
                                </div>
                              </div>
                            </div>
                            <div className="widget-progress-wrapper mt-1">
                              <div className="progress-bar-sm progress-bar-animated-alt progress">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  aria-valuenow="41"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-xl-4">
            <div className="card mb-3 widget-content">
              <div className="widget-content-outer">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="widget-heading">Total Orders</div>
                    <div className="widget-subheading">Last year expenses</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-success">1896</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card mb-3 widget-content">
              <div className="widget-content-outer">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="widget-heading">Products Sold</div>
                    <div className="widget-subheading">Revenue streams</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-warning">$3M</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="card mb-3 widget-content">
              <div className="widget-content-outer">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="widget-heading">Followers</div>
                    <div className="widget-subheading">People Interested</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-danger">45,9%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
            <div className="card mb-3 widget-content">
              <div className="widget-content-outer">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                    <div className="widget-heading">Income</div>
                    <div className="widget-subheading">Expected totals</div>
                  </div>
                  <div className="widget-content-right">
                    <div className="widget-numbers text-focus">$147</div>
                  </div>
                </div>
                <div className="widget-progress-wrapper">
                  <div className="progress-bar-sm progress-bar-animated-alt progress">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      aria-valuenow="54"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="progress-sub-label">
                    <div className="sub-label-left">Expenses</div>
                    <div className="sub-label-right">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="main-card mb-3 card">
              <div className="card-header">
                Active Users
                <div className="btn-actions-pane-right">
                  <div role="group" className="btn-group-sm btn-group">
                    <button className="active btn btn-focus">Last Week</button>
                    <button className="btn btn-focus">All Month</button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th>Name</th>
                      <th className="text-center">City</th>
                      <th className="text-center">Status</th>
                      <th className="text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center text-muted">#345</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left mr-3">
                              <div className="widget-content-left">
                                <img
                                  width="40"
                                  className="rounded-circle"
                                  src="assets/images/avatars/4.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">John Doe</div>
                              <div className="widget-subheading opacity-7">
                                Web Developer
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">Madrid</td>
                      <td className="text-center">
                        <div className="badge badge-warning">Pending</div>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          id="PopoverCustomT-1"
                          className="btn btn-primary btn-sm"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">#347</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left mr-3">
                              <div className="widget-content-left">
                                <img
                                  width="40"
                                  className="rounded-circle"
                                  src="assets/images/avatars/3.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">
                                Ruben Tillman
                              </div>
                              <div className="widget-subheading opacity-7">
                                Etiam sit amet orci eget
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">Berlin</td>
                      <td className="text-center">
                        <div className="badge badge-success">Completed</div>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          id="PopoverCustomT-2"
                          className="btn btn-primary btn-sm"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">#321</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left mr-3">
                              <div className="widget-content-left">
                                <img
                                  width="40"
                                  className="rounded-circle"
                                  src="assets/images/avatars/2.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">Elliot Huber</div>
                              <div className="widget-subheading opacity-7">
                                Lorem ipsum dolor sic
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">London</td>
                      <td className="text-center">
                        <div className="badge badge-danger">In Progress</div>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          id="PopoverCustomT-3"
                          className="btn btn-primary btn-sm"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center text-muted">#55</td>
                      <td>
                        <div className="widget-content p-0">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left mr-3">
                              <div className="widget-content-left">
                                <img
                                  width="40"
                                  className="rounded-circle"
                                  src="assets/images/avatars/1.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="widget-content-left flex2">
                              <div className="widget-heading">
                                Vinnie Wagstaff
                              </div>
                              <div className="widget-subheading opacity-7">
                                UI Designer
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center">Amsterdam</td>
                      <td className="text-center">
                        <div className="badge badge-info">On Hold</div>
                      </td>
                      <td className="text-center">
                        <button
                          type="button"
                          id="PopoverCustomT-4"
                          className="btn btn-primary btn-sm"
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="d-block text-center card-footer">
                <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                  <i className="pe-7s-trash btn-icon-wrapper"> </i>
                </button>
                <button className="btn-wide btn btn-success">Save</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
              <div className="widget-content">
                <div className="widget-content-outer">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left pr-2 fsize-1">
                      <div className="widget-numbers mt-0 fsize-3 text-danger">
                        71%
                      </div>
                    </div>
                    <div className="widget-content-right w-100">
                      <div className="progress-bar-xs progress">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          aria-valuenow="71"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content-left fsize-1">
                    <div className="text-muted opacity-6">Income Target</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
              <div className="widget-content">
                <div className="widget-content-outer">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left pr-2 fsize-1">
                      <div className="widget-numbers mt-0 fsize-3 text-success">
                        54%
                      </div>
                    </div>
                    <div className="widget-content-right w-100">
                      <div className="progress-bar-xs progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          aria-valuenow="54"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content-left fsize-1">
                    <div className="text-muted opacity-6">Expenses Target</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
              <div className="widget-content">
                <div className="widget-content-outer">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left pr-2 fsize-1">
                      <div className="widget-numbers mt-0 fsize-3 text-warning">
                        32%
                      </div>
                    </div>
                    <div className="widget-content-right w-100">
                      <div className="progress-bar-xs progress">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          aria-valuenow="32"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content-left fsize-1">
                    <div className="text-muted opacity-6">Spendings Target</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
              <div className="widget-content">
                <div className="widget-content-outer">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left pr-2 fsize-1">
                      <div className="widget-numbers mt-0 fsize-3 text-info">
                        89%
                      </div>
                    </div>
                    <div className="widget-content-right w-100">
                      <div className="progress-bar-xs progress">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          aria-valuenow="89"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="widget-content-left fsize-1">
                    <div className="text-muted opacity-6">Totals Target</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
